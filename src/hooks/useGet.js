import { useEffect, useState, useCallback } from "react";
import useAxios from "./useAxios";

const useGet = (initialUrl) => {
  const axiosInstance = useAxios();
  const [url, setUrl] = useState(initialUrl);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = useCallback(() => {
    setLoading(true);

    axiosInstance
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url, axiosInstance]);

  useEffect(() => {
    getData();
  }, [getData]);

  return {
    data,
    loading,
    error,
    setUrl,
    refetch: getData,
  };
};

export default useGet;
