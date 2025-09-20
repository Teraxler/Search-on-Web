import React, { useEffect, useState } from "react";

// import { XMLParser } from "fast-xml-parser";
// import { parse } from "rss-to-json";

// const parser = new XMLParser();

export default function useFetchFeeds(urls) {
  const [webFeeds, setWebFeeds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchFeeds() {
      try {
        const allResponse = urls.map(async (url) => {
          const response = await fetch(
            `${
              process.env.REACT_APP_XML2JSON_API_URL
            }?rss_url=${encodeURIComponent(url)}&api_key=${
              process.env.REACT_APP_XML2JSON_API_KEY
            }`
          );

          return response.json();
        });

        const rssResult = await Promise.allSettled(allResponse);

        rssResult.flatMap((rss) => {
          return rss.status === "fulfilled" ? rss.value.items : "";
        });

        setWebFeeds(rssResult.flatMap((rss) => rss.value.items));
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    urls?.length && fetchFeeds();
  }, [urls]);

  return webFeeds;
}
