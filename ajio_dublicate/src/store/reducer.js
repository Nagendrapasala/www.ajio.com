import React from "react";

let store_data = {
    data: [],
    cart: [{
        image_url:
            "https://assets.ajio.com/medias/sys_master/root/20220602/Gtek/6297c377f997dd03e25a0144/portico_pink_144_tc_floral_print_super_king_size_bedsheet_with_pillow_covers.jpg",
        brandName: "PORTICO",
        name: "King Size BedSheet With Pillow Cover",
        price: "2199",
        strikedoffPrice: "2750",
        filter: "BED LINEN",
        Quantity: "1",
        size: "M",
    },
    {
        image_url:
            "https://assets.ajio.com/medias/sys_master/root/20220527/DPAo/6290868baeb26921afe92f18/home_centre_black_altos_dolmen_crepe_pan.jpg",
        name: "Altos Dolmen Crepe Pan",
        price: "1299",
        strikedoffPrice: "2000",
        filter: "cookware",
        Quantity: "1",
        size: "M",
    },
    {
        image_url:
            "https://assets.ajio.com/medias/sys_master/root/20211102/Cbz0/61816cfbf997ddf8f1f73ea5/-473Wx593H-463265340-white-MODEL.jpg",
        name: "Contour Artificial Flowers",
        price: "99",
        strikedoffPrice: "199",
        filter: "flower",
        Quantity: "1",
        size: "M",
    }],
}

export const reducer = (storedata = store_data, action) => {
    switch (action.type) {
        case "add": {
            return {
                ...storedata,
                data: action.payload
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