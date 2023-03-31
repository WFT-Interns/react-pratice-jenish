import { Container } from "@mui/material";
import React from "react";
import Navbar from "../../Components/navbar";
import './home.css';

function Home() {
    return (
        <>
            <Container>
                {<Navbar />}
                <div class="info">
                    <h2>Welcome to starwar info site.</h2>
                </div>
            </Container>
        </>
    )
}

export default Home;