import sell from "../icons/sell.png"
import product from "../icons/product.png"

const Home = () => {
  return (<section id="home" className={`w-full h-full flex justify-between flex-col items-start p-4 before:fixed relative before:w-full before:h-full before:-z-10 before:top-0 before:left-0 overflow-y-auto overflow-x-hidden`}>
    <div className="m-20 w-fit"><h1 className="text-[128px] text-[#172F43] font-extrabold tracking-widest ">Buy.Sell.Earn.</h1>
    <p className="text-2xl w-full text-right px-4">Welcome to Webstore 2.0</p></div>

    <div id="buttons" className="my-10 mx-20 flex flex-col gap-4">
    <button className="flex gap-4 text-xl items-center bg-[#172f43] text-white px-10 py-2 w-96 rounded-full hover:brightness-150">
      <img src={sell} alt="sell" className="w-[40px]" />
      <span className="mx-auto">Sell Items</span>
    </button><button className="flex gap-4 text-xl items-center bg-[#172f43] text-white px-10 py-2 w-96 rounded-full hover:brightness-150">
      <img src={product} alt="sell" className="w-[40px]" />
      <span className="mx-auto">View All Products</span>
    </button>
    </div>


    

  </section >);
};

export default Home;
