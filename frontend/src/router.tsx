import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
]);
