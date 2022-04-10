import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import NotFound from "./screens/404/NotFound";
import Home from "./screens/home/Home";
import Platos from "./screens/platos/Platos";
import Pos from "./screens/pos/Pos";

const App = () => {
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Inicio</Link>
            </li>
            <li>
              <Link to={"/pos"}>Punto de Venta</Link>
            </li>
            <li>
              <Link to={"/platos"}>Lista de Platos</Link>
            </li>
          </ul>
        </nav>
      </header>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pos" element={<Pos />} />
        <Route path="/platos" element={<Platos />} />
        <Route path="*" element= {<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
