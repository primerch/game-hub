import type { ReactNode } from 'react';

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

const DefinitionTerm = ({ term, children }: Props) => {
  return (
    <dl className="my-5">
      <dt className="font-bold text-gray-500">{term}</dt>

      {!Array.isArray(children) && <dd>{children}</dd>}

      {Array.isArray(children) &&
        children?.map((c, idx) => <dd key={idx}>{c}</dd>)}
    </dl>
  );
};

export default DefinitionTerm;
