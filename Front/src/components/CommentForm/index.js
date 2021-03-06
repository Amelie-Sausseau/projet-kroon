import React, { useEffect, useRef } from 'react';
import './styles.css';

const CommentForm = ({
  handleAddCommentToDB,
  inputCommentValue,
  setInputCommentValue,
  id,
}) => {
  // étape 1 : on récupère une référence en appellant useRef !
  const inputCommentReference = useRef(null);
  // étape 3, je peux m'en servir, ici dans un hook d'effet
  // on accède à l'élément actuellement référencé grâce à al propriété .current
  useEffect(
    () => {
      inputCommentReference.current.focus();
    },
    [],
  );

  return (
    <div className="comment--form">
      <form
        className="form"
        onSubmit={
      (event) => {
        event.preventDefault();
        handleAddCommentToDB(id);
      }
    }
      >
        <textarea
          value={inputCommentValue}
          onChange={
        (event) => {
          setInputCommentValue(event.target.value);
        }
      }
          className="form__input"
          type="textarea"
          rows="5"
          cols="33"
          placeholder="Laisse ton commentaire ... "
          ref={inputCommentReference}
        />
        {
      // ^
      // étape 2 : on pose la référence sur l'élément sur lequel on veut
      // une référence dans le DOM
      }
        <button
          className="form__submit"
          type="submit"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
