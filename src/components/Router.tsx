import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import Home from "pages/home";
import PostsPage from "pages/posts";
import PostPage from "pages/posts/detail";
import PostNew from "pages/posts/new";
import PostEdit from "pages/posts/edit";
import ProfilePage from "pages/profile";
import LoginPage from "pages/login";
import SignUpPage from "pages/signup";
import { useState } from "react";

export default function Router() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const router = createBrowserRouter([
    {
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/posts",
          element: <PostsPage />,
        },
        {
          path: "/posts/:id",
          element: <PostPage />,
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
          element: <ProfilePage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/signup",
          element: <SignUpPage />,
        },
        {
          path: "*",
          element: <Navigate replace to="/" />,
        },
      ],
    },
  ]);

  const loginRouter = createBrowserRouter([
    {
      children: [
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/signup",
          element: <SignUpPage />,
        },
        {
          path: "*",
          element: <LoginPage />,
        },
      ],
    },
  ]);

  return (
    <>
      {isAuthenticated ? (
        <RouterProvider router={router} />
      ) : (
        <RouterProvider router={loginRouter} />
      )}
    </>
  );
}
