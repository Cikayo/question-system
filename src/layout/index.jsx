import { Outlet } from "react-router-dom";
import Aside from "./aside";
import './layout.scss'

function Layout() {
  return (
    <div className="box site-layout">
      <Aside></Aside>
      <div className="box site-container">
        <Outlet />
      </div>
    </div>
  )
}


export default Layout;