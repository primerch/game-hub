import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
    return <div className="card card-border bg-base-100 m-2.5 shadow-sm">{children}</div>
};

export default GameCardContainer;
