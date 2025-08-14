const GameCardSkeleton = () => {
  return (
    <div className="card bg-base-100 m-2.5 shadow-sm">
      <figure>
        <div className="skeleton w-full aspect-[3/2]" />
      </figure>
      <div className="card-body">
        <div className="skeleton h-7 w-3/4 mb-1 rounded"></div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="skeleton h-5 w-5 rounded-full"></div>
            <div className="skeleton h-5 w-5 rounded-full"></div>
            <div className="skeleton h-5 w-5 rounded-full"></div>
          </div>
          <div className="skeleton h-6 w-10 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default GameCardSkeleton;
