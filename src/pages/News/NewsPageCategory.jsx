import { useParams } from "react-router";
import NewsHeader from "./NewsHeader/NewsHeader";
import NewsSection from "./NewsSection/NewsSection";
import Footer from "../../components/Footer/Footer";
import useFetchFeeds from "../../hooks/useFetchFeeds";
import NewsTitle from "../../components/NewsTitle/NewsTitle";
import NewsItem from "../../components/NewsItem/NewsItem";
import rssFeedLinks from "../../data/rss-feeds.json";
import { shuffleArray } from "../../utils/arrayMethods";
import { numberGenerator } from "../../utils/numberMethods";
import SkeletonNewsItem from "../../components/NewsItem/SkeletonNewsItem";
import Skeleton from "@mui/material/Skeleton";

export default function NewsByCategoryPage() {
  const { cat } = useParams();
  const webFeeds = useFetchFeeds(rssFeedLinks[cat]);
  const shuffledFeeds = shuffleArray(webFeeds);

  return (
    <>
      <NewsHeader />
      <div className="container mx-auto flex flex-col lg:flex-row gap-4 p-4">
        <main className="flex flex-col gap-y-4 flex-2">
          <NewsSection title={cat}>
            {webFeeds.length
              ? webFeeds.map((feed) => <NewsItem key={feed.guid} {...feed} />)
              : numberGenerator(0, 20).map((id) => (
                  <SkeletonNewsItem key={id} />
                ))}
          </NewsSection>
        </main>
        <aside className="flex flex-col gap-4 flex-1">
          <NewsSection title={cat}>
            {shuffledFeeds.length
              ? shuffledFeeds.map((feed) => (
                  <NewsTitle key={feed.guid} {...feed} />
                ))
              : numberGenerator(0, 20).map((id) => <Skeleton key={id} />)}
          </NewsSection>
        </aside>
      </div>
      <Footer />
    </>
  );
}
