import "./Poster.css";

function Poster({ src }) {
  return <img className="poster" src={src} alt="Постер фильма" />;
}

export default Poster;
