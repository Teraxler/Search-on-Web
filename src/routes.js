import { lazy } from "react";
const Main = lazy(() => import("./pages/Main/Main"));
const ImageResults = lazy(() => import("./pages/Results/ImageResults"));
const AllResults = lazy(() => import("./pages/Results/AllResults"));
const NewsPage = lazy(() => import("./pages/News/NewsPage"));
const NewsByCategoryPage = lazy(() => import("./pages/News/NewsPageCategory"));

export const routes = [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/result",
    children: [
      { path: "", element: <Main /> },
      { path: "all?/:q", element: <AllResults /> },
      { path: "images/:q", element: <ImageResults /> },
    ],
  },
  {
    path: "/khabar",
    children: [
      {
        path: "",
        element: <NewsPage />,
      },
      {
        path: ":cat",
        element: <NewsByCategoryPage />,
      },
    ],
  },
  {
    path: "/*",
    element: <Main />,
  },
];
