import React, { useState } from "react";
import "./Card.css";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
function Card({ food, onAdd, onRemove }) {
  const [count, setCount] = useState(0);
  const { title, Image } = food;
  const navigation = useNavigate()
  const openGame = () => {
    navigation('/game')
  };
  const handleDecrement = () => {
    setCount(count - 1);
    onRemove(food);
  };

  return (
    <div className="card">
      <span
        className={`${count !== 0 ? "card__badge" : "card__badge--hidden"}`}
      >
        {count}
      </span>
      <div className="image__container">
        <img src={Image} alt={title} />
      </div>
      <h4 className="card__title">
        {title}
      </h4>

      <div className="btn-container">
        <Button title={"Play"} type={"add"} onClick={openGame} />

      </div>
    </div>
  );
}

export default Card;
