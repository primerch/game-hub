interface Props {
  onSelectOrder: (order: string) => void;
}

const SortSelector = ({ onSelectOrder }: Props) => {
  const sortOrders = [
    { value: "relevance", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "release", label: "Release date" },
    { value: "popularity", label: "Popularity" },
    { value: "rating", label: "Rating" },
  ];

  return (
    <div className="dropdown dropdown-hover">
      <div
        tabIndex={0}
        role="button"
        className="btn m-1"
      >{`Order by: XXX`}</div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
      >
        {sortOrders.map((order) => (
          <li>
            <button onClick={() => onSelectOrder(order.value)}>
              {order.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortSelector;
