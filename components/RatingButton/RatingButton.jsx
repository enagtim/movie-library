import "./RatingButton.css";

function RatingButton({ text }) {
  return (
    <button className="rating-button">
      <img src="/star.svg" alt="Иконка рейтинга" />
      <div className="raiting-button__text">{text}</div>
    </button>
  );
}

export default RatingButton;
