import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
// import { BagIcon } from "@chakra-ui/icon";
// import { FiShoppingCart } from "react-icons/fi";
import "./Button.css";
import { BsHandbag, BsHeart } from "react-icons/bs";

export default function ButtonComp() {
  return (
    <div className="btnPage">
      <Button className="addBtn">
        <span className="btnLogo">
          <BsHandbag />
        </span>
        ADD TO BAG
      </Button>
      <div className="qua">HANDPICKED STYLES | ASSURED QUALITY</div>
      <Button className="wishBtn">
        <span className="btnLogo">
          <BsHeart />
        </span>
        SAVE TO WISHLIST
      </Button>
    </div>
  );
}
