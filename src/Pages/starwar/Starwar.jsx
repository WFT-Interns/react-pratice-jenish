import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import StarWarTable from "../../Components/api-table";


// const NewsData = () => {
//     const {news, setNews} = useState([]);
//     useEffect(() => {
//         axios.get('https://newsapi.org/v2/everything?q=apple&from=2023-03-29&to=2023-03-29&sortBy=popularity&apiKey=e594ea79c0694d11ae4e7cb8dfc396b9')
//         .then((response) => {
//             const data=response.data
//             setNews(data);
//             console.log(data)
//         });
//     }, []);
//     const newsInfo = useQuery({ queryKey: ['']}"newsPost", setNews);
//     return (
//         <>
//             <Container>
//                 <div className="news-container">
//                     {status === "error" && <p>Error fetching Data</p>}
//                     {status === "loading" && <p>Data is loading</p>}
//                     {status === "success" && (
//                         <div>
//                             {data.map(() => (
//                                 <p key={"news.articles"}>{news.articles}</p>
//                             ))}
//                         </div>
//                     )}
//                 </div>
//             </Container>
//         </>
//     )
// }
// const baseURL = "https://swapi.dev/api/planets/";

function Starwar() {
    return (
        <>
            <Container>
                {<StarWarTable/>}
            </Container>
        </>
    )                                       
}

export default Starwar;