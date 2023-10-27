import { useState } from "react";
import ResItem from "./ResItem";

const ResCategory = (categoryItems) => {
  const [collapseItem, setCollapseItem] = useState(false);

  const onCollpase = () => {
    setCollapseItem(!collapseItem);
  };
  return (
    <div className="bg-white rounded-sm">
      <div className="flex justify-between p-2 m-2 ">
        <div className="font-semibold">{categoryItems.items.card.title}</div>
        <div>
          <button onClick={onCollpase}>↓</button>
        </div>
      </div>
      {collapseItem ? (
        <ul>
          {categoryItems?.items?.card?.itemCards?.map((item) => {
            return (
              <li key={item.card.info.id}>
                <ResItem item={item.card.info}></ResItem>
              </li>
            );
          })}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ResCategory;
