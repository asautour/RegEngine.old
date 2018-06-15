import React from "react";
import Collapsible from "react-collapsible";
import Checkbox from "./checkbox";

const styles = {
  content: {
    padding: "16px",
    height: "100%",
    backgroundColor: "white"
  }
};

const items = ["One", "Two", "Three"];

const ComponentFilter = props => {
  const labels = items.map((item, index) => (
    <Checkbox label={item} key={index} />
  ));

  return (
    <div>
      <Collapsible trigger="Filter title" accordionPosition="right">
        {labels}
      </Collapsible>
    </div>
  );
};

export default ComponentFilter;
