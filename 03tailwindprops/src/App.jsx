import Card from "./components/Card";
import "./App.css";

function App() {
  
  return (
    <>
      <h1 className="bg-green-400 p-4 rounded-xl text-black mb-5">Tailwind Test</h1>
      <Card username="Mohit" btnText="Click me"/>
      <Card username="Senorita" />
      
    </>
  );
}

export default App;
