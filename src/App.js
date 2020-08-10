import React from "react";
import List from "./List";
import "./App.css";

function omit(obj, keyToOmit) {
  let { [keyToOmit]: _, ...rest } = obj;
  return rest;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [
        {
          id: "1",
          header: "First list",
          cardIds: ["a", "b", "e", "f", "g", "j", "l", "m"],
        },
        {
          id: "2",
          header: "Second list",
          cardIds: ["b", "c", "d", "f", "h", "i", "k"],
        },
        {
          id: "3",
          header: "Third list",
          cardIds: [
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "m",
          ],
        },
        {
          id: "4",
          header: "Fourth list",
          cardIds: ["l", "m"],
        },
      ],
      allCards: {
        a: { id: "a", title: "First card", content: "lorem ipsum" },
        b: { id: "b", title: "Second card", content: "lorem ipsum" },
        c: { id: "c", title: "Third card", content: "lorem ipsum" },
        d: { id: "d", title: "Fourth card", content: "lorem ipsum" },
        e: { id: "e", title: "Fifth card", content: "lorem ipsum" },
        f: { id: "f", title: "Sixth card", content: "lorem ipsum" },
        g: { id: "g", title: "Seventh card", content: "lorem ipsum" },
        h: { id: "h", title: "Eighth card", content: "lorem ipsum" },
        i: { id: "i", title: "Ninth card", content: "lorem ipsum" },
        j: { id: "j", title: "Tenth card", content: "lorem ipsum" },
        k: { id: "k", title: "Eleventh card", content: "lorem ipsum" },
        l: { id: "l", title: "Twelfth card", content: "lorem ipsum" },
        m: { id: "m", title: "Thirteenth card", content: "lorem ipsum" },
      },
    };
  }

  handleAddRandomCard = (listId) => {
    console.log("Add Random Card Called");
    console.log("The List We're Editing Is ", listId);
    // Generate random card
    const newRandomCard = () => {
      const id =
        Math.random().toString(36).substring(2, 4) +
        Math.random().toString(36).substring(2, 4);
      return {
        id,
        title: `Random Card ${id}`,
        content: "lorem ipsum",
      };
    };
    // console.log("Console log - call the function newRandomCard(): ", newRandomCard());

    const newCard = newRandomCard();

    console.log("Console log newCard: ", newCard);

    // Add newCard id to cardIds in selected list

    const newLists = this.state.lists.map((list) => {
      if (list.id === listId) {
        return {
          ...list,
          cardIds: [...list.cardIds, newCard.id],
        };
      }
      return list;
    });
    console.log("Console Log New Lists: ", newLists);

    // Add newCard to "allCards"

    this.setState({
      lists: newLists,
      allCards: { ...this.state.allCards, [newCard.id]: newCard },
    });

    // Add new random card to selected list
  };

  handleDeleteCard(cardId) {
    console.log("Delete Card Called");
    console.log(cardId);
  }

  render() {
    console.log("Console log this.state.allCards: ", this.state.allCards);
    const listInfo = this.state.lists.map((listData, index) => {
      return (
        <List
          header={listData.header}
          cards={listData.cardIds.map((id) => this.state.allCards[id])}
          id={listData.id}
          onAddRandomCard={this.handleAddRandomCard}
          onDeleteCard={this.handleDeleteCard}
          key={index}
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
}

//++++
//USING STORE, AS COMMENTED OUT BELOW, REQUIRES (in index-js):
//import STORE from "./store";
//ReactDOM.render(<App store={STORE} />, document.getElementById("root"));
//+++++

// function App({ store }) {
//   const listInfo = store.lists.map((listData) => {
//     return (
//       <List
//         header={listData.header}
//         cards={listData.cardIds.map((id) => store.allCards[id])}
//         key={listData.id}
//       />
//     );
//   });
//   return (
//     <main className="App">
//       <header className="App-header">
//         <h1>Trelloyes!</h1>
//       </header>
//       <div className="App-list">{listInfo}</div>
//     </main>
//   );
// }

export default App;
