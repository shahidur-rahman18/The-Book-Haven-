import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AllBooks from "../Pages/AllBooks";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import Profile from "../Pages/Profile";
import AddBook from "../Pages/AddBook";
import BookDetails from "../Pages/BookDetails";
import MyBooks from "../Pages/MyBooks";
import MyDownloads from "../Pages/MyDownloads";
import UpdateBook from "../Pages/UpdateBook";


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
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/add-book",
        element: <AddBook></AddBook>,
      },
      {
        path: "/book-details/:id",
        element: <BookDetails></BookDetails>,
      },
      {
        path: "/my-books",
        element: <MyBooks></MyBooks>,
      },
      {
        path: "/my-downloads",
        element:<MyDownloads></MyDownloads> ,
      },
      {
        path: "/update-book/:id",
        element:<UpdateBook></UpdateBook>,
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
