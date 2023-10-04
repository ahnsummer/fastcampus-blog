import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { Home } from "../pages/home";
import { PostList } from "../pages/posts";
import { PostDetail } from "../pages/posts/detail";
import { PostNew } from "../pages/posts/new";
import { PostEdit } from "../pages/posts/edit";
import Profile from "../pages/profile";
import Login from "../pages/login";
import SignUp from "../pages/signUp";

export default function Router() {
  const router = createBrowserRouter([
    {
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/posts",
          element: <PostList />,
        },
        {
          path: "/posts/:id",
          element: <PostDetail />,
        },

        {
          path: "/posts/new",
          element: <PostNew />,
        },
        {
          path: "/posts/edit/:id",
          element: <PostEdit />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
        {
          path: "*",
          element: <Navigate replace to="/" />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
