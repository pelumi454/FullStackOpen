import React from "react";

function Content({ part1, exercises1, part2, exercises2, part3, exercises3}) {
  return (
    <div>
      <div>
        <h5>{part1}</h5>
        <p>{exercises1}</p>
      </div>
      <div>
        <h5>{part2}</h5>
        <p>{exercises2}</p>
      </div>
      <div>
        <h5>{part3}</h5>
        <p>{exercises3}</p>
      </div>
    </div>
  );
}

export default Content;
