import { useState } from "react";
import { shortenUrl } from "../utils/apiService";

function URLForm({ setShortUrl }) {
  const [inputUrl, setInputUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
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
      const shortUrl = await shortenUrl(inputUrl); // Llama al servicio para acortar URL
      setShortUrl(shortUrl); // Establece la URL corta en el estado del componente padre
    } catch (error) {
      console.error("Error acortando la URL:", error.message);
      alert("Hubo un problema al acortar la URL.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <label>
        <input
          className="inputLabel"
          placeholder="Ingresa tu URL aquí"
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value)}
        />
      </label>
      <div className="card">
        <button onClick={handleSubmit} disabled={loading}>
          {loading ? "Acortando..." : "Acortar URL"}
        </button>
      </div>
    </div>
  );
}

export default URLForm;
