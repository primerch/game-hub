import { useState } from 'react';

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const LIMIT = 300;

  if (!children) return null;

  if (children.length <= LIMIT) return <p>{children}</p>;

  const summary = children.substring(0, LIMIT);

  if (expanded)
    return (
      <>
        <p>{children}</p>
        <button
          className="btn btn-xs btn-neutral mt-2 inline bg-yellow-300 font-bold text-black"
          onClick={() => setExpanded(false)}
        >
          Show Less
        </button>
      </>
    );

  return (
    <>
      <p>{summary}...</p>
      <button
        className="btn btn-xs btn-neutral mt-2 inline bg-yellow-300 font-bold text-black"
        onClick={() => setExpanded(true)}
      >
        Show More
      </button>
    </>
  );
};

export default ExpandableText;
