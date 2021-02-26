import PropTypes from 'prop-types';

import React, { useEffect, useState } from 'react';
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
  <div className="catContainers">
      {
        categories.map((categorie) => (
          <NavLink to={tags + categorie.id} key={categorie.id} className={categorie.name} ><div className="categoriesposts"  key={categorie.id} /* {...categorie} */>{categorie.name}</div></NavLink>
        ))
      }
  </div>
)};

export default Categories;

// import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import PostCard from 'src/components/PostCard'

// import './compte.scss';

// const Compte = ({ fetchPostUser}) => {

//   useEffect(
//     fetchPostUser,
//     [],
//   )
//   const [cat, setCat] = useState(false);
//   const [comments, setComments] = useState(false);
//   const [fav, setFav] = useState(false);



// return (
// <div className="container">

//     <div onClick={()=>setCat(!cat)}
//     className="UserSound">
//       <h1>Mes Sons </h1>
//       </div>

//     {
//        cat ? <div><PostCard className="p"/></div> : null
//     }
    
  

//   <div className="UserComments"
//   onClick={()=>setComments(!comments)}>
//     <h1>Mes Commentaires</h1> 
//     </div>

//    {
//        comments ? <div className="data">ICI S'AFFICHERONT LES COMMENTS DE L'USER</div> : null
//     }

//   <div className="UserFavorites"
//   onClick={()=>setFav(!fav)}>
//     <h1>Mes Favoris</h1> 
//     </div>
//     {
//        fav ? <div>ICI S'AFFICHERONT LES FAVORIES DE L'USER</div> : null
//     }  
//   </div>
// )};

// export default Compte;
