import React, { use } from "react";
import { NavLink } from "react-router";

const CategoryPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const categories = use(CategoryPromise);

  return (
    <div>
      <h2 className="text-lg font-bold">All Categories</h2>
      <div className="grid grid-cols-1 text-accent font-semibold">
        {categories.map((cat) => (
          <NavLink
            to={`category/${cat.id}`}
            className="hover:cursor-pointer hover:bg-base-300 hover:text-black rounded-sm bg-white border-0 w-full mt-2 p-2 ps-8"
            key={cat.id}
          >
            {cat.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
