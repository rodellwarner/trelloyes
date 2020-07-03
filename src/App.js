import React from "react";
import List from "./List";

function App({ store }) {
  const listInfo = store.lists.map((listHeader) => {
    return (
      <List
        header={listHeader.header}
        cards={listHeader.cardIds.map((id) => store.allCards[id])}
        key={listHeader.id}
      />
    );
  });
  return (
    <main>
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">{listInfo}</div>
    </main>
  );
}

export default App;
