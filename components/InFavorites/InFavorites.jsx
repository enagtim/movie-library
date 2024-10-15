import "./InFavorites.css";

function InFavorites({ text }) {
  return (
    <div className="in_favorite">
      <img src="/like.svg" alt="Иконка лайка" />
      <div className="text">{text}</div>
    </div>
  );
}

export default InFavorites;
