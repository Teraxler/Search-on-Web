import { lazy } from "react";
const Main = lazy(() => import("./pages/Main/Main"));
const NewsPage = lazy(() => import("./pages/News/NewsPage"));
const Results = lazy(() => import("./pages/Results/Results"));
const NewsByCategoryPage = lazy(() => import("./pages/News/NewsPageCategory"));

export const routes = [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/results",
    children: [
      { index: true, element: <Main /> },
      { path: ":type/:q", element: <Results /> },
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
