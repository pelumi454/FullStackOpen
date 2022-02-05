import React from "react";

function Content({ part1, exercises1, part2, exercises2, part3, exercises3}) {
  return (
    <div>
      <div>
        <h5>{part1}</h5>
      </div>
      <div>
        <h5>{part2}</h5>
      </div>
    </div>
  );
}

export default Content;
