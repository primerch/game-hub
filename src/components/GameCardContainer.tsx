import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <div className="card card-border bg-base-100 easy-in-out m-2.5 shadow-sm transition hover:scale-103">
      {children}
    </div>
  );
};

export default GameCardContainer;
