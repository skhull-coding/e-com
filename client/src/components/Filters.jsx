import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Filters = (props) => {
  const navigate = useNavigate();
  const [customerRatings, setCustomerRatings] = useState(Array(0));
  const [price, setPrice] = useState("");
  const applyFilters = () => {
    let filters = `cr=${customerRatings}&min-price=${0}&max-price=${price}`;
    navigate(`/products?query=${props.st}&category=${props.cg}&${filters}`);
  };
  return (
    <aside className="lg:h-full 2xl:w-96 overflow-y-auto overflow-x-hidden lg:w-72 w-full bg-slate-300 lg:sticky top-0 hidden rounded-md py-6 lg:flex flex-col gap-6 px-5">
      <CustomerRating cr={customerRatings} scr={setCustomerRatings} />
      <Price sp={setPrice} />
      <button
        id="apply-filters"
        className="w-full px-3 py-1 text-xl sticky bottom-0 bg-slate-600 hover:bg-sky-500 drop-shadow-md mt-auto rounded-md text-white"
        onClick={applyFilters}
      >
        Apply Filters
      </button>
    </aside>
  );
};

export default Filters;

const CustomerRating = (props) => {
  const checkBox = (e) => {
    let val = e.target.value;
    let ifThere = props.cr.find((value) => value === val);
    if (ifThere !== undefined) {
      props.scr(props.cr.filter((value) => value !== val));
    } else {
      props.scr([...props.cr, val]);
    }
  };
  return (
    <div className="filters flex flex-col">
      <h4 className="text-lg font-medium text-slate-900 mb-3">
        Customer Rating
      </h4>
      <form className="filtercontent flex flex-col text-slate-600 ml-3">
        <label className="hover:text-slate-900">
          {" "}
          <input
            type="checkbox"
            name="customer_rating"
            onChange={checkBox}
            value={4}
          />{" "}
          4 and Up
        </label>
        <label className="hover:text-slate-900">
          {" "}
          <input
            type="checkbox"
            name="customer_rating"
            onChange={checkBox}
            value={3}
          />{" "}
          3 and Up
        </label>
        <label className="hover:text-slate-900">
          {" "}
          <input
            type="checkbox"
            name="customer_rating"
            onChange={checkBox}
            value={2}
          />{" "}
          2 and Up
        </label>
        <label className="hover:text-slate-900">
          {" "}
          <input
            type="checkbox"
            name="customer_rating"
            onChange={checkBox}
            value={1}
          />{" "}
          1 and Up
        </label>
      </form>
    </div>
  );
};

const Price = (props) => {
  const checkBox = (e) => {
    props.sp(e.target.value);
  };
  return (
    <div className="filters flex flex-col">
      <h4 className="text-lg font-medium text-slate-900 mb-3">Price</h4>
      <form className="filtercontent flex flex-col text-slate-600 ml-3">
        <label className="hover:text-slate-900">
          {" "}
          <input
            type="radio"
            name="price"
            onChange={checkBox}
            value={4000}
          />{" "}
          4000 and lower
        </label>
        <label className="hover:text-slate-900">
          {" "}
          <input
            type="radio"
            name="price"
            onChange={checkBox}
            value={3000}
          />{" "}
          3000 and lower
        </label>
        <label className="hover:text-slate-900">
          {" "}
          <input
            type="radio"
            name="price"
            onChange={checkBox}
            value={2000}
          />{" "}
          2000 and lower
        </label>
        <label className="hover:text-slate-900">
          {" "}
          <input
            type="radio"
            name="price"
            onChange={checkBox}
            value={1000}
          />{" "}
          1000 and lower
        </label>
        <label className="hover:text-slate-900">
          {" "}
          <input
            type="radio"
            name="price"
            onChange={checkBox}
            value={500}
          />{" "}
          500 and lower
        </label>
        <label className="hover:text-slate-900">
          {" "}
          <input
            type="radio"
            name="price"
            onChange={checkBox}
            value={100}
          />{" "}
          100 and lower
        </label>
      </form>
    </div>
  );
};
