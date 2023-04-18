// import axios from 'axios';
// import { useState, useEffect } from 'react';

// export function useCountries() {
//   const [countries, setCountries] = useState([]);

//   useEffect(() => {
//     axios.get('https://restcountries.com/v3.1/all')
//       .then(response => {
//         setCountries(response.data);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }, []);

//   return countries;
// }
