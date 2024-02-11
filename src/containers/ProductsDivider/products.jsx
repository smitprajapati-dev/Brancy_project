import React from 'react';

function Products({
  productTitle,
  imgUrl,
  badge,
  reviewCount,
  origPrice,
  price,
}) {
  return (
    <div className="relative overflow-hidden">
      <div>
        <img src={imgUrl} alt="img" className="rounded-lg" />
      </div>
      <div className="absolute font-semibold px-[18px] py-[5px] rounded-full text-white top-[20px] right-[20px] bg-red-300">
        {badge ? <p>{badge}</p> : <p></p>}
      </div>
      <p>{reviewCount ? <p>{reviewCount}</p> : <p></p>}</p>
      <p className="py-3 font-serif text-xl font-semibold">
        {productTitle ? <p>{productTitle}</p> : <p></p>}
      </p>
      <div className="flex items-center gap-2 ">
        <p className="text-xl font-semibold ">
          {price ? <p>{price}</p> : <p></p>}
        </p>
        <s className="">{origPrice ? <p>{origPrice}</p> : <p></p>}</s>
      </div>
    </div>
  );
}

export default Products;
