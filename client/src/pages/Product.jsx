import { useSearchParams } from "react-router-dom";

const Product = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("id"))
  let data = fetch("/data/e80fds08d.json").then(res => res.json()).then(res=> {console.log(res);return res});
  return (
    <section className="min-h-screen">
      <div className="info w-full">
        <figure>
          <img src="" alt="" />
        </figure>
      </div>
    </section>
  );
};

export default Product;
