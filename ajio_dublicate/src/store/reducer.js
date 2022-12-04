import React from 'react'
let store_data = {
    data: [],
    cart: [],
    mydata: [],
}
export const reducer = (storedata = store_data, action) => {
    switch (action.type) {
        case "add": {
            return {
                ...storedata,
                data: action.payload
            }
        }
        case "change": {
            return {
                ...storedata,
                mydata: action.payload
            }
        }
        case "DELETE": {
            return {
                ...storedata,
                cart: action.payload
            }
        }
        default: {
            return storedata
        }
    }
}
