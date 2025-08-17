import React, { useRef } from "react";

interface Props {
  handleOnSubmit: (value: string) => void;
}

const SearchInput = ({ handleOnSubmit }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      <form
        className="grow"
        onSubmit={(e) => {
          e.preventDefault();
          if (ref.current) handleOnSubmit(ref.current.value);
        }}
      >
        <label className="input m-1 w-full rounded-4xl">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            ref={ref}
            type="search"
            className="grow"
            placeholder="Search"
          />
        </label>
      </form>
    </>
  );
};
export default SearchInput;
