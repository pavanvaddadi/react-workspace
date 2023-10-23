import { useEffect, useState } from "react";
import { RES_MENU_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resturantData, setResturantData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(`${RES_MENU_URL}&restaurantId=${resId}`);
    const data = await response.json();
    setResturantData(data);
  };
  return resturantData;
};

export default useRestaurantMenu;
