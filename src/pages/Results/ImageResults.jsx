import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { getSearchImages } from "../../services/searchImages.service";
import ImageGalery from "../../components/ImageGalery/ImageGalery";
import Loader from "../../components/Loader/Loader";
import { numberGenerator } from "../../utils/numberMethods";
import SkeletonImageGalery from "../../components/ImageGalery/SkeletonImageGalery";
import ResultHeader from "./ResultsHeader/ResultsHeader";
import Footer from "../../components/Footer/Footer";
// import searchResult from "../../../data/search-images.json";

export default function ImageResults() {
  const params = useParams();

  const [images, setImages] = useState([]);
  const [isLoaderVisible, setIsLoaderVisible] = useState(false);
  const [query, setQuery] = useState(params.q ?? "");
  const [currentPage, setCurrentPage] = useState(1);

  // const previousPageRef = useRef(currentPage);
  const loaderContainerRef = useRef(null);
  const observerRef = useRef(null);

  // useEffect(() => {
  //   if (previousPageRef.current !== currentPage) {
  //     console.log(
  //       "CurrentPage update current:",
  //       previousPageRef.current,
  //       "new:",
  //       currentPage
  //     );
  //   }
  // }, [currentPage]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.isIntersecting && setCurrentPage((prevValue) => prevValue + 1);
      });
    });
  }, []);

  useEffect(() => {
    images?.length && setIsLoaderVisible(true);
  }, [images]);

  useEffect(() => {
    isLoaderVisible && observerRef.current.observe(loaderContainerRef.current);
  }, [isLoaderVisible]);

  useEffect(() => {
    if (params.q !== query) {
      setQuery(params.q);
      setImages([]);
      setCurrentPage(1);
    }
  }, [params]);

  useEffect(() => {
    async function getData() {
      const data = await getSearchImages(query, currentPage);
      // const data = searchResult.images;

      if (data?.length === 0) {
        setIsLoaderVisible(false);
        return;
      }

      currentPage === 1
        ? setImages(data)
        : setImages((prevImages) => [...prevImages, ...data]);
    }

    getData();
  }, [query, currentPage]);
  
  return (
    <>
      <ResultHeader />
      <main>
        <section
          className="flex flex-wrap justify-start gap-5 p-5"
          id="images-container"
        >
          {images?.length
            ? images.map((image) => (
                <ImageGalery key={image.title + image.position} {...image} />
              ))
            : numberGenerator(0, 50).map((id) => (
                <SkeletonImageGalery key={id} />
              ))}

          {isLoaderVisible ? (
            <div
              className="flex items-center justify-center w-full h-45"
              ref={loaderContainerRef}
            >
              <Loader className="border-[#474554]" />
            </div>
          ) : (
            ""
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}
