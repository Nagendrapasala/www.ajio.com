import { Button, Input } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
    let navigate = useNavigate();

    const gotoOtp = () => {
        navigate("/otp");
    }

    return (
        <div>
            <Input placeholder="Enter Name" />
            <Input placeholder="Enter Mobile No" />
            <Input placeholder="Enter Password" />
            <Button onClick={gotoOtp}>Sign Up</Button>
        </div>
    )
}

export default Signup;