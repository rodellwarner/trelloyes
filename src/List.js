import React from "react";
import "./List.css";
import Card from "./Card";

function List({ header, cards, onAddRandomCard, onDeleteCard }) {
  return (
    <section className="List">
      <header className="List-header">
        <h2>{header}</h2>
      </header>
      <div className="List-cards">
        {cards.map((card, index) => {
          return (
            <Card
              title={card.title}
              content={card.content}
              key={index}
              connectionToOnDeletecard={onDeleteCard}
            />
          );
        })}

        <button
          type="button"
          className="List-add-button"
          onClick={onAddRandomCard}
        >
          + Add Random Card
        </button>
      </div>
    </section>
  );
}

export default List;
