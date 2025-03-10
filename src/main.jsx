import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HomePage } from './components/HomePage.jsx';
import { Navbar } from './components/shared/NavBar.jsx';
import RootLayout from './layouts/root.layout.jsx';
import MainLayout from './layouts/main.layout.jsx';
import {SignInAuth} from './components/LoginPage.jsx';
import FindTutor from './components/FindATutor.jsx';
import KuppiGroups from './components/KuppiGroups/KuppiGroups.jsx';
import BecomeATutor from './components/BecomeATutor.jsx';
import Layout from './components/StudentDashboard/StudentLayout.jsx'
import MainSign from './components/MainSign.jsx'
import DashBoardLayout from './layouts/dashBoard.layout.jsx';
import MainContent from './components/tutorDashboard/MainContent.jsx';
import DashBoardClasses from './components/Dashboard/DashboardClasses.jsx'
import StudentView from './components/tutorDashboard/StudentSection.jsx'
import DashboardPayments from './components/Dashboard/DashboardPayments.jsx';
import Settings from './components/tutorDashboard/SettingSection.jsx'

const router = createBrowserRouter([
  {
   element:<RootLayout/>,
   children: [
    {
      element: <MainLayout/>,
      children: [
        {
          path: '/home',
          element: <HomePage/>
        },
        {
          path:'/find-tutor',
          element:<FindTutor/>
        },
        {
          path:'/kuppiGroups',
          element:<KuppiGroups/>
        },
        {
          path: '/become-tutor',
          element: <BecomeATutor/>
        }
      ]
    },
    {
      element: <DashBoardLayout/>,
      children: [
        {
          path:'/tutor-dashboard',
          element:<MainContent/>
        },
        {
          path:'/tutor-dashboard-classes',
          element:<DashBoardClasses/>
        },
        {
          path:'/tutor-dashboard-students',
          element:<StudentView/>
        },
        {
          path:'/tutor-dashboard-payments',
          element:<DashboardPayments/>
        },
        {
          path:'/tutor-dashboard-settings',
          element:<Settings/>
        }
      ]
    },
    {
      path: '/sign-up',
      element:<MainSign/>
    },
    {
      path: '/student-dash-board',
      element:<Layout/>
    },
    //  
   ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)



