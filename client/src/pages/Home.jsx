import sell from "../icons/sell.png";
import product from "../icons/product.png";
import CategoryBox from "../components/CategoryBox";

const Home = () => {
  return (
    <section
      id="home"
      className="gap-4 flex justify-between flex-col items-start p-4"
    >
      <section className="flex justify-between flex-col items-start">
        <div className="my-20 md:mx-16 mx-auto w-fit">
          <h1 className="text-[min(10vw,128px)] text-white font-extrabold tracking-widest ">
            Buy.Sell.Earn.
          </h1>
          <p className="md:text-2xl text-[3vw] w-full text-right px-4">
            Welcome to Webstore 2.0
          </p>
        </div>

        <div
          id="buttons"
          className="my-10 md:mx-16 mr-auto ml-[2vw] flex flex-col gap-4 md:w-fit"
        >
          <button className="flex gap-4 text-base md:text-xl items-center bg-[#172f43] text-white px-10 py-2 md:w-96 w-full rounded-full hover:brightness-150">
            <img src={sell} alt="sell" className="md:w-[40px] w-[8vw]" />
            <span className="mx-auto">Sell Items</span>
          </button>
          <button className="flex gap-4 text-base md:text-xl items-center bg-[#172f43] text-white px-10 py-2 md:w-96 w-full rounded-full hover:brightness-150">
            <img src={product} alt="sell" className="md:w-[40px] w-[8vw]" />
            <span className="mx-auto">View All Products</span>
          </button>
        </div>
      </section>
      <section id="categories" className="space-y-4 w-full">
        <h2 className="text-center text-[3vw] drop-shadow-sm shadow-white text-white">Choose from Categories</h2>
        <div id="categories-container" className="container mx-auto flex flex-wrap justify-start items-start content-start gap-5">
          <CategoryBox categoryName="Electronics" />
          <CategoryBox categoryName="Fevicols" />
          <CategoryBox categoryName="Papers" />
          <CategoryBox categoryName="Hahaha" />
          <CategoryBox />
          <CategoryBox />
        </div>
      </section>
    </section>
  );
};

export default Home;
