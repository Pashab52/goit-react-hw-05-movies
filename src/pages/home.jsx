import { useEffect, useState } from "react";
import {fetchTrendMovie} from '../services/movieApi'

const Home = () => {

    // const [trend, setTrend] = useState(null)
     
    useEffect(() => {

        const getTrendMovie = async () => {
            const trend = await fetchTrendMovie();   
            console.log(trend);
            const normTrend = normlazizeTrendData(trend);
            console.log(normTrend);
               }
    try {
           getTrendMovie() 
        } catch(err) {console.error(err)};
        

    });

   function normlazizeTrendData(trend) {
    return trend.results.map(({ title, name }) => ({
        title,
        name
    }));
  }


    return <div>
        <h1>Trending today</h1>
        <ul>
        {/* {trend.map()} */}
        </ul>

    </div>
    
}

export default Home;