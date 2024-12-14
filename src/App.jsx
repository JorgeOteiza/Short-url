import { useState } from "react";
import URLForm from "./components/URLForm";
import ShortenedURL from "./components/ShortenedURL";
import "./styles/App.css";
import "./styles/index.css";

function App() {
  const [shortUrl, setShortUrl] = useState("");

  return (
    <div className="container">
      <div className="w-auto h-auto p-3">
        <div className="bg-lightblue">
          <a
            href="https://tinyurl.com/4969cyrv"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://tinyurl.com/4969cyrv"
              alt="Short URL Logo"
              className="logo"
            />
          </a>
        </div>
        <URLForm setShortUrl={setShortUrl} />
        <ShortenedURL shortUrl={shortUrl} />
      </div>
    </div>
  );
}

export default App;
