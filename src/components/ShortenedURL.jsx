function ShortenedURL({ shortUrl }) {
  if (!shortUrl) return null; // Si no hay URL corta, no renderiza nada

  return (
    <div>
      <h3>URL Acortada:</h3>
      <a href={shortUrl} target="_blank" rel="noopener noreferrer">
        {shortUrl}
      </a>
    </div>
  );
}

export default ShortenedURL;
