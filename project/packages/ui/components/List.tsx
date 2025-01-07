import React from "react";
import { useDispatch } from 'react-redux';
import "./List.css";
import { removePokemon } from '../store/pokemonSlice';

interface ListProps {
  data: {
    name: string;
    url: string;
  }[];
}

export const List: React.FC<ListProps> = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <div className="container">
      {data.map((item: { name: string; url: string }) => {
        return (
          <div className="card">
            <p className="card-name">{item.name}</p>
            <button className="card-button" onClick={()=>dispatch(removePokemon(item.name))}>Remove</button>
          </div>
        );
      })}
    </div>
  );
};
