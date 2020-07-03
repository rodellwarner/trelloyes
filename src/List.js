import React from "react";
import "./List.css";
import Card from "./Card";

function List({ header, cards }) {
  return (
    <section className="List">
      <header>{header}</header>
      <div className="List-cards">
        {cards.map((card) => {
          return (
            <Card title={card.title} content={card.content} key={card.id} />
          );
        })}
      </div>
      <button type="button" class="List-add-button">
        + Add Random Card
      </button>
    </section>
  );
}

export default List;
