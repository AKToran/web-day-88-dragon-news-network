import React, { use } from 'react';
import { NavLink } from 'react-router';

const CategoryPromise = fetch('/categories.json').then(res => res.json());

const Categories = () => {
  const categories = use(CategoryPromise);
  console.log(categories);

  return (
    <div>
      <h2 className='text-lg font-bold'>All Categories</h2>
      {
        categories.map(cat =>
          <NavLink className='flex flex-col bg-white border-0 w-full mt-2 ps-2' key={cat.id}>{cat.name}</NavLink>
        )
      }
    </div>
  );
};

export default Categories;