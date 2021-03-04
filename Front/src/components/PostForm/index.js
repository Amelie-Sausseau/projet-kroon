import React, { useState, useEffect } from 'react';
import { ReactMic } from 'react-mic';
import ReactAudioPlayer from 'react-audio-player';
import PropTypes from 'prop-types';
import axios from 'axios';
import './postform.scss';
import Field from './Field';

const PostForm = ({
  playStart,
  stopRecord,
  record,
  recordedSound,
  url,
  changeNewUrl,
  saveNewBlob,
  token,
  blob,
  fetchCategories,
  categories,
  changeInputPostValueComp,
  titre,
  body,
  categorieId,
  changeSelectValueComp,
}) => {
  useEffect(
    fetchCategories,
    [],
  );

  const [mic, setMic] = useState(false);

  function send(blob) {
    const formData = new FormData();
    const file = new File([blob], {
      type: blob.type,
    });


    formData.append('soundFile', file);
    formData.append('title', titre);
    formData.append('body', body);
    formData.append('tag', categorieId);

    axios.post('http://ec2-3-82-153-17.compute-1.amazonaws.com/api/v1/posts/', formData,

      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },

      })
      .then((response) => response.data)

      .catch((error) => {
      });
  }

  function onData(recorded) {
    console.log('recordedBlob play is: ', recorded);
  }

  function downloadBlob(recordedBlob) {
    const { blob } = recordedBlob;
    saveNewBlob(blob);
    const blobUrl = URL.createObjectURL(blob);
    changeNewUrl(blobUrl);
  }

  /* function downloadFile(recordedBlob, name = 'file', type = 'text/plain') {
  const { createElement } = document
  const { URL: { createObjectURL, revokeObjectURL }, setTimeout } = window

  const blob = new Blob([recordedBlob], { type })
  const url = createObjectURL(blob)

  const anchor = createElement('a')
  anchor.setAttribute('href', url)
  anchor.setAttribute('download', name)
  anchor.click()

  setTimeout(() => { revokeObjectURL(url) }, 100)
} */

  function onStop(recordedBlob) {
    console.log('chunk of real-time data is: ', recordedBlob);
    recordedSound = true;
    downloadBlob(recordedBlob);
    /*     setBlobux(recordedBlob.blob);
 */ blob = recordedBlob.blob;
    send(blob);

    /*      if (
      window.navigator &&
      window.navigator.msSaveOrOpenBlob
    ) return window.navigator.msSaveOrOpenBlob(recordedBlob);

    // For other browsers:
    // Create a link pointing to the ObjectURL containing the blob.
    const data = window.URL.createObjectURL(recordedBlob.blob);

    const link = document.createElement('a');
    link.href = data;
    link.download = 'file.mp3';

    // this is necessary as link.click() does not work on the latest firefox
    link.dispatchEvent(
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
      })
    );

    setTimeout(() => {
      // For Firefox it is necessary to delay revoking the ObjectURL
      window.URL.revokeObjectURL(data);
      link.remove();
    }, 100);  */
  }

  /*   function handleChange(event) {
      setTtitle({value: event.target.value});
    } */

  function onClick() {
    setMic(!mic);
  }

  function onClickSelect(event) {
    changeSelectValueComp(event.target.value);
    console.log(event.target.value);
  }

  const htmlClass = record ? 'button_play' : 'button_start';

  return (
    <div className="idk">
      <div className="buttonContainer">
        <h1>Propose ton son!</h1>
        {mic ? (
          <div>

            <button onClick={playStart} type="button" className={htmlClass}>
              <ReactMic
                noiseSuppression
                record={record}
                className="sound-wave"
                onStop={onStop}
                onData={onData}
              />
              <div className="salut">salut</div>
            </button>
            <button onClick={stopRecord} type="button" className="button_stop">II</button>
          </div>
        ) : (
          <div> <div onClick={playStart} type="button" className="button_start " />
            <h3 className="consigne">Merci de remplir le formulaire avant d'enregistrer votre son</h3>
          </div>
        )}
      </div>
      {
   recordedSound && (
     <div className="audioPlayer">
       <ReactAudioPlayer
         src={url}
         controls
         preload="auto"
         className="audioPlayer"
       />
     </div>
   )
}
      
      <form autoComplete="off" className="box" type="submit">
        <span className="mandatory-cat">* champ obligatoire</span>
        <select className="categories" placeholder="Catégories" onChange={onClickSelect}>
          <option value="" disabled selected>Choisi une catégorie</option>
          {
        categories.map((categorie) => (

          <option className="categories" key={categorie.id} value={categorie.id}>{categorie.name}</option>

        ))
      }

        </select>
        <Field
          type="text"
          placeholder="Titre"
          className="title"
          value={titre}
          onChange={changeInputPostValueComp}
          name="titre"
        />
        <Field
          className="description"
          type="textarea"
          placeholder="Description"
          id="description"
          value={body}
          onChange={changeInputPostValueComp}
          name="body"
        />
        <div className="buttonSubmit">
          {!mic ? (<span onClick={onClick}>Enregistrer mon son</span>) : <span>Envoyer</span>}
        </div>

      </form>
    </div>
  );
};

export default PostForm;
