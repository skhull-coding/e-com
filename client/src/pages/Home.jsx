import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import categoryData from "../data/categories.json";
import productData from "../data/Products.json";

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
      className="flex flex-col min-h-screen p-2 relative before:absolute before:top-0 before:left-0 before:h-full before:w-full before:-z-50 before:brightness-75"
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
      <Products />
      <Link className="border rounded-md px-5 py-3 mx-auto text-white hover:bg-white hover:text-black transition-colors">
        View All Products
      </Link>
    </section>
  );
};

const TitlePage = () => {
  return (
    <div className="title flex flex-col gap-4 items-center w-fit self-start md:mx-16 mx-auto my-32 px-2">
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
    navigate(`/product?query=${searchedWord.replace(/\s+/g, "+")}`);
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
        className="w-full bg-transparent outline-none border-b border-slate-300 px-3 py-1 focus:border-slate-900 text-lg"
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
      className="flex justify-center items-center rounded-lg max-h-[200px] md:h-64 h-48 text-base hover:scale-105 transition-transform md:text-xl brightness-90"
      style={props.style}
    >
      {props.categoryName}
    </Link>
  );
};

const ProductBox = (props) => {
  return (
    <div className="flex flex-col rounded-lg min-h-[200px] overflow-hidden gap-2 bg-slate-200/90 pb-4">
      <figure className="img w-full bg-black border-b border-black relative">
        <img
          src={props.img}
          alt={props.name}
          className="w-full object-center object-contain max-h-[300px]"
        />
        <button className="material-symbols-outlined absolute bottom-3 right-3 p-2 w-10 h-10 rounded-full bg-white">
          favorite
        </button>
      </figure>
      <Link
        to={`product?id=${props.url}&name=${props.name}`}
        className="text-2xl tracking-wide font-medium px-3 overflow-x-auto"
      >
        {props.name}
      </Link>
      <div className="ratings_price flex gap-1">
        <p className="text-left w-full text-blue-600 px-3">
          {props.ratings} / 5
        </p>
        <p className="text-right w-full text-red-600 px-3 text-lg font-medium">
          ₹ {props.price}
        </p>
      </div>
      <p className="desc px-3">{props.desc}</p>
      <p className="text-sm text-right px-3 mt-auto">
        from <span className="text-slate-600">{props.seller}</span>
      </p>
      <div className="buttons flex gap-3 px-3 flex-col text-lg">
        <button className="bg-sky-600 text-white px-2 py-1 rounded-md hover:bg-sky-700 flex items-center justify-center gap-1">
          <span className="material-symbols-outlined">add_shopping_cart</span>{" "}
          <span className="mx-auto">Add to cart</span>
        </button>
        <button className="bg-sky-600 text-white px-2 py-1 rounded-md hover:bg-sky-700 flex items-center justify-center gap-1">
          <span className="material-symbols-outlined">shopping_bag</span>{" "}
          <span className="mx-auto">Buy Now</span>
        </button>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <div
      id="products"
      className="container grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(340px,1fr))] gap-5 mx-auto px-3 pt-12 pb-4"
    >
      {productData.map((data) => {
        let desc = data.desc;
        console.log(desc.length);
        if (desc.length > 100) {
          desc = desc.slice(0, 99) + "...";
        }
        return (
          <ProductBox
            key={data.productID + data.name + data.seller + data.price}
            name={data.name}
            price={data.price}
            ratings={data.ratings}
            seller={data.seller}
            discount={data.discount ? data.discount : ""}
            url={data.productID}
            desc={desc}
            img={
              data.imageDir +
              data.productID +
              "_" +
              data.name.replace(/\s/g, "_") +
              ".jpg"
            }
          />
        );
      })}
    </div>
  );
};
