import { Routes, Route, Navigate } from "react-router-dom";
import AuthLogin from "../modules/auth/screens/AuthLogin";
import AuthRecover from "../modules/auth/screens/AuthRecover";
import AuthRegister from "../modules/auth/screens/AuthRegister";

const RouterAuth = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<AuthLogin />} />
        <Route path="register" element={<AuthRegister />} />
        <Route path="recover" element={<AuthRecover />} />
        <Route path="*" element={<Navigate replace to="login" />} />
      </Routes>
    </>
  );
};

export default RouterAuth;
