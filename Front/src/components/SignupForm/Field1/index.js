// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './field.css';

// == Composant
const Field1 = ({
  value,
  type,
  name,
  placeholder,
  onChange,
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };


  return (
    <div >
      <input
        value={value}
        onChange={handleChange}
        type={type}
        className="field-input-signup"
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

 Field1.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

// Valeurs par défaut pour les props
Field1.defaultProps = {
  value: '',
  type: 'text',
}; 

// == Export
export default Field1;