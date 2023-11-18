import React from "react";

function DessertsList(props) {
  const { data } = props;

  const filteredDesserts = data.filter((dessert) => dessert.calories < 500);

  const sortedDesserts = filteredDesserts.sort((a, b) => a.calories - b.calories);

  return (
    <ul>
      {sortedDesserts.map((dessert) => (
        <li key={dessert.name}>
          {`${dessert.name} - ${dessert.calories} cal`}
        </li>
      ))}
    </ul>
  );
}

export default DessertsList;