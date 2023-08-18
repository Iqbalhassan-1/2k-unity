import Home from "./pages/Home";
import SignIn from "./auth/SignIn";
import Payment from "./pages/Payment";
import Contact from "./pages/Contact";
import Signup from "./auth/Signup";
import ForgotPassword from "./auth/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import Ranking from "./pages/Ranking";
import DashboardLogin from "./pages/DashboardLogin";
import CreateMatch from "./pages/CreateMatch";
import CreateTeam from "./pages/CreateTeam";
import Chat from "./component/chat/Chat";
import Protected from "./Protected";
import { createBrowserRouter } from "react-router-dom";
import Leaders from "./pages/Leaders";
import MatchStatus from "./component/MatchStatus";
import Players from "./pages/Players";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <Signup />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/leaders",
        element: <Leaders />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
    ],
  },
  {
    path: "/nav-rank",
    element: <Protected Component={DashboardLogin} />,
    children: [
      {
        path: "/nav-rank/ranking",
        element: <Ranking />,
      },
      {
        path: "/nav-rank/create-match",
        element: <CreateMatch />,
      },
      {
        path: "/nav-rank/create-team",
        element: <CreateTeam />,
      },
      {
        path: "/nav-rank/players",
        element: <Players />,
      },
      {
        path: "/nav-rank/match-status",
        element: <MatchStatus />,
      },
      {
        path: "/nav-rank/chat",
        element: <Chat />,
      },
      {
        path: "/nav-rank/player/:id",
        element: <Ranking />,
      },
    ],
  },
]);