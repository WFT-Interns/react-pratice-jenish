import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/system";
import { useNavigate } from "react-router-dom";
import './login.css'
import Navbar from "../../Components/navbar";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [step, setStep] = useState(0);
    const navigate = useNavigate();

    const handleReset = () => {
        setUsername("");
        setPassword("");
        setStep(0);
    }

    const navigateStarwar = () => {
        navigate("/StarWar");
    }

    return (
        <>
            <CssBaseline />
            {<Navbar/>}
            <Container>
                <div class="card">
                    <div class="form-group">
                        <label for="username" class="form-label">Username</label>
                        <input type="text" value={username} id="InputUsername" placeholder="Enter username" onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div class="form-group">
                        <label for="Password1" class="form-label">Password</label>
                        <input type="password" value={password} id="InputPassword1" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div class="clickbtn">
                        <button type="button" class="btn btn-primary mt-3" onClick={navigateStarwar}>Submit</button>
                        <button type="reset" class="btn btn-danger mt-3" onClick={handleReset}>Reset</button>
                    </div>
                </div>


                {/* {step === 1 && (
                    <div className="card mt-5">
                        <div className="card-body ">
                            <h4>Username : {username} </h4>
                            <h4>Password : {password}</h4>
                        </div>
                    </div>)} */}
            </Container>
        </>
    );
}

export default Login;