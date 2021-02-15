// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import 'src/components/SignupForm/field.scss';

// == Composant
const Field = ({
    type, name, placeholder, value, setValue,
}) => (
    <div className='field'>
            <label
        className="field-label"
      >
        {placeholder}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        className="field-input"
        onChange={
            (e) => {
        // on pourrait :
        // - regarder au niveau du target de l'évènement le nom du champ,
        // setValue(e.target.name, e.target.value);
        // - utiliser le nom du champ pour transmettre l'info
        // setValue(name, e.target.value);
        // laisser la responsabilité à un composant de plus haut niveau
        // de déterminer ce qu'il va faire de cette faire.
        setValue(e.target.value);  
            }
        }
      />


    </div>
  );

// on définit la valeur de certaines props par défaut
// on fixe des valeurs par défaut pour toutes les props non obligatoire (et seulement)
Field.defaultProps = {
    type: 'text',
    placeholder: '',
  };  

// == Export
export default Field;