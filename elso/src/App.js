import { ADATLISTA } from "./adatok";
import "./App.css";
import Kartyak from "./components/Kartyak";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Helló react</h1>
      </header>
      <main>
        <article>
         <Kartyak lista={ADATLISTA}/>
        </article>
        <aside>
          <h3>Kiválasztott könyvek:</h3>
        </aside>
        <footer>Albert Orsolya</footer>
      </main>
    </div>
  );
}

export default App;
