import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";


const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});


function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [step, setStep] = useState(0);

    const handleReset = () => {
        setUsername("");
        setPassword("");
        setStep(0);
    }

    return (
        <>
            {/* <ThemeProvider theme={darkTheme}> */}
                <CssBaseline />
                <div className="card mt-5">
                    
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input type="text" value={username} class="form-control" id="InputUsername" placeholder="Enter username" onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div class="form-group">
                        <label for="Password1">Password</label>
                        <input type="password" value={password} class="form-control" id="InputPassword1" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div class="clickbtn">
                        <button type="button" class="btn btn-primary mt-3" onClick={() => setStep(1)}>Submit</button>
                        <button type="reset" class="btn btn-danger mt-3" onClick={handleReset}>Reset</button>
                    </div>
                </div>


                {step === 1 && (
                    <div className="card mt-5">
                        <div className="card-body ">
                            <h4>Username : {username} </h4>
                            <h4>Password : {password}</h4>
                        </div>
                    </div>)}
            {/* </ThemeProvider> */}
        </>
    );
}

export default Login;