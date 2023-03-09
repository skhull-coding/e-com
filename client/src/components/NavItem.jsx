import React from "react";

const NavItem = (props) => {
  return (
    <div className="flex items-center gap-3">
      <img
        src={props.type}
        alt={props.altText}
        className="2xl:w-[50px] w-[30px]"
      />
      {/* <p>{props.altText.toUpperCase()}</p> */}
    </div>
  );
};

export default NavItem;
