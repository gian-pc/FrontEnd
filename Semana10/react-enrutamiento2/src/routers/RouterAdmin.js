import { Routes, Route, Navigate } from "react-router-dom";
import AdminHeader from "../modules/admin/components/AdminHeader";
import AdminCategorias from "../modules/admin/screens/AdminCategorias";
import AdminDashboard from "../modules/admin/screens/AdminDashboard";
import AdminMesas from "../modules/admin/screens/AdminMesas";
import AdminPedidos from "../modules/admin/screens/AdminPedidos";
import AdminPlatos from "../modules/admin/screens/AdminPlatos";

const RouterAdmin = () => {
  return (
    <>
      <AdminHeader/>
      <Routes>
        <Route path="dashboard" element={<AdminDashboard/>} />
        <Route path="categorias" element={<AdminCategorias />} />
        <Route path="mesas" element={<AdminMesas />} />
        <Route path="pedidos" element={<AdminPedidos />} />
        <Route path="platos" element={<AdminPlatos />} />
        <Route path="*" element={<Navigate replace to="dashboard" />} />
      </Routes>
    </>
  )
}

export default RouterAdmin