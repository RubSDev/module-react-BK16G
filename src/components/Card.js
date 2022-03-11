import Card from "./components/card";
import "./App.css";
import Button from "./Button";
import Img from "./Videogame01";
import Img2 from "./Videogame02";
import Img3 from "./Videogame03";

function Layout({ children }) {
  return <div>{children}</div>;
}

function App() {
  return (
    <Layout>
      <div className="App">
        <header className="App-header">
          <Card
            img={Img}
            alt="Videogame Uncharted"
            titulo="Uncharted 4: A Thief's End - Hits - - Standard Edition - PlayStation 4"
            precio={<small>$499.00</small>}
            Button="Comprar"
          />
          <Card
            img={Img2}
            alt="Videogame"
            titulo="The Witcher 3 Game of the Year Edition (PS4) "
            precio={<small>$577.52</small>}
            Button="comprar"
          />
          <Card
            img={Img3}
            alt="Videogame "
            titulo="The Last of Us Part II - PlayStation 4 - Standard Edition "
            precio={<small>$665.77</small>}
            Button="Comprar"
          />
        </header>
      </div>
    </Layout>
  );
}

export default App;
