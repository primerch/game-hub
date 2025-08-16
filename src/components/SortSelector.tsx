interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Rating" },
  ];
  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder,
  );

  return (
    <div className="dropdown dropdown-hover">
      <div
        tabIndex={0}
        role="button"
        className="btn m-1"
      >{`Order by: ${currentSortOrder?.label || "Relevance"}`}</div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
      >
        {sortOrders.map((order) => (
          <li key={order.value}>
            <button onClick={() => onSelectSortOrder(order.value)}>
              {order.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortSelector;
