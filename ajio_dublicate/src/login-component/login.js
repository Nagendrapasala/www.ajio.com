import { Button, Input } from "@chakra-ui/react";
import { type } from "@testing-library/user-event/dist/type";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import InitialFocus from "./otp";

function Login() {
    let email = useRef();
    let navigate = useNavigate();

    const addUser = async () => {
        let details = {
            email: email.current.value,
        }
        let res = await fetch("http://localhost:3001/users", {
            method: "POST",
            body: JSON.stringify(details),
            headers: {
                "Content-Type": "application/json",
            },
        });
        navigate("/signup")
    }

    const checkUser = (users) => {
        let x = false;
        users.map((elem) => {
            if (elem.email == email.current.value) {
                x = true;
            }
        })
        if (x == true) {
            navigate("/otp");
        }
        else {
            addUser();
        }
    }

    const handleLogin = async () => {
        let res = await fetch("http://localhost:3001/users");
        let users = await res.json();
        checkUser(users);
    }

    return (
        <div>
            <Input ref={email} placeholder="Enter Email" />
            <Button onClick={() => {
                handleLogin();
            }}>Login</Button>
            {/* <InitialFocus /> */}
        </div>
    )
}

export default Login;