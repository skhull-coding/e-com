import ProductsComp from "../components/Products";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Filters from "../components/Filters";

const Products = () => {
    const [searchText, setSearchText] = useState("");
    const [category, setcategory] = useState("all");
  return (
    <section className="h-[calc(100vh-127px)] px-4 py-3 flex gap-3 lg:flex-row flex-col overflow-auto">
      <Filters st={searchText} cg={category} />
      <section id="search-bar" className="w-full">
        <Search searchText={searchText} setSearchText={setSearchText} setcategory={setcategory} category={category} />
        <ProductsComp class="w-full z-0 p-5 gap-5" />
      </section>
    </section>
  );
};

export default Products;

const Search = (props) => {
  const navigate = useNavigate();
  const searchHere = (e) => {
    e.preventDefault();
    navigate(
      `/products?query=${props.searchText}&category=${props.category}`
    );
  };
  return (
    <form
      onSubmit={searchHere}
      className="rounded-lg overflow-hidden flex gap-2 items-center text-lg px-2 bg-slate-100 sticky top-0 z-20 drop-shadow-md"
    >
      <select
        name="category"
        id="category-search"
        className="outline-none bg-transparent"
        value={props.category}
        onChange={(e) => {
          props.setcategory(e.target.value);
        }}
      >
        <option value="all">All</option>
        <option value="electronics">Electronics</option>
        <option value="furniture">Furnitures</option>
      </select>
      <div className="seprator bg-slate-300 w-[1px] h-[40px]"></div>
      <input
        value={props.searchText}
        onChange={(e) => {
          props.setSearchText(e.target.value.trimStart());
        }}
        type="text"
        className="w-full bg-transparent outline-none placeholder:text-slate-500 px-3"
        placeholder="Search here"
      />
      <div className="seprator bg-slate-300 w-[1px] h-[40px]"></div>
      <button
        type="submit"
        className="material-symbols-outlined bg-transparent p-2"
      >
        search
      </button>
    </form>
  );
};
