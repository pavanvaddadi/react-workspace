import React from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";

import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { id } = useParams();
  const resturantData = useRestaurantMenu(id);

  if (resturantData === null) return <Shimmer />;

  const { name, cuisines, avgRatingString, costForTwoMessage } =
    resturantData?.data.cards[0]?.card?.card?.info;

  const { itemCards } =
    resturantData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
      ?.cards?.[1].card?.card;
  return (
    <div>
      <h2>{name}</h2>
      <h4>
        {avgRatingString}- {costForTwoMessage}
      </h4>
      <h4> {cuisines.join(",")}</h4>
      <ul>
        {itemCards?.map((eachCard) => {
          return (
            <li key={eachCard.card.info.id}>
              {eachCard.card.info.name} - Rs: {eachCard.card.info.price / 100}/-
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
