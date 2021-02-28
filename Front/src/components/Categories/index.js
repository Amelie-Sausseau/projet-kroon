import PropTypes from 'prop-types';

import React, { useEffect, useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';

import { NavLink } from 'react-router-dom';


import './categories.scss';

const Categories = ({categories, 
  fetchCategories,
  fetchCategorie1,
  fetchCategorie2,
  fetchCategorie3,
  fetchCategorie4,
  fetchCategorie5,
  categorieMusic,
  categorie2,
  categorie3,
  categorie4,
  categorie5,
}) => {
  useEffect(
    fetchCategories,
    [],
  )


const [Music, setMusic] = useState(false);
const [Animaux, setAnimaux] = useState(false);
const [Film, setFilm] = useState(false);
const [Video, setVideo] = useState(false);
const [Autres, setAutres] = useState(false);

function onClickMusic (){
  setMusic(!Music)
  fetchCategorie1()
  }

  function onClickAnimaux (){
    setAnimaux(!Animaux)
    fetchCategorie2()
    }

    function onClickFilm (){
      setFilm(!Film)
      fetchCategorie3()
      }

      function onClickVideo (){
        setVideo(!Video)
        fetchCategorie4()
        }

        function onClickAutre (){
          setAutres(!Autres)
          fetchCategorie5()
          }


return (
  <div className="catContainers">
       <div className="UserComments"
        onClick={onClickMusic}>
        <h1>Musique</h1> 
    </div>
    {
       categorieMusic.map((cat) => (
        Music ? 
    <div>              
        <h2>{cat.title}</h2>
        <ReactAudioPlayer
         src={cat.sound} 
         controls
          preload="auto"
         />
   </div> : null
       ))
    }
           <div className="UserComments"
        onClick={onClickAnimaux}>
        <h1>Animaux</h1> 
    </div>
    {
       categorie2.map((cat) => (
        Animaux ? <div><h2>{cat.title}</h2>
        <ReactAudioPlayer
         src={cat.sound} 
         controls
          preload="auto"
         />
         </div> : null
       ))
    }
           <div className="UserComments"
        onClick={onClickFilm}>
        <h1>Film/Série</h1> 
    </div>
    {
       categorie3.map((cat) => (
        Film ? <div><h2>{cat.title}</h2>
        <ReactAudioPlayer
         src={cat.sound} 
         controls
          preload="auto"
         />
         </div> : null
       ))
    }
           <div className="UserComments"
        onClick={onClickVideo}>
        <h1>Vidéos</h1> 
    </div>
    {
       categorie4.map((cat) => (
        Video ? <div><h2>{cat.title}</h2>
        <ReactAudioPlayer
         src={cat.sound} 
         controls
          preload="auto"
         />
         </div> : null
       ))
    }
           <div className="UserComments"
        onClick={onClickAutre}>
        <h1>Autres</h1> 
    </div>
    {
       categorie5.map((cat) => (
        Autres ? <div><h2>{cat.title}</h2>
        <ReactAudioPlayer
         src={cat.sound} 
         controls
          preload="auto"
         />
         </div> : null
       ))
    }
  </div>
)};

export default Categories;

