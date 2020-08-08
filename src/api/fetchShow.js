import axios from 'axios';


export const fetchShow = () =>  {
 return axios
  .get(
      "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
      )   
  .then(res => {
    console.log(res);
    return res
  })
  .catch(error => {
    return error
  })
}

// // useEffect(() => {
    //     .get(
    //       "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
    //     )
    // };
    
//   const handleSelect = e => {
//     setSelectedSeason(e.value);
//   };

//   if (!show) {
//     return <h2>Fetching data...</h2>;
//   }