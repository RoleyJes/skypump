import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Roadmap from "./Pages/Roadmap";
import Benefits from "./Pages/Benefits";
import Features from "./Pages/Features";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "features", element: <Features /> },
      { path: "benefits", element: <Benefits /> },
      { path: "roadmap", element: <Roadmap /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
