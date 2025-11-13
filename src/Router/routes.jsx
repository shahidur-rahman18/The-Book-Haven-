import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AllBooks from "../Pages/AllBooks";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import AddBook from "../Pages/AddBook";
import BookDetails from "../Pages/BookDetails";
import MyBooks from "../Pages/MyBooks";
import UpdateBook from "../Pages/UpdateBook";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/all-books",
        element: <AllBooks></AllBooks>,
      },

      {
        path: "/add-book",
        element: (
          <PrivateRoute>
            <AddBook></AddBook>
          </PrivateRoute>
        ),
      },
      {
        path: "/book-details/:id",
        element: (
          <PrivateRoute>
            <BookDetails></BookDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-books",
        element: (
          <PrivateRoute>
            <MyBooks></MyBooks>
          </PrivateRoute>
        ),
      },

      {
        path: "/update-book/:id",
        element: (
          <PrivateRoute>
            <UpdateBook></UpdateBook>
          </PrivateRoute>
        ),
       
      },

      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
]);
