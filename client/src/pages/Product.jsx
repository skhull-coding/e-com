import './Product_style.css';
const Product = () => {
  return(
  <section className="flex flex-col w-full overflow-y-auto overflow-x-hidden">
    <div className='main_product_tab mb-[40px]'>
      <ul className="flex justify-between Product_tab ">
        <li className=''>xxxx</li>
        <li>xxxx</li>
        <li>xxxx</li>
        <li>xxxx</li>
        <li>xxxx</li>
        <li>xxxx</li>
      </ul>
      <hr className='border-black '/>
    </div>
    <div className="flex flex-row mt-6">

       <div className='bg-red-100 w-[50px] h-[360px]  ml-[30px] mr-[30px]'>
       image container
     </div>
     <div className="image_container  w-[360px] h-[360px] bg-red-100  ml-[30px]">
    </div>
      <div className="flex flex-col ml-6">
        <div className="w-[631px] h-[111px] ">Product Name</div>
        <hr className="border-black"/>
        <div className='h-[100px]'>Price</div>
         <hr className="border-black"/>
        <div>About</div>
      </div>
      <div className="flex flex-col ml-[30px]">
        <div className='bg-red-100'>
          Rating & Review
        </div>
        <div className='mt-6 h-[300px] w-[400px] bg-red-100'>
          
        </div>
      </div>
     
    </div>
    <div className=" ml-[160px] mt-6">
    <span className="material-symbols-outlined mr-[120px]">favorite</span>
    <span className="material-symbols-outlined mr-[120px]">Shopping_Bag</span>
    <span className="material-symbols-outlined ">google_plus_reshare</span>
    </div>

     <div className="h-[100px] bg-black mt-auto">footer</div>
  
  </section>)
};

export default Product;
