import { useState } from "react";
import "./styles/App.css";
import "./styles/index.css";

function App() {
  const [inputUrl, setInputUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);

  // Obtiene las variables de entorno desde import.meta.env
  const API_URL = import.meta.env.VITE_API_URL;
  const API_KEY = import.meta.env.VITE_TINYURL_API_KEY;

  const handleShortenUrl = async () => {
    if (!inputUrl) {
      alert("Por favor, ingresa una URL válida.");
      return;
    }

    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    if (!urlRegex.test(inputUrl)) {
      alert("Por favor, ingresa una URL válida con http:// o https://");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          url: inputUrl,
        }),
      });

      if (!response.ok) {
        throw new Error("Error al acortar la URL");
      }

      const data = await response.json();
      setShortUrl(data.data.tiny_url);
    } catch (error) {
      console.error("Error:", error.message);
      alert(
        "Hubo un problema al acortar la URL. Verifica la API Key o el endpoint."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="w-auto h-auto">
        <div className="bg-lightblue">
          <a
            href="https://cdn.prod.website-files.com/66997e96fa2595f5ecfc86a3/6746771d12b2f278cc7363fd_short-url-logo.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.prod.website-files.com/66997e96fa2595f5ecfc86a3/6746771d12b2f278cc7363fd_short-url-logo.png"
              alt="Short URL Logo"
              className="logo"
            />
          </a>
        </div>
        <label>
          URL:
          <input
            className="inputLabel"
            placeholder="Ingresa tu URL aquí"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
          />
        </label>
        <div className="card">
          <button onClick={handleShortenUrl} disabled={loading}>
            {loading ? "Acortando..." : "Acortar URL"}
          </button>
        </div>
        {shortUrl && (
          <div>
            <h3>URL Acortada:</h3>
            <a href={shortUrl} target="_blank" rel="noopener noreferrer">
              {shortUrl}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
