import { Link } from "react-router-dom";

const NavItem = (props) => {
  return (
    <Link
      to={props.link}
      className="interactable w-10 min-h-[2.5rem] bg-slate-50 rounded-full text-3xl flex justify-center items-center p-1 overflow-hidden z-50 shadow-lg"
      data-name={props.text}
    >
      <span className="material-symbols-outlined">{props.symbolText}</span>
    </Link>
  );
};

export default NavItem;
