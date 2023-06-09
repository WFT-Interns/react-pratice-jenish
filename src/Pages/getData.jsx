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

    // handle function
    // const handleChange = (event: SelectChangeEvent) => {
    //     setPostNumber(event.target.value);
    // };


    return (
        <>
            {/* <ThemeProvider theme={darkTheme}> */}
                <CssBaseline />
                <div className="card">
                    <label>post ID: {post.id}</label>
                    <label><h2>Post Heading</h2>{post.title}</label>
                    <label><h3>Post Body</h3>{post.body}</label>
                </div>




                {/* Table */}
                {/* <div className="card">
                    <label>Select Post:</label>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel id="select-post">1</InputLabel>
                        <select labelId="select-post" id="select-post" value="number" onChange={ handleChange}>
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                        </select>
                    </FormControl>
                </div>

                <div className="card">
                    <TableContainer component={Paper}>
                        <Table sx={{minWidth:600}} >
                            <TableHead>
                                <TableRow>
                                    <TableCell>Post ID</TableCell>
                                    <TableCell>User ID</TableCell>
                                    <TableCell>Heading</TableCell>
                                    <TableCell>Content</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.name} sx={{'&:last-child td, &:last-child th': {border:0}}}>
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell>{post.id}</TableCell>
                                        <TableCell>{user.id}</TableCell>
                                        <TableCell>{post.title}</TableCell>
                                        <TableCell>{post.body}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </ThemeProvider> */}
        </>
    );
}

export default APIdata;