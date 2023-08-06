import { useEffect, useState } from "react";
import { fetchTrendMovie } from '../services/movieApi'
import { fetchTrendTv } from '../services/movieApi';
import { TrendsItem } from "components/TrendsItem/TrendsItem";

const Home = () => {

  const [trends, setTrends] = useState(null)
  const [trendsTv, setTrendsTv] = useState(null);
     
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



  useEffect(() => {
    const getTrendTv = async () => {
      const trendDataTv = await fetchTrendTv();
      const normTrendTv = normlazizeTrendDataTv(trendDataTv);
      setTrendsTv(normTrendTv);
    };
    try {
      getTrendTv();
    } catch (err) {
      console.error(err);
    }
  }, []);

  function normlazizeTrendDataTv(trendDataTv) {
    return trendDataTv.results.map(({ title, name, id, backdrop_path }) => ({
      title,
      name,
      id,
      backdrop_path,
    }));
  }




    return (
      <div className="main">
        <div className="home-wrap">
          <div className="home-title-wrap">
            <h1 className="home-title">Trending today</h1>
          </div>

          <div className="list-wrap">
            <div>
              <h2 className="trend-title">Trending movies</h2>
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

            <div>
              <h2 className="trend-title">Trending TV shows</h2>
              <ul className="list">
                {trendsTv &&
                  trendsTv.map(({ title, name, id, backdrop_path }) => {
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
          </div>
        </div>
      </div>
    );
    
}

export default Home;