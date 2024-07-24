import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { initiateQueue } from "../redux/playerSlice";

const useGetPlaying = () =>{
    const dispatch = useDispatch()
    const searchHindiSongs = async () => {
        const token = localStorage.getItem('token')
        const searchUrl = 'https://api.spotify.com/v1/search';
        const query = 'hindi'; // You can use a more specific query like 'hindi pop' or a specific artist
      
        const response = await axios.get(searchUrl, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
          params: {
            q: query,
            type: 'track',
            market: 'IN', // Optional: Specify market to get localized results
            limit: 10, // Number of search results to return
          },
        });
        const arr= [] 
      
         const data = response.data.tracks.items;
         console.log(data)
         data.forEach(element => {
            console.log(element.artists)
            const obj ={
                name:element.name ,
                url:element.preview_url ,
                image:element.album.images[0].url ,
                singer:element.artists[0].name ,
                artist:element.artists.length>1 ? (element.artists[1].name):("Solo") ,
            }
            arr.push(obj)
            
         });
         dispatch(initiateQueue(arr))
         
}
useEffect(()=>{
    searchHindiSongs()

} , [])
}


export default useGetPlaying