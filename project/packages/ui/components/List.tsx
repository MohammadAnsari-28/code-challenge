import React from "react";
import "./List.css";

interface ListProps {
  data: {
    name: string;
    url: string;
  }[];
}

export const List: React.FC<ListProps> = ({ data }) => {
  return (
    <div className="container">
      {data.map((item: { name: string; url: string }) => {
        return (
          <div className="card">
            <p className="card-name">{item.name}</p>
          </div>
        );
      })}
    </div>
  );
};
