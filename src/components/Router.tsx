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
import Login from "pages/login";
import SignUp from "pages/signup";

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
