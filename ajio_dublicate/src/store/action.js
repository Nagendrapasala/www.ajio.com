import React from 'react'

export const action = (data,dispatch) => {
  dispatch({
    type:"add",
    payload:data,
  })
}
