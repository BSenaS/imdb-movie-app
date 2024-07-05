import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { MoviesPage } from "./pages/MoviesPage";
import { MovieDetailPage } from "./pages/MovieDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/movies",
    element: <MoviesPage />,
  },
  {
    path: "/movie",
    element: <MovieDetailPage />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
