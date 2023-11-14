import { createBrowserRouter } from "react-router-dom";

import Root from "../layout";
import Home from "../pages/Home/Home";
import OneUser from "../pages/OneUser/OneUser";
import AllUsers from "../pages/AllUsers/AllUsers";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/users',
        element: <AllUsers />
      },
      {
        path: '/users/:userId',
        element: <OneUser />
      }
    ]
  }
])

export default router