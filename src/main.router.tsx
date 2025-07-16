import { lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const RootLayout = lazy(() => import("./pages/root.layout"));
const RootPage = lazy(() => import("./pages/root.page"));

const router = createBrowserRouter(
  [
    {
      path: "",
      element: <RootLayout />,
      children: [{ path: "", element: <RootPage /> }],
    },
  ],
  {
    basename: "/CV/",
  }
);

export default function AppRouterProvider() {
  return <RouterProvider router={router} />;
}
