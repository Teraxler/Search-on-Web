import { lazy } from "react";
import { useParams } from "react-router";

const ImageResults = lazy(() => import("./ImageResults"));
const AllResults = lazy(() => import("./AllResults"));

export default function Results() {
  const { type } = useParams();

  if (type === "images") return <ImageResults />;

  return <AllResults />;
}
