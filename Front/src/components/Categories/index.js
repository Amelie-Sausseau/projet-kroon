import PropTypes from 'prop-types';

import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';


import './categories.scss';

const Categories = ({categories, fetchCategories}) => {
  useEffect(
    fetchCategories,
    [],
  )
const tags = "/tags/";

console.log(categories);

return (
  <div className="containers">
      {
        categories.map((categorie) => (
          <NavLink to={tags + categorie.name} key={categorie.id} className={categorie.name} ><div className="categoriesposts"  key={categorie.id} /* {...categorie} */>{categorie.name}</div></NavLink>
        ))
      }
  </div>
)};

export default Categories;