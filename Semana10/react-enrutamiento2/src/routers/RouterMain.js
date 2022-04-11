import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouterAdmin from "./RouterAdmin";
import RouterAuth from "./RouterAuth";
import RouterGuest from "./RouterGuest";

const RouterMain = () => {
  return (
    <BrowserRouter>
      contenido statico
      <Routes>
        <Route path="/auth" element={<RouterAuth />} />
        <Route path="/admin" element={<RouterAdmin />} />
        <Route path="/" element={<RouterGuest />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterMain;
