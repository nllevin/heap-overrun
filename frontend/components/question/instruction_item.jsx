import React from "react";

const InstructionItem = ({idx, title, content, active, toggleActive}) => (
  <div className="instructions-step">
    <li onClick={() => toggleActive(idx)}>
      <div>
        <i className={`list-${idx + 1}`}></i>
        <h4>{title}</h4>
      </div>
      <i className={active ? "chevron-up" : "chevron-down"}></i>
    </li>
    <div className={active ? "instruction-detail" : "instruction-detail closed"}>
      {content}
    </div>
  </div>
);

export default InstructionItem;