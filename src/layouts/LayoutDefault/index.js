import MiniCart from "../../components/MiniCart";
import "./layoutDefault.scss";
import { Link, Outlet } from "react-router-dom";
function LayoutDefault() {
  return (
    <>
      <div className="layout-default">
        <header className="layout-default__header">
          <div className="layout-default__logo">
            <Link to={"/"}>logo</Link>
          </div>
          <div className="layout-default__cart">
            <MiniCart />
          </div>
        </header>
        <main className="layout-default__main">
          <Outlet />
        </main>
        <footer className="layout-default__footer">footer</footer>
      </div>
    </>
  );
}

export default LayoutDefault;
