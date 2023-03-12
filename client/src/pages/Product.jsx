import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Product = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let ID = useRef(searchParams.get("id"));
  let NAME = searchParams.get("name");
  const [data, setData] = useState({});
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    let controller = new AbortController();
    let signal = controller.signal;
    fetch(`/data/${ID.current}.json`, { signal })
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setLoaded(true)
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <section className="min-h-screen px-5 py-16">
      <div className="info w-full flex gap-3 lg:flex-row flex-col">
        <div className="px-3 flex flex-col items-center gap-3 max-w-xl mx-auto">
          <figure className="w-full max-h-96 ">
            <img
              src={data.imageDir + ID.current + "_" + NAME + ".jpg"}
              alt=""
              className="rounded-md"
            />
          </figure>
          <div className="price border border-sky-700 w-full p-2 flex flex-col gap-1 rounded-md">
            <p className="text-red-500 text-2xl text-right">
              ₹ <span id="ProductPrice">{data.price}</span>
            </p>
            <p className="text-slate-300 text-sm">
              Sold by <Link className="text-red-300">{data.seller}</Link> and
              fulfilled by <Link className="text-sky-500">Webstore 2.0</Link>
            </p>
          </div>
        </div>

        <div className="title-desc w-full flex flex-col items-start gap-4">
          <h1
            id="ProductTitle"
            className="text-4xl font-bold text-slate-300 tracking-wide"
          >
            {data.name}
          </h1>
          <p className="text-slate-400 text-lg">{data.desc}</p>
          <div
            id="aboutbyowner"
            className="space-y-2 border border-slate-400 px-3 py-2 rounded-md"
          >
            <h2 className="text-sky-400 text-xl">About (By Owner) : </h2>
            <p className="text-base text-slate-300">{data.about}</p>
          </div>
          <div id="tags" className="flex flex-wrap w-full gap-2">
            <h2 className="text-sky-400 text-xl">Tags :</h2>
            {loaded ? data.tags.map(tag => {return (<Link to={`/products?tag=${tag}`} key={tag} className="px-4 py-1 rounded-sm bg-slate-200">{tag}</Link>)}) : <></>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
