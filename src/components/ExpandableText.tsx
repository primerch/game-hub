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
        <p>
          {children}

          <button
            className="btn btn-sm btn-neutral mx-5 inline bg-yellow-300 font-bold text-black"
            onClick={() => setExpanded(false)}
          >
            Show Less
          </button>
        </p>
      </>
    );

  return (
    <>
      <p>
        {summary}...
        <button
          className="btn btn-sm btn-neutral mx-5 inline bg-yellow-300 font-bold text-black"
          onClick={() => setExpanded(true)}
        >
          Show More
        </button>
      </p>
    </>
  );
};

export default ExpandableText;
