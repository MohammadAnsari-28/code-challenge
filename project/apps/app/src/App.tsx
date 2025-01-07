import { List } from "ui";
import useFetchApi from "./useFetchApi";

const App = () => {
  const { data, loading, error } = useFetchApi();

  if (error) return <p style={{ fontSize: 20, fontWeight: 600 }}>{error}</p>;

  return (
    <>
      <h1 style={{ justifyContent: "center", display: "flex", width: "100%" }}>
        Pokemon
      </h1>
      {loading ? <div>Loading....</div> : <List data={data}/>}
    </>
  );
};
export default App;
