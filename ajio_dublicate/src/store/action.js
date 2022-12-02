import React from 'react'

export const Add = (data,dispatch) => {
  dispatch({
    type:"add",
    payload:data,
  })
}

export const Change = (data,dispatch) => {
  dispatch({
    type:"change",
    payload:data,
  })
}