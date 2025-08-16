interface Props {
  onSelectOrder: (order: string) => void;
}

const SortSelector = ({ onSelectOrder }: Props) => {
  const orderMap: Record<string, string> = {
    relevance: "Relevance",
    added: "Date added",
    name: "Name",
    released: "Release date",
    popularity: "Popularity",
    rating: "Rating",
  };

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
        {Object.keys(orderMap).map((orderKey) => (
          <li>
            <button onClick={() => onSelectOrder(orderKey)}>
              {orderMap[orderKey]}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortSelector;
