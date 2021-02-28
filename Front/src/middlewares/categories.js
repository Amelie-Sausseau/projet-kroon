import axios from 'axios';
import { url } from 'src/utils';


import { FETCH_CATEGORIES_1, FETCH_CATEGORIES_2, FETCH_CATEGORIES_3, FETCH_CATEGORIES_4, FETCH_CATEGORIES_5,
  saveCatMiddle1, saveCatMiddle2, saveCatMiddle3, saveCatMiddle4, saveCatMiddle5
} from 'src/actions/categories';


export default (store) => (next) => (action) => {
    switch (action.type) {
      case FETCH_CATEGORIES_1:
        axios.get(`${url}/api/v1/tags/1/posts`)
          .then((response) => {
            console.log(response.data);
            store.dispatch(saveCatMiddle1(response.data.posts));
          }).catch((error) => {
            console.error('error');
          });
        next(action);
        break;

        case FETCH_CATEGORIES_2:
            axios.get(`${url}/api/v1/tags/2/posts`)
              .then((response) => {
                console.log(response.data);
                store.dispatch(saveCatMiddle2(response.data.posts));
              }).catch((error) => {
                console.error('error');
              });
            next(action);
            break;

            case FETCH_CATEGORIES_3:
                axios.get(`${url}/api/v1/tags/3/posts/`)
                  .then((response) => {
                    console.log(response.data);
                    store.dispatch(saveCatMiddle3(response.data.posts));
                  }).catch((error) => {
                    console.error('error');
                  });
                next(action);
                break;

                case FETCH_CATEGORIES_4:
                    axios.get(`${url}/api/v1/tags/4/posts`)
                      .then((response) => {
                        console.log(response.data);
                        store.dispatch(saveCatMiddle4(response.data.posts));
                      }).catch((error) => {
                        console.error('error');
                      });
                    next(action);
                    break;

                    case FETCH_CATEGORIES_5:
                        axios.get(`${url}/api/v1/tags/5/posts`)
                          .then((response) => {
                            console.log(response.data);
                            store.dispatch(saveCatMiddle5(response.data.posts));
                          }).catch((error) => {
                            console.error('error');
                          });
                        next(action);
                        break;
      default:
        next(action);
    }
  };
  