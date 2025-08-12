import "./App.css";
import NavBar from "./components/NavBar.tsx";

function App() {
  return (
    <>
      <div className="grid [grid-template-areas:'nav''main'] lg:[grid-template-areas:'nav_nav''aside_main']">
        <div className="[grid-area:nav]">
          <NavBar />
        </div>
        <div className="hidden bg-yellow-500 [grid-area:aside] lg:block">
          <span>NavBar</span>
        </div>
        <div className="bg-blue-500 [grid-area:main]">Main</div>
      </div>
    </>
  );
}

export default App;
