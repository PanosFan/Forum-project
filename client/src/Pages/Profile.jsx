import useAxios from "../Hooks/useAxios";

const Profile = () => {
  const { response, error, loading } = useAxios({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/comments/4",
  });

  return (
    <div className="container">
      {response && <p>{response.name}</p>}
      {error && <p>{error}</p>}
      {loading && <p>Loading</p>}
    </div>
  );
};

export default Profile;
