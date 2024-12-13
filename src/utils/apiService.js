const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_TINYURL_API_KEY;

export const shortenUrl = async (inputUrl) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({ url: inputUrl }),
  });

  if (!response.ok) {
    throw new Error("Error al acortar la URL");
  }

  const data = await response.json();
  return data.data.tiny_url;
};
