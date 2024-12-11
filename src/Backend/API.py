from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, HttpUrl
from sqlalchemy import create_engine, Column, String, Integer
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import random
import string

# Configuración de la base de datos
DATABASE_URL = "sqlite:///./shorturl.db"
Base = declarative_base()
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Modelo de la base de datos
class URL(Base):
    __tablename__ = "urls"
    id = Column(Integer, primary_key=True, index=True)
    original_url = Column(String, nullable=False)
    short_id = Column(String, unique=True, index=True)

Base.metadata.create_all(bind=engine)

# Inicialización de la aplicación FastAPI
app = FastAPI()

# Modelo de Pydantic
class URLRequest(BaseModel):
    original_url: HttpUrl

# Generar un identificador único para la URL
def generate_short_id():
    return ''.join(random.choices(string.ascii_letters + string.digits, k=6))

# Crear una URL acortada
@app.post("/shorten")
def shorten_url(request: URLRequest):
    db = SessionLocal()
    original_url = request.original_url

    # Verificar si la URL ya está acortada
    existing_url = db.query(URL).filter(URL.original_url == original_url).first()
    if existing_url:
        return {"short_url": f"http://localhost:8000/{existing_url.short_id}"}

    # Crear una nueva entrada
    short_id = generate_short_id()
    new_url = URL(original_url=original_url, short_id=short_id)
    db.add(new_url)
    db.commit()
    db.refresh(new_url)
    db.close()
    return {"short_url": f"http://localhost:8000/{short_id}"}

# Redirigir a la URL original
@app.get("/{short_id}")
def redirect_url(short_id: str):
    db = SessionLocal()
    url_entry = db.query(URL).filter(URL.short_id == short_id).first()
    if not url_entry:
        raise HTTPException(status_code=404, detail="URL no encontrada")
    return {"original_url": url_entry.original_url}
