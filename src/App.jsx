import "./App.css";
import Products from "./components/Products";

function App() {
  return (
    <>
      <Products />
      <button type="button" onClick={() => alert("Button clicked!")}>
        Click Me
      </button>
    </>
  );
}

export default App;
