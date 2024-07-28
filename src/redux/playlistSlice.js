import { createSlice } from "@reduxjs/toolkit";

const playlistSlice = createSlice({
    name: "playlist",
    initialState: {
        playlist: {},
        likedSongs:[]
    },
    reducers: {
        createPlaylist: (state, action) => {
            const playlistName = action.payload.playlist.toUpperCase();
            console.log(playlistName)
            if (!state.playlist[playlistName]) {
                state.playlist[playlistName] = [];
            }
            if (action.payload.song) {
                state.playlist[playlistName].push(action.payload.song);
            }
        },
        addToPlaylist: (state, action) => {
            const playlistName = action.payload.playlist.toUpperCase();
            if (state.playlist[playlistName]) {
                state.playlist[playlistName].push(action.payload.song);
            }
        },
        removeFromPlaylist: (state, action) => {
            console.log("Reached Here")
            console.log(action.payload.playlist)
            console.log(action.payload.name)
            const playlistName = action.payload.playlist.toUpperCase();
            if (state.playlist[playlistName]) {
                state.playlist[playlistName] = state.playlist[playlistName].filter(song => song.name !== action.payload.name);
            }
        },
        addToLikedSongs :(state,action)=>{
            console.log("Song RECIEVED");
            state.likedSongs.push(action.payload);
            console.log(action.payload);
            console.log(state.likedSongs[0]);
        },
        removeFromLikedSongs :(state,action)=>{
            state.likedSongs=state.likedSongs.filter(song => song.name !== action.payload.name);
        },
        setSelectedSong : (state , action)=>{
        state.selectedSong = action.payload
     }
    }
});

export const { createPlaylist, addToPlaylist, removeFromPlaylist,addToLikedSongs,removeFromLikedSongs,setSelectedSong } = playlistSlice.actions;
export default playlistSlice.reducer;