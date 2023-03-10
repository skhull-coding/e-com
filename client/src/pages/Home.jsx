import sell from "../icons/sell.png";
import product from "../icons/product.png";

const Home = () => {
  return (
    <section
      id="home"
      className="w-full h-full flex justify-between flex-col items-start p-4 before:fixed relative before:w-full before:h-full before:-z-10 before:top-0 before:left-0 overflow-y-auto overflow-x-hidden"
    >
      <section className="min-h-full w-full flex justify-between flex-col items-start">
        <div className="my-20 md:mx-16 mx-auto w-fit">
          <h1 className="text-[10vw] text-[#172F43] font-extrabold tracking-widest ">
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
    </section>
  );
};

export default Home;
