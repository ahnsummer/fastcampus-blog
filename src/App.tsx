import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  Link,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      element: (
        <ul className="dispaly: flex">
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/posts">Post List</Link>
          </li>
          <li>
            <Link to="/posts/:id">Post Detail</Link>
          </li>
          <li>
            <Link to="/posts/new">Post New Page</Link>
          </li>
          <li>
            <Link to="/posts/edit/:id">Post Edit Page</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      ),
      children: [
        {
          path: "/",
          element: <h1>Main</h1>,
        },
        {
          path: "/posts",
          element: <h1>Post List Page</h1>,
        },
        {
          path: "/posts/:id",
          element: <h1>Post Detail Page</h1>,
        },

        {
          path: "/posts/new",
          element: <h1>Post New Page</h1>,
        },
        {
          path: "/posts/edit/:id",
          element: <h1>Post Edit Page</h1>,
        },
        {
          path: "/profile",
          element: <h1>Profile Page</h1>,
        },
        {
          path: "*",
          element: <Navigate replace to="/" />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
