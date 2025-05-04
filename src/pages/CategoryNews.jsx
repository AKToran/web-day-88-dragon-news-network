import React from 'react';
import { useParams } from 'react-router';

const CategoryNews = () => {
  const { id } = useParams();

  return (
    <div>
      category id wise. {id}
    </div>
  );
};

export default CategoryNews;