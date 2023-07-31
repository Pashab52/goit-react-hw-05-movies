import { useEffect, useState } from "react";
import { fetchTrendMovie } from '../services/movieApi'
import { TrendsItem } from "components/TrendsItem/TrendsItem";

const Home = () => {

    const [trends, setTrends] = useState(null)
     
    useEffect(() => {
      
        const getTrendMovie = async () => {
            const trendData = await fetchTrendMovie();   
            const normTrend = normlazizeTrendData(trendData);
            setTrends(normTrend);
            
               }
    try {
        getTrendMovie() 
        } catch(err) {console.error(err)};
        

    },[]);


   function normlazizeTrendData(trendData) {
    return trendData.results.map(({ title, name, id, backdrop_path }) => ({
      title,
      name,
      id,
      backdrop_path
    }));
  }


    return (
      <div className="homeWrap">
        <h1 className="title">Trending today</h1>
        <ul className="list">
          {trends &&
            trends.map(({ title, name, id, backdrop_path }) => {
              return (
                <TrendsItem
                  key={id}
                  title={title}
                  name={name}
                  id={id}
                  backdrop_path={backdrop_path}
                />
              );
                
              
            })}
        </ul>
      </div>
    );
    
}

export default Home;