import { useMemo } from "react";
import Footer from "../../components/Footer/Footer";
import HeaderNews from "./NewsHeader/NewsHeader";
import NewsTitle from "./Widgets/NewsTitle";
import NewsPicture from "./Widgets/NewsPicture";
import rssLinks from "../../data/rss-feeds.json";
import { shuffleArray } from "../../utils/arrayMethods";
import NewsSection from "./NewsSection/NewsSection";
import NewsItem from "./Widgets/NewsItem";
import NewsItemMini from "./Widgets/NewsItemMini";
import { Link } from "react-router";
import { FiChevronsLeft } from "react-icons/fi";
import useFetchFeeds from "../../hooks/useFetchFeeds";

export default function NewsPage() {
  const politicalFeeds = useFetchFeeds(rssLinks.political);
  const economyFeeds = useFetchFeeds(rssLinks.economy);
  const healthFeeds = useFetchFeeds(rssLinks.health);
  const sportFeeds = useFetchFeeds(rssLinks.sports);
  const latestFeeds = useFetchFeeds(rssLinks.latest);

  const shuffledPoliticalFeeds = useMemo(
    () => shuffleArray(politicalFeeds).slice(0, 10),
    [politicalFeeds]
  );
  const shuffledEconomyFeeds = useMemo(
    () => shuffleArray(economyFeeds).slice(0, 10),
    [economyFeeds]
  );
  const shuffledLatestFeeds = useMemo(
    () => shuffleArray(latestFeeds).slice(0, 10),
    [latestFeeds]
  );
  const shuffledHealthFeeds = useMemo(
    () => shuffleArray(healthFeeds).slice(0, 10),
    [healthFeeds]
  );
  const shuffledSportFeeds = useMemo(
    () => shuffleArray(sportFeeds).slice(0, 10),
    [sportFeeds]
  );

  document.body.style.background = "#f6f6f6";

  return (
    <>
      <HeaderNews />

      <div className="container mx-auto flex flex-col lg:flex-row gap-4 p-4">
        <main className="flex flex-col gap-y-4 flex-2">
          <NewsSection title={"آخرین خبر‌ها"}>
            {shuffledLatestFeeds &&
              shuffledLatestFeeds.map((feed) => (
                <NewsTitle key={feed.guid} {...feed} hasAuthor hasPubDate />
              ))}
          </NewsSection>
          <NewsSection title={"سیاسی"}>
            {shuffledPoliticalFeeds &&
              shuffleArray(shuffledPoliticalFeeds).map((feed) => (
                <NewsItem key={feed.guid} {...feed} />
              ))}
          </NewsSection>
          <NewsSection title={"اقتصادی"}>
            <div className="flex flex-wrap gap-y-4 mt-4">
              {shuffledEconomyFeeds &&
                shuffleArray(shuffledEconomyFeeds).map((feed) => (
                  <NewsPicture key={feed.guid} {...feed} />
                ))}
            </div>
          </NewsSection>
          <NewsSection title={"ورزشی"}>
            <div className="flex flex-wrap">
              {shuffledSportFeeds &&
                shuffleArray(shuffledSportFeeds).map((feed) => (
                  <NewsItemMini key={feed.guid} {...feed} />
                ))}
            </div>
            <div className="flex items-end">
              <Link
                to={"/news/sports"}
                className="flex items-center gap-x-0.5 text-[#d71920] ms-auto"
              >
                بیشتر
                <FiChevronsLeft />
              </Link>
            </div>
          </NewsSection>
        </main>
        <aside className="flex flex-col gap-4 flex-1">
          <NewsSection title={"سلامت"}>
            {shuffledHealthFeeds &&
              shuffleArray(shuffledHealthFeeds).map((feed) => (
                <NewsTitle key={feed.guid} {...feed} />
              ))}
          </NewsSection>
          <NewsSection title={"خبرگزاری‌های تحت پوشش"}>
            <div className="flex items-center justify-between flex-wrap">
              {rssLinks.websites &&
                rssLinks.websites.map((website) => (
                  <div key={website} className="p-2 w-1/3">
                    <a className="line-clamp-1" title={website}>
                      {website}
                    </a>
                  </div>
                ))}
            </div>
          </NewsSection>
        </aside>
      </div>

      <Footer />
    </>
  );
}
