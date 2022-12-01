import React from "react";

let store_data = {
    data: [],
    cart: [],
}

export const reducer = (storedata = store_data, action) => {

    switch (action.type) {
        case "add": {
            return {
                ...storedata,
                data: action.payload
            }
        }

        default: {
            return storedata
        }
    }
}