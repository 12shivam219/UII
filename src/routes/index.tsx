import { useRoutes } from "react-router-dom";
import Login from "@Components/authentication/login/Login";
import Signup from "@Components/authentication/signup/Signup";
import { Dashboard } from "@Components/Dashboard/Dashboard";
// import { Header } from "@Components/Header/Header";
import { Layout } from "@Components/Layout/Layout";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "login",
        element: <Login />,
      }
    ],
  },
];

const RoutesMap = () => {
  const routeResult = useRoutes(routes);

  return routeResult;
};

export default RoutesMap;
