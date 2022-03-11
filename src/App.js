import React from "react";

import "./App.css";
import Card from "./components/Card";

function Layout(props) {
  return <div id="layout"></div>;
}
function App() {
  return (
    <div className="App">
      <Layout>
        <Card />
      </Layout>
    </div>
  );
}

export default App;
