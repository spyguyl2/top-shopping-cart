import { useState, useEffect } from "react";

const useApiData = (fetchUrl) => {
  const [shopData, setShopData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(fetchUrl, { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => {
        setShopData(response);
        setLoading(false);
      })
      .catch((error) => setError(error));
  }, [fetchUrl]);

  return { shopData, error, loading };
};

export default useApiData;
