import { useMemo } from "react";
import { useParams } from "react-router";
import NewsHeader from "./NewsHeader/NewsHeader";
import NewsSection from "./NewsSection/NewsSection";
import Footer from "../../components/Footer/Footer";
import useFetchFeeds from "../../hooks/useFetchFeeds";
import rssFeedLinks from "../../data/rss-feeds.json";
import NewsTitle from "./Widgets/NewsTitle";
import NewsItem from "./Widgets/NewsItem";
import { shuffleArray } from "../../utils/arrayMethods";

export default function NewsByCategoryPage() {
  const { cat } = useParams();
  const webFeeds = useFetchFeeds(rssFeedLinks[cat]);

  const shuffledFeeds = useMemo(() => shuffleArray(webFeeds), [webFeeds]);

  return (
    <>
      <NewsHeader />
      <div className="container mx-auto flex flex-col lg:flex-row gap-4 p-4">
        <main className="flex flex-col gap-y-4 flex-2">
          <NewsSection title={cat}>
            {webFeeds &&
              webFeeds.map((feed) => <NewsItem key={feed.guid} {...feed} />)}
          </NewsSection>
        </main>
        <aside className="flex flex-col gap-4 flex-1">
          <NewsSection>
            {shuffledFeeds &&
              shuffledFeeds.map((feed) => (
                <NewsTitle key={feed.guid} {...feed} />
              ))}
          </NewsSection>
        </aside>
      </div>
      <Footer />
    </>
  );
}
