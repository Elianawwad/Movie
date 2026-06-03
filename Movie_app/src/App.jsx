import GenrelMovieList from "./Components/GenrelMovieList";
import Header from "./Components/Header";
import ProductionHouse from "./Components/ProductionHouse";
import Slider from "./Components/Slider";


function App() {
  return (
    <div className="app">
      <Header/>
      <Slider/>
      <ProductionHouse/>
      <GenrelMovieList/>
    </div>
  );
}

export default App;
