import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { NavLink } from 'react-router-dom';
import SearchBar from 'src/components/SearchBar';
import { url } from 'src/utils';
import './categories.scss';

const Categories = ({
  fetchAllPosts,
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
  allPosts,
  manageChangeSearch,
  search,
}) => {
  useEffect(
    fetchAllPosts,
    [],
  );
  console.log(allPosts);
  const [Music, setMusic] = useState(false);
  const [Animaux, setAnimaux] = useState(false);
  const [Film, setFilm] = useState(false);
  const [Video, setVideo] = useState(false);
  const [Autres, setAutres] = useState(false);
  const [search2, setSearch] = useState('');
  const [result, setResult] = useState(0);
  const [posts, setPosts] = useState([]);

  const dataSearch = () => {
    if (search2 === '') {
      setPosts([]);
      setResult(0);
    }
    else {
      axios.get(`${url}/api/v1/posts/`)
        .then((response) => {
          console.log(response);
          setResult(response.total_count);
          setPosts(response.items);
        })
        .catch(() => {
          console.log('error');
        })
        .then(() => {

        });
    }
  };

  useEffect(dataSearch, [search2]);

  function onClickMusic() {
    setMusic(!Music);
    fetchCategorie1();
  }

  function onClickAnimaux() {
    setAnimaux(!Animaux);
    fetchCategorie2();
  }

  function onClickFilm() {
    setFilm(!Film);
    fetchCategorie3();
  }

  function onClickVideo() {
    setVideo(!Video);
    fetchCategorie4();
  }

  function onClickAutre() {
    setAutres(!Autres);
    fetchCategorie5();
  }

  const publi = '/publicationsUser/';

  function getFiltered(array) {
    const loweredSearch = search.toLowerCase();
    const filteredPostList = array.filter((item) => {
      const loweredPostTitle = item.title.toLowerCase();
      // on teste si la devise étudiée (en minuscule) contient
      // notre chaine de recherche (en mlinuscule elle aussi).
      // Et on renvoit le résultat...
      return (loweredPostTitle.includes(loweredSearch));
    });

    return filteredPostList;
  }

  const categoryMusicFiltered = getFiltered(categorieMusic);
  const categoryAnimauxFiltered = getFiltered(categorie2);
  const categoryFilmSerieFiltered = getFiltered(categorie3);
  const categoryVideoFiltered = getFiltered(categorie4);
  const categoryOthersFiltered = getFiltered(categorie5);

  return (
    <>
      <SearchBar setSearch={manageChangeSearch} search={search} dataSearch={dataSearch} />
      <div className="catContainers">
        <div
          className="UserComments"
          onClick={onClickMusic}
        >
          <h1>Musique</h1>
        </div>
        {
       categoryMusicFiltered.map((post) => (
         Music
           ? (
             <NavLink to={publi + post.id}>
               <div>
                 <h2>{post.title}</h2>
                 <ReactAudioPlayer
                   src={post.sound}
                   controls
                   preload="auto"
                 />

               </div>
             </NavLink>
           ) : null
       ))
    }
        <div
          className="UserComments"
          onClick={onClickAnimaux}
        >
          <h1>Animaux</h1>
        </div>
        {
       categoryAnimauxFiltered.map((post) => (
         Animaux
           ? (
             <NavLink to={publi + post.id}>
               <div><h2>{post.title}</h2>
                 <ReactAudioPlayer
                   src={post.sound}
                   controls
                   preload="auto"
                 />
               </div>
             </NavLink>
           ) : null
       ))
    }
        <div
          className="UserComments"
          onClick={onClickFilm}
        >
          <h1>Film/Série</h1>
        </div>
        {
       categoryFilmSerieFiltered.map((post) => (
         Film
           ? (
             <NavLink to={publi + post.id}>
               <div><h2>{post.title}</h2>
                 <ReactAudioPlayer
                   src={post.sound}
                   controls
                   preload="auto"
                 />
               </div>
             </NavLink>
           ) : null
       ))
    }
        <div
          className="UserComments"
          onClick={onClickVideo}
        >
          <h1>Vidéos</h1>
        </div>
        {
       categoryVideoFiltered.map((post) => (
         Video
           ? (
             <NavLink to={publi + post.id}>
               <div><h2>{post.title}</h2>
                 <ReactAudioPlayer
                   src={post.sound}
                   controls
                   preload="auto"
                 />
               </div>
             </NavLink>
           ) : null
       ))
    }
        <div
          className="UserComments"
          onClick={onClickAutre}
        >
          <h1>Autres</h1>
        </div>
        {
       categoryOthersFiltered.map((post) => (
         Autres
           ? (
             <NavLink to={publi + post.id}>
               <div><h2>{post.title}</h2>
                 <ReactAudioPlayer
                   src={post.sound}
                   controls
                   preload="auto"
                 />
               </div>
             </NavLink>
           ) : null
       ))
    }
      </div>
    </>
  );
};
export default Categories;
