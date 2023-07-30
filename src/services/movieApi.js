



export function fetchTrendMovie() {

 const options = {
   method: 'GET',
   headers: {
     accept: 'application/json',
     Authorization:
       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWY5NjI1ZWMwNTYzMDZhMTI5NDBmNzQyZDk4OTVlYiIsInN1YiI6IjY0YzQyMjQ3NDFhYWM0MDEwMTQzMTQ4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d_HEh-sV3F_dyKiODY0wef4bWi3WrlK7FGhBkulFBZ0',
   },
 };

 fetch('https://api.themoviedb.org/3/trending/all/day', options)
   .then(response => response.json())
   .then(response => console.log(response))
   .catch(err => console.error(err));
}