import React from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";

import { useParams } from "react-router-dom";
import ResCategory from "./ResCategory";

const RestaurantMenu = () => {
  const { id } = useParams();
  const resturantData = useRestaurantMenu(id);

  const itemCategories =
    resturantData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (each) => {
        return (
          each?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  if (resturantData === null) return <Shimmer />;

  const { name, avgRatingString, costForTwoMessage } =
    resturantData?.data.cards[0]?.card?.card?.info;

  return (
    <div className=" bg-gray-100">
      <div className="w-8/12 m-auto p-5">
        <div className="flex items-center  justify-between">
          <h2 className="font-bold  text-lg">{name}</h2>
          <div className="border p-2 rounded-md">
            <h4 className="font-semibold text-center border-b-2  border-b-blue-100">
              {avgRatingString} <span className="text-green-900"> ★</span>
            </h4>
            <h4 className="font-bold text-gray-500 text-xs">
              {costForTwoMessage}{" "}
            </h4>
          </div>
        </div>
        <ul>
          {itemCategories?.map((eachCard) => {
            return (
              <li key={eachCard.card?.card?.title}>
                <ResCategory items={eachCard.card}></ResCategory>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
