export const CHANGE_CONTACT_MESSAGE = "CHANGE_CONTACT_MESSAGE";
export const SEND_MESSAGE = 'SEND_MESSAGE';


  export const changeFieldSendMessage = (fieldValue, fieldName) => ({
    type: CHANGE_CONTACT_MESSAGE,
    fieldValue,
    fieldName,
  });

  export const  sendMessage= () => ({
    type: SEND_MESSAGE,
  });