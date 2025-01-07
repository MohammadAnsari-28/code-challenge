import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonState {
  data: Pokemon[];
  loading: boolean;
  error: string | null;
}

export const fetchPokemon = createAsyncThunk(
  "pokemon/fetchPokemon",
  async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    const dataResponse = await response.json();
    const data = await dataResponse.results;
    return data;
  }
);

const initialState: PokemonState = {
  data: [],
  loading: false,
  error: null,
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemon.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPokemon.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPokemon.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      });
  },
});

export default pokemonSlice.reducer;
