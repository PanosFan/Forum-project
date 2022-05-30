import useAxios from "../Hooks/useAxios";

const Home = () => {
  const { response, error, loading } = useAxios({
    method: "GET",
    url: "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo",
  });

  return (
    <div className="container">
      {error && <p>{error}</p>}
      {loading && <p>Loading</p>}
    </div>
  );
};

export default Home;
