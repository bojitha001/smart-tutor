import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ClerkProvider } from '@clerk/clerk-react';
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./components/HomePage.jsx";
import { Navbar } from "./components/shared/NavBar.jsx";
import RootLayout from "./layouts/root.layout.jsx";
import MainLayout from "./layouts/main.layout.jsx";
// import { SignInAuth } from "./components/LoginPage.jsx";
import { Login } from "./components/LoginPage.jsx";
import FindTutor from "./components/FindATutor.jsx";
import KuppiGroups from "./components/KuppiGroups/KuppiGroups.jsx";
import BecomeATutor from "./components/BecomeATutor.jsx";
import Layout from "./components/StudentDashboard/StudentLayout.jsx";
import MainSign from "./components/MainSign.jsx";
import DashBoardLayout from "./layouts/dashBoard.layout.jsx";
import MainContent from "./components/tutorDashboard/MainContent.jsx";
import DashBoardClasses from "./components/Dashboard/DashboardClasses.jsx";
import StudentView from "./components/tutorDashboard/StudentSection.jsx";
import DashboardPayments from "./components/Dashboard/DashboardPayments.jsx";
import Settings from "./components/tutorDashboard/SettingSection.jsx";
import Communities from "./components/KuppiGroups/Communities.jsx";
import QuestionForm from "./components/KuppiGroups/QuestionForm.jsx";
import Question from "./components/KuppiGroups/Questions.jsx";
import StudentDashBoardLayout from "./layouts/student.dashboard.layout.jsx";
import StudentDashboard from './components/StudentDashboard/StudentDashboard.jsx';
import StudentCourses from './components/StudentDashboard/StudentCourses.jsx';
import StudentResults from './components/StudentDashboard/StudentResults.jsx';
import StudentPayments from './components/StudentDashboard/StudentPayment.jsx';
import StudentSettings from './components/StudentDashboard/StudentSettings.jsx';
import { TutorSignUp } from "./components/SignUp/tutorSignUp/tutorSignUp.jsx";
import { StudentSignUp } from "./components/SignUp/studentSignUp/studentSignUp.jsx";
import { ParentSignUp } from "./components/SignUp/parentSignUp/parentSignUp.jsx";
import Questions from "./components/KuppiGroups/Questions.jsx";
import FullQuestion from "./components/KuppiGroups/FullQuestion.jsx";
import RequestTopic from "./components/KuppiGroups/RequestCommunity.jsx";
import TutorProfile from "./components/TutorProfile.jsx";
import TutorInputForm from "./components/tutorSignUp/InputForm.jsx";
import StudentInputForm from "./components/SignUp/studentSignUp/InputForm.jsx"
import BecomeATutorContac from './components/BecomeATutorContac.jsx'
import BookingForm from "./components/BookingForm.jsx";
// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            path: "/",
            element: <HomePage />,
          },
          {
            path: "/find-tutor",
            element: <FindTutor />,
          },
          {
            path: "/find-tutor/:id",
            element: <TutorProfile/>,
          },
          
          {
            path: "/kuppiGroups",
            element: <KuppiGroups />,
          },
          {
            path: "/become-tutor",
            element: <BecomeATutor />,
          },
        ],
      },
      {
        element: <DashBoardLayout />,
        children: [
          {
            path: "/tutor-dashboard",
            element: <MainContent />,
          },
          {
            path: "/tutor-dashboard-classes",
            element: <DashBoardClasses />,
          },
          {
            path: "/tutor-dashboard-students",
            element: <StudentView />,
          },
          {
            path: "/tutor-dashboard-payments",
            element: <DashboardPayments />,
          },
          {
            path: "/tutor-dashboard-settings",
            element: <Settings />,
          },
        ],
      },
      {
        path:'student',
        element: <StudentDashBoardLayout />,
        children: [
          {
            path: "dashboard",
            element: <StudentDashboard/>,
          },
          {
            path: "dashboard/courses",
            element: <StudentCourses/>,
          },
          {
            path: "dashboard/results",
            element: <StudentResults/>,
          },
          {
            path: "dashboard/payments",
            element: <StudentPayments/>,
          },
          {
            path: "dashboard/settings",
            element: <StudentSettings/>,
          },
        ],
      },
      {
        path: "/kuppigroups-communities",
        element: <Communities />,
      },
      {
        path: "/kuppigroups-requestTopic",
        element: <RequestTopic />,
      },
      {
        path: "/kuppigroups-communities/:id",
        element: <QuestionForm />,
      },
      {
        path: "/kuppigroups-communities/:id/questionform",
        element: <Questions />,
      },
      {
        path: "/kuppigroups-communities/:id/questionform/:id",
        element: <FullQuestion />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <MainSign />,
      },
      {
        path: "/tutor-sign-up",
        element: <TutorSignUp />,
      },
      {
        path: "/student-sign-up",
        element: <StudentSignUp />,
      },
      {
        path: "/parent-sign-up",
        element: <ParentSignUp />,
      },
      {
        path: "/tutorInput",
        element: <TutorInputForm />,
      },
      {
        path: "/studentInput",
        element: <StudentInputForm />,
      },
      {
        path: "/contact-us",
        element: <BecomeATutorContac/>,
      },
      {
        path: "/find-tutor/:id/booking",
        element: <BookingForm/>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
);
