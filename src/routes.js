import Main from "./pages/Main/Main";
import Result from "./pages/Result/Result";

export const routes = [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/result/",
    element: <Main />,
  },
  {
    path: "/result/:q",
    element: <Result />,
  },
];
