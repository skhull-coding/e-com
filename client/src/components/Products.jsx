import productData from "../data/Products.json";
import ProductCard from "./ProductCard";

const Products = (props) => {
  let pData = props.data || productData;
  return (
    <div
      id="products"
      className={
        "grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(350px,1fr))]" +
        " " +
        props.class
      }
    >
      {pData.map((data) => {
        let desc = data.desc;
        if (desc.length > 100) {
          desc = desc.slice(0, 99) + "...";
        }
        return (
          <ProductCard
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

export default Products;
