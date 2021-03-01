import { connect } from 'react-redux';

import Categories from 'src/components/Categories';

import { fetchCategories } from 'src/actions/posts';

import { fetchCategorie1, fetchCategorie2, fetchCategorie3, fetchCategorie4, fetchCategorie5 } from 'src/actions/categories';

import { fetchAllPosts } from '../../actions/users';





const mapStateToProps = (state) => ({

 categories: state.posts.categories,
 categorieMusic: state.categories.categorieMusic,
 categorie2: state.categories.categorie2,
 categorie3: state.categories.categorie3,
 categorie4: state.categories.categorie4,
 categorie5: state.categories.categorie5,

});

const mapDispatchToProps = (dispatch) => ({

  fetchCategories: () => {
    dispatch(fetchCategories())
  },

  fetchCategorie1: () => {
    dispatch(fetchCategorie1())
  },

  fetchCategorie2: () => {
    dispatch(fetchCategorie2())
  },

  fetchCategorie3: () => {
    dispatch(fetchCategorie3())
  },

  fetchCategorie4: () => {
    dispatch(fetchCategorie4())
  },
  fetchCategorie5: () => {
    dispatch(fetchCategorie5())
  },

  fetchAllPosts: () => {
    dispatch(fetchAllPosts())
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
