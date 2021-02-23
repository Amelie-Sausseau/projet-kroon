import { connect } from 'react-redux';

import Categories from 'src/components/Categories';

import { fetchCategories } from 'src/actions/posts';



const mapStateToProps = (state) => ({

 categories: state.posts.categories

});

const mapDispatchToProps = (dispatch) => ({

  fetchCategories: () => {
    dispatch(fetchCategories())
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
