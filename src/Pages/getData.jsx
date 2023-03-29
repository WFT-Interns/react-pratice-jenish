import axios from "axios";
import React from 'react';
import { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
import { FormControl, InputLabel, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';


// const darkTheme = createTheme({
//     palette: {
//         mode: 'dark',
//         text: 'disabled',
//     },
// });


function APIdata() {
    const [post, setPost] = useState("");

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/3').then((response) => {
            setPost(response.data);
        });
    }, []);

    return (
        <>
            {/* <ThemeProvider theme={darkTheme}> */}
            <CssBaseline />

            {/* Table */}

            <div className="card">
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 600 }} >
                        <TableHead>
                            <TableRow>
                                <TableCell>Post ID</TableCell>
                                <TableCell>User ID</TableCell>
                                <TableCell>Heading</TableCell>
                                <TableCell>Content</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>{post.id}</TableCell>
                                <TableCell>{post.userId}</TableCell>
                                <TableCell>{post.title}</TableCell>
                                <TableCell>{post.body}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            {/* </ThemeProvider> */}
        </>
    );
}

export default APIdata;