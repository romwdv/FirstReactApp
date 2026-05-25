import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Content from "./Components/Content";

function App() {
  return (
    <div className="main">
      <Header title="My Blog" baseline="My first app React" />
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
