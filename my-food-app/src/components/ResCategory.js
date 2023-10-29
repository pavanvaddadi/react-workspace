import ResItem from "./ResItem";

const ResCategory = (categoryItems) => {
  const onCollpase = () => {
    categoryItems?.onExpand();
  };
  return (
    <div className="bg-white rounded-sm">
      <div className="flex justify-between p-2 m-2 ">
        <div className="font-semibold">{categoryItems.items.card.title}</div>
        <div>
          <button onClick={onCollpase}>↓</button>
        </div>
      </div>
      <div>
        {categoryItems.showItems && (
          <div>
            {categoryItems?.items?.card?.itemCards?.map((item) => {
              return (
                <div key={item.card.info.id}>
                  <ResItem item={item.card.info}></ResItem>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResCategory;
