import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NotFound from "../pages/NotFound/NotFound";
import Blog from "../pages/Blog/Blog";
import LoginLayout from "../Layouts/LoginLayout";
import PrivateRoute from "./PrivateRoute";
import AllToys from "../pages/toys/AllToys/AllToys";
import AddAToy from "../pages/toys/AddAToy/AddAToy";
import MyToys from "../pages/toys/MyToys/MyToys";
import ToyDetails from "../pages/toys/ToyDetails/ToyDetails";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Main></Main>,
      children: [
         {
            path: "/",
            element: <Home></Home>
         },
         {
            path: "blog",
            element: <Blog></Blog>
         }
      ]
   },
   {
      path: "/",
      element: <LoginLayout></LoginLayout>,
      children: [
         {
            path: "login",
            element: <Login></Login>
         },
         {
            path: "register",
            element: <Register></Register>
         },
         {
            path: "add-toy",
            element: <PrivateRoute><AddAToy></AddAToy></PrivateRoute>
         }
      ],
   },
   {
      path: "/",
      element: <LoginLayout></LoginLayout>,
      children: [
         {
            path: "/all-toy",
            element: <AllToys></AllToys>,
            loader: () => fetch('http://localhost:5000/toy'),
         },
         {
            path: "/my-toys",
            element: <MyToys></MyToys>,
         },
         {
            path: "/toy/:id",
            element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
            loader: () => fetch(`http://localhost:5000/toy/`),
         }
      ]
   },
   {
      path: "*",
      element: <NotFound></NotFound>
   }
]);

export default router;