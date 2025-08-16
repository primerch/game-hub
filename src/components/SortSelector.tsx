import type { GameQuery } from "../App.tsx";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  gameQuery: GameQuery;
}

const SortSelector = ({ onSelectSortOrder, gameQuery }: Props) => {
  const sortOrders = [
    { value: "relevance", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Rating" },
  ];

  return (
    <div className="dropdown dropdown-hover">
      <div
        tabIndex={0}
        role="button"
        className="btn m-1"
      >{`Order by: Relevance`}</div>
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
