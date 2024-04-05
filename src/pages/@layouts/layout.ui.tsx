import { Outlet } from "react-router-dom";

export const NakedLayout = () => {
  return <Outlet />;
};

export const GenericLayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export const Footer = () => {
  return (
    <footer>
      <div className="container">Footer</div>
    </footer>
  );
};
