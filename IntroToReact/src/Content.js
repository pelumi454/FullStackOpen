import React from "react";

function Content({ parts }) {

  return (
    <div>
      <div>
        <h5>{parts.name}</h5>
      </div>
      <div>
        <h5>{parts.exercise}</h5>
      </div>
    </div>
  );
}

export default Content;
