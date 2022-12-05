import React from 'react'
let store_data = {
    data: [],
    cart: [],
    mydata: [],
    myImage: "",
    myPage: {}

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
        case "setImage" : {
            return {
                ...storedata,
                myImage: action.payload
            }
        }

        case "RefreshPage" : {
            return {
                ...storedata,
                myPage: action.payload
            }
        }

        case "CART" : {
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
