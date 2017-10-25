import React from "react";

const Entries = ({ size, entries, children, component, componentSize }) => {
  return (
    <div className="columns is-multiline is-mobile">
      {entries.map((entry) => {
        return <div className={"column is-" + size}>
          {React.createElement(component, {
            data: entry,
            size: componentSize,
          })}
        </div>
      })}
    </div>
  );
}

export default Entries;