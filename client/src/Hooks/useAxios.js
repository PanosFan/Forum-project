import axios from "axios";

const { useState, useEffect } = require("react");

const useAxios = (configObject) => {
  const { method = "GET", url, payload = null } = configObject;

  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        const response = await axios.request({
          data: payload,
          signal: controller.signal,
          method,
          url,
        });
        console.log(response.data);
        setResponse(response.data);
      } catch (error) {
        if (error.message !== "canceled") {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    })();
    return () => controller.abort();
  }, []);

  return { response, error, loading };
};

export default useAxios;
