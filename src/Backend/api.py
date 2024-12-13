from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, HttpUrl
from sqlalchemy.orm import Session
from database import SessionLocal, engine, Base
from models import URL
from utils import generate_short_id

Base.metadata.create_all(bind=engine)

app = FastAPI()

class URLRequest(BaseModel):
    original_url: HttpUrl

@app.post("/shorten")
def shorten_url(request: URLRequest):
    db: Session = SessionLocal()
    original_url = request.original_url

    existing_url = db.query(URL).filter(URL.original_url == original_url).first()
    if existing_url:
        return {"short_url": f"http://localhost:8000/{existing_url.short_id}"}

    short_id = generate_short_id()
    new_url = URL(original_url=original_url, short_id=short_id)
    db.add(new_url)
    db.commit()
    db.refresh(new_url)
    db.close()
    return {"short_url": f"http://localhost:8000/{short_id}"}

@app.get("/{short_id}")
def redirect_url(short_id: str):
    db: Session = SessionLocal()
    url_entry = db.query(URL).filter(URL.short_id == short_id).first()
    if not url_entry:
        raise HTTPException(status_code=404, detail="URL no encontrada")
    return {"original_url": url_entry.original_url}
