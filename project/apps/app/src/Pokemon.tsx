import React, { useEffect } from "react";
import { List } from "ui";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemon } from "../../../packages/ui/store/pokemonSlice";
import { State, Dispatch } from "../../../packages/ui/store/store";

const Pokemon: React.FC = () => {
  const dispatch: Dispatch = useDispatch();
  const { data, loading, error } = useSelector((state: State) => state.pokemon);

  useEffect(() => {
    dispatch(fetchPokemon());
  }, [dispatch]);

  if (error) return <p style={{ fontSize: 20, fontWeight: 600 }}>{error}</p>;

  return (
    <>
      <h1 style={{ justifyContent: "center", display: "flex", width: "100%" }}>
        Pokemon
      </h1>
      {loading ? <div>Loading....</div> : <List data={data} />}
    </>
  );
};
export default Pokemon;
