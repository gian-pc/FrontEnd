import { Route, Routes } from "react-router-dom";
import GuestLanding from "../modules/guest/screens/GuestLanding";
import GuestNosotros from "../modules/guest/screens/GuestNosotros";

const RouterGuest = () => {
  return (
    <Routes>
      <Route path="/" element={<GuestLanding />} />
      <Route path="nosotros" element={<GuestNosotros/>} />
    </Routes>
  );
};

export default RouterGuest;
