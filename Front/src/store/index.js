// import de redux et de l'enhancer
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import apiMiddleWare from 'src/middlewares/api';

// import du reducer
import  reducer  from 'src/reducers';

// on met en place le store
const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(apiMiddleWare),
),
);

// on rend dispo le store
export default store;

