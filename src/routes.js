import Main from "./pages/Main/Main";
import NewsPage from "./pages/News/NewsPage";
import NewsByCategoryPage from "./pages/News/NewsPageCategory";
import Result from "./pages/Result/Result";

export const routes = [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/result/:type/:q",
    element: <Result />,
  },
  {
    path: "/news",
    element: <NewsPage />,
  },
  {
    path: "/news/:cat",
    element: <NewsByCategoryPage />,
  },
  {
    path: "/*",
    element: <Main />,
  },
];
