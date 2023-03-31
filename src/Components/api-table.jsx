import React, { useEffect, useState } from "react"
import { DataGrid } from "@mui/x-data-grid";
import axiosInstance from "./axiosInstance";
import axios from "axios";
import { Container } from "@mui/material";
import makeStyles from "@mui/material";

const columns = [
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'diameter', headerName: 'Diameter', width: 200},
    { field: 'climate', headerName: 'Climate', width: 200 },
    { field: 'terrain', headerName: 'Terrain', width: 300 },
]


const StarWarTable = () => {
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        axiosInstance.get('planets/').then(response => {
            const parsedData = response.data.results.map(sWar => ({

                name: sWar.name,
                diameter: sWar.diameter,
                climate: sWar.climate,
                terrain: sWar.terrain,
            }));
            setPlanets(parsedData);
        })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    return (
        <>
            <Container>
                {planets &&
                    <div style={{ height: 700, width: '100%' }}>
                        <DataGrid
                            getRowId={(row) => row.name}
                            columns={columns}
                            rows={planets}
                            rowsPerPageOptions={[5]}
                            disableSelectionOnClick
                            />
                    </div>
                }
            </Container>
        </>
    )

}

export default StarWarTable;