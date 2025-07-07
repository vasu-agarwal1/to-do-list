import React from "react";

function EveryItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>;
    </div>
  );
}

export default EveryItem;
