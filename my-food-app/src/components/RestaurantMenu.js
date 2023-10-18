import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { RES_MENU_URL } from '../utils/constants'
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resturantData, setResturantData] = useState(null);
  const {id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      `${RES_MENU_URL}&restaurantId=${id}`);
    const data = await response.json();
    setResturantData(data);
  };
  if (resturantData === null) return <Shimmer />;

  const { name, cuisines, avgRatingString, costForTwoMessage } =
    resturantData?.data.cards[0]?.card?.card?.info;

  const { itemCards } =
    resturantData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]
      .card?.card;
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
