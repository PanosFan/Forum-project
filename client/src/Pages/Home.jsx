import React from "react";
import useAxios from "../Hooks/useAxios";

const Home = () => {
  const { response, error, loading } = useAxios({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/todos/1",
  });

  return (
    <div className="container">
      <p>{response && response.id}</p>
      <p>{error && error}</p>
      <p>{loading && "loading"}</p>
    </div>
  );
};

export default Home;
