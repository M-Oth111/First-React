import { Home } from "./Components/Home";
import { Portfoilo } from "./Components/Portfoilo/Portfoilo";
import { Contact } from "./Components/Contact/Contact";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./Components/Layout/Layout";
import { About } from "./Components/About/About";
const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "About", element: <About /> },
      { path: "Portfoilo", element: <Portfoilo /> }, 
      { path: "Contact", element: <Contact /> },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
}
