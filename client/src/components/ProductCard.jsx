import { Link } from "react-router-dom";

const ProductCard = (props) => {
  return (
    <div className="flex flex-col rounded-lg min-h-[200px] overflow-hidden gap-2 bg-slate-200/90 pb-4">
      <figure className="img w-full bg-black border-b border-black relative">
        <img
          src={props.img}
          alt={props.name}
          className="w-full object-center object-contain max-h-[300px] -z-10"
        />
        <button className="material-symbols-outlined absolute bottom-3 right-3 p-2 w-10 h-10 rounded-full bg-white">
          favorite
        </button>
      </figure>
      <Link
        to={`/product?id=${props.url}&name=${props.name
          .replace(/\s+/g, "+")
          .toLowerCase()}`}
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

export default ProductCard;
