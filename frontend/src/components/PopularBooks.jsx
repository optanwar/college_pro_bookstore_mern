import React from "react";
import data from "../data/books";

const PopularBooks = () => {
  return (
    <div className="pb-10">
      <h1 className="capitalize pt-7 pb-2 text-4xl font-serif tracking-wider">
        Our Popular Books
      </h1>
      <p className="pb-10">
        Unlock the World of Infinite Stories - Your Online Gateway to Endless
        Adventures!
      </p>

      <div className="flex justify-center items-center mx-auto flex-wrap gap-16">
        {data.books.map((item) => (
          <div key={item.name}>
            <img src={item.img} alt={item.name} className="my-2" />
            <img src={item.rating} alt={item.name} className="my-2 mx-auto" height={40} width={85} />

            <p className="text-center">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularBooks;
