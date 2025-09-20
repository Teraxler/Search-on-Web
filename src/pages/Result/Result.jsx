import { useParams } from "react-router";
import Footer from "../../components/Footer/Footer";
import AllResults from "./All/All";
import ImageResults from "./Images/Images";
import ResultHeader from "./ResultHeader/ResultHeader";

export default function Result() {
  const params = useParams();

  return (
    <>
      <ResultHeader />
      <main>
        {params.type === "images" ? <ImageResults /> : <AllResults />}
      </main>
      <Footer />
    </>
  );
}
