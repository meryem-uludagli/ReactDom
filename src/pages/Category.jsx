import { NavLink, Outlet } from "react-router-dom";

const Category = () => {
  const role = "admin";
  if (role !== "admin") {
    return "Bu sayfaya erisim yetkin yok";
  }
  return (
    <div className="d-flex align-items-center gap-4 p-5">
      <aside className="d-flex flex-column bg-white p-5 rounded-4 fs-4">
        <NavLink to={"/category/hikaye"}>Hikaye</NavLink>
        <NavLink to={"/category/roman"}>Roman</NavLink>
      </aside>
      <Outlet />
    </div>
  );
};

export default Category;
