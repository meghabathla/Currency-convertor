import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        );
        const responseData = await response.json();
        setData(responseData[currency]);
      } catch (error) {
        console.log(`API Error in fetching currency data: ${error}`);
      }
    };
    fetchdata();
  }, [currency]);

  return data;
}
export default useCurrencyInfo;
