// import AIMode from "./pages/AIMode/AIMode";
import Main from "./pages/Main/Main";
import Result from "./pages/Result/Result";

export const routes = [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/result/:q?/:page?",
    element: <Result />,
  },
  // {
  //   path: "/ai-mode/q?",
  //   element: <AIMode />,
  // },
];
