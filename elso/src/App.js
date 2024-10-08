import { ADATLISTA } from "./adatok";
import { useState } from "react";
import "./App.css";
import Kartyak from "./components/Kartyak";

function App() {
  // state az egy változó a program állapotát írja le és az UseState függvényel tudjuk beállítani az értékét
  // react figyeli, hogy a state-ek mikor változik az állapota
  // amikor változik akkor automatikusan frissiti

  //const kLista = [];
  const [kLista, setkLista] = useState([]);
  function kattKez(adat) {
    /* Ez a függvény fogja lekezelni a gyerekkomponsenstől kapott infókat. */
    /* state-ek értékét nem változtathatjuk közvetlenül, csak a hozzárendelt függvények segítségével */
    const uLista = [...kLista];
    kLista.push(adat);
    setkLista([...uLista]);
    console.log(adat);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Helló react</h1>
      </header>
      <main>
        <article>
          <Kartyak lista={ADATLISTA} kattKez={kattKez} />
        </article>
        <aside>
          <h3>Kiválasztott könyvek:</h3>
          <Kartyak lista={kLista} kattKez={kattKez} />
        </aside>
        <footer>Albert Orsolya</footer>
      </main>
    </div>
  );
}

export default App;
