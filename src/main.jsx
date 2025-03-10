import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HomePage } from './components/HomePage.jsx';
import { Navbar } from './components/shared/NavBar.jsx';
import { Home } from 'lucide-react';
import RootLayout from './layouts/root.layout.jsx';
import MainLayout from './layouts/main.layout.jsx';
import {SignInAuth} from './components/LoginPage.jsx';
import FindTutor from './components/FindATutor.jsx';
import KuppiGroups from './components/KuppiGroups/KuppiGroups.jsx';
import BecomeATutor from './components/BecomeATutor.jsx';
import Layout from './components/StudentDashboard/StudentLayout.jsx'
// import './index.css'

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
      path: '/sign-up',
      element:<SignInAuth/>
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
