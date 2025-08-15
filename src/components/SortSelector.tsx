const SortSelector = () => {
  const orders = [
    "Relevance",
    "Date added",
    "Name",
    "Release date",
    "Popularity",
    "Average rating",
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
        {orders.map((order) => (
          <li key={order}>
            <button>{order}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortSelector;
