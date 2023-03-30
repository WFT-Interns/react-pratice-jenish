import React, { useEffect, useState } from "react"
import { DataGrid } from "@mui/x-data-grid";
import axiosInstance from "./axiosInstance";
import axios from "axios";

const StarWar = () => {
    const [planets, setPlanets] = useState([]);

    const columns =  [
        {field: 'name', headerName: 'Name', width: 200},
        {field: 'diameter', headerName: 'Diameter', width: 90},
        {field: 'climate', headerName: 'Climate', width: 100},
        {field: 'terrain', headerName: 'Terrain', width: 100},
    ]

    useEffect (() => {
        axiosInstance.get('planets/').then(response =>{
            const parsedData = response.data.results.map(sWar => ({
                name:sWar.name,
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
            {planets &&
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        columns={columns}
                        rows={planets}
                        pageSize={8}
                        rowsPerPageOptions={[10]}
                        disableSelectionOnClick />
                </div>
            }
             
        </>
    )

}

export default StarWar;