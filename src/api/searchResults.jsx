import React,{useState,useEffect} from 'react'

// function searchResults() {
//     function useData(url) {
//         const[data,setData]=useState(null);
//         useEffect(()=>{
//             let ignore=false;
//             fetch(url).then(response=>response.json()).then(json=>{
//                 if (!ignore) {
//                     setData(json);
//                 }
//             });
//             return ()=>{
//                 ignore=true;
//             };
//         },[url]);
//        return data; 
//     }
//   return (
//     <div>searchResults</div>
//   )
// }

export default searchResults