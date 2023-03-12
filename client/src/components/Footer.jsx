import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section
      id="footer"
      className="flex items-center py-3 px-6 text-slate-300 text-sm border-t-2 border-slate-600 font-medium"
    >
      <p className="text-center w-full">
        Copyright &copy;{" "}
        <Link to="/" className="text-red-400">
          Webstore 2.0
        </Link>{" "}
        | Created and Produced by Webstore 2.0
      </p>
    </section>
  );
};

export default Footer;
