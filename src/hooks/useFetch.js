import  { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Network Error");
        }

        const result = await response.json();

        setData(result);
        setError(null);
      } catch (error) {
        setError(error);
        throw new Error("Failed to fetch:", { cause: error });
      } finally {
        setIsLoading(false);
      }
    }

    setIsLoading(true);
    fetchData();
  }, [url]);

  return [data, isLoading, error];
}
