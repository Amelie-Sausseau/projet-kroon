export const PLAY_START = "PLAY_START";
export const STOP_RECORD = "STOP_RECORD";
export const CHANGE_URL= "CHANGE_URL";
export const FETCH_POSTS = 'FETCH_POSTS';
export const SAVE_POSTS = 'SAVE_POSTS';
export const CHANGE_BLOB = 'CHANGE_BLOB';

export const playStart = () => ({

  type: PLAY_START,
})


export const stopRecord = () => ({

  type: STOP_RECORD,
})

export const changeUrl = (value) => ({

  type: CHANGE_URL,
  newValue: value,
})

export const saveBlob = (value) => ({

  type: CHANGE_BLOB,
  newValue: value,
})

export const fetchPosts = () => ({

  type: FETCH_POSTS,
})

export const savePosts = (data) => ({

  type: SAVE_POSTS,
  data,
})
