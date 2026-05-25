import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Content from "./Components/Content";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="main">
      <Header title="My Blog" baseline="My first app React" />
      <Navbar />
      <Content />
      <Footer whith="React" at="Le Reacteur" by="Romain" />
    </div>
  );
}

export default App;
