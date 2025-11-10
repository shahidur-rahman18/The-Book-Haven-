import { useState } from "react";
import useAxios from "./useAxios";

const usePost = () => {
  const axiosInstance = useAxios();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  const postData = async (url, body) => {
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const res = await axiosInstance.post(url, body);
      setResponse(res.data);
      return res.data;
    } catch (err) {
      setError(err);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, response, postData };
};

export default usePost;
