import React from "react";
import Flex from "./Flex";

function GoToPage({ goToPage, pages }) {
  const options = [];
  for (let i = 0; i < pages; i++) {
    options.push(<option value={i}>{i + 1}</option>);
  }
  return (
    <div>
      Go to page{" "}
      <select onChange={e => goToPage(parseInt(e.target.value))}>
        {options}
      </select>
    </div>
  );
}

const Navigation = ({ activePage, goToPage, nextPage, prevPage, pages }) => {
  return (
    <Flex>
      <button disabled={activePage === 0} onClick={() => goToPage(0)}>
        {"<<"}
      </button>
      <button disabled={activePage === 0} onClick={prevPage}>
        {"<"}
      </button>

      <button disabled={activePage === pages - 1} onClick={nextPage}>
        {">"}
      </button>
      <button
        disabled={activePage === pages - 1}
        onClick={() => goToPage(pages - 1)}
      >
        {">>"}
      </button>
    </Flex>
  );
};
export default Navigation;
