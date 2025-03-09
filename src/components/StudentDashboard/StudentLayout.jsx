import { Outlet } from 'react-router-dom';
import Sidebar from '../StudentDashboard/StudentSidebar';
import Navbar from '../StudentDashboard/StudentNavbar';

function Layout() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;