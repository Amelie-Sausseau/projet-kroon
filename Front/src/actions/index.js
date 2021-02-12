export const PLAY_START = "PLAY_START";
export const STOP_RECORD = "STOP_RECORD";
export const CHANGE_URL= "CHANGE_URL";


export const playStart = () => ({

  type: PLAY_START,
})


export const stopRecord = () => ({

  type: STOP_RECORD,
})

export const changeUrl = () => ({

  type: CHANGE_URL,
  value: value,
})
