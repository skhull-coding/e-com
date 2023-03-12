import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import categoryData from "../data/categories.json";
import Products from "../components/Products";

const Home = () => {
  return (
    <section className="min-h-screen -z-10 space-y-4">
      <FirstPage />
      <SecondPage />
      <ThirdPage />
    </section>
  );
};

export default Home;

const FirstPage = () => {
  return (
    <section
      id="first-page"
      className="flex py-48 flex-col p-2 relative before:absolute before:top-0 before:left-0 before:h-full before:w-full before:-z-50 before:brightness-75"
    >
      <TitlePage />
      <SearchBar />
    </section>
  );
};

const SecondPage = () => {
  return (
    <section id="second-page" className="py-8 px-3 space-y-10">
      <h2 className="md:text-5xl text-[8vw] font-black text-slate-300 text-center">
        Search from Categories
      </h2>
      <Categories />
    </section>
  );
};

const ThirdPage = () => {
  return (
    <section
      id="third-page"
      className="py-8 px-3 space-y-10 flex flex-col items-center bg-slate-500/10"
    >
      <h2 className="md:text-5xl text-[8vw] font-black text-slate-200 text-center">
        Products
      </h2>
     <Products class="container gap-5 mx-auto px-3 pt-12 pb-4" />
      <Link to={'/products'} className="border rounded-md px-5 py-3 mx-auto text-white hover:bg-white hover:text-black transition-colors">
        View All Products
      </Link>
    </section>
  );
};

const TitlePage = () => {
  return (
    <div className="title flex flex-col gap-4 items-center w-fit self-start md:mx-16 mx-auto my-32 mt-0 px-2">
      <h1 className="md:text-7xl text-[10vw] w-full font-black text-slate-800">
        Buy.Sell.Earn
      </h1>
      <p className="w-full text-right md:text-lg text-sm text-red-700">
        Welcome to Webstore 2.0
      </p>
      <p className="md:text-xl text-lg text-slate-800">
        Search for products you may need for minimum half a price of the
        original.
        <br />
        Get bonus discount for first time joining.
      </p>
    </div>
  );
};

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchedWord, setSearchedWord] = useState("");
  const search = (e) => {
    e.preventDefault();
    navigate(`/products?query=${searchedWord.replace(/\s+/g, "+")}`);
  };
  return (
    <form
      className="searchbox container mx-10 py-3 px-5 self-center rounded-full bg-slate-200/80 flex gap-3 items-center"
      onSubmit={search}
    >
      <input
        type="text"
        value={searchedWord}
        onChange={(e) => {
          setSearchedWord(e.target.value.trimStart());
        }}
        className="w-full bg-transparent outline-none border-b border-slate-300 px-3 py-1 focus:border-slate-900 text-lg placeholder:text-slate-600"
        placeholder="Search Here"
      />
      <button type="submit" className="material-symbols-outlined text-3xl">
        search
      </button>
    </form>
  );
};

const Categories = () => {
  return (
    <div
      id="categories"
      className="container grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-8 mx-auto px-3 py-16"
    >
      {categoryData.map((data) => {
        return (
          <CategoryBox
            categoryName={data.name}
            style={{ backgroundColor: data.bgColor, color: data.color }}
          />
        );
      })}
    </div>
  );
};

const CategoryBox = (props) => {
  return (
    <Link
      to={`/products?category=${props.categoryName.replace(/\s+/g, "+").toLowerCase()}`}
      className="flex justify-center items-center rounded-lg max-h-[200px] md:h-64 h-48 text-base hover:scale-105 transition-transform md:text-xl brightness-90"
      style={props.style}
    >
      {props.categoryName}
    </Link>
  );
};

