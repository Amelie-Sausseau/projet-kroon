import { combineReducers } from 'redux';

import usersReducer from 'src/reducers/users';

// étape 2-a : on importe le reducer userReducer
import micReducer from 'src/reducers/mic';

// on exporte le résultat d'une fonction
// à qui on passe en argument un objet précisant
// qui indique le nom des différentes tranches du state
// ici, une seule : recipe et le reducer qui en aura la charge.
const combinedReducer = combineReducers({
  mic: micReducer,
  users: usersReducer,
});

// une fois le super reducer construit,
// c'est lui qui sera utlisé par le store.
export default combinedReducer;