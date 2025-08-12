import "./App.css";

function App() {
  return (
    <>
      <div className="grid [grid-template-areas:'nav''main'] lg:[grid-template-areas:'nav_nav''aside_main']">
        <div className="bg-orange-500 [grid-area:nav]">Nav</div>
        <div className="hidden bg-yellow-500 [grid-area:aside] lg:block">
          Aside
        </div>
        <div className="bg-blue-500 [grid-area:main]">Main</div>
      </div>
    </>
  );
}

export default App;
