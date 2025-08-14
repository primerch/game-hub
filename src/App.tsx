import "./App.css";
import NavBar from "./components/NavBar.tsx";
import GameGrid from "./components/GameGrid.tsx";

function App() {
  return (
    <>
      <div className="grid [grid-template-areas:'nav''main'] lg:grid-cols-[200px_1fr] lg:[grid-template-areas:'nav_nav''aside_main']">
        <div className="[grid-area:nav]">
          <NavBar />
        </div>
        <div className="hidden [grid-area:aside] lg:block">
          <span>Aside</span>
        </div>
        <div className="[grid-area:main]">
          <GameGrid />
        </div>
      </div>
    </>
  );
}

export default App;
