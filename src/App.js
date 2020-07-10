import React from "react";
import List from "./List";
import "./App.css";

function App({ store }) {
  const listInfo = store.lists.map((listData) => {
    return (
      <List
        header={listData.header}
        cards={listData.cardIds.map((id) => store.allCards[id])}
        key={listData.id}
      />
    );
  });
  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">{listInfo}</div>
    </main>
  );
}

export default App;
