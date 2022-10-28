import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import useHttp from "../hooks/useHttps"


const initialState = {
    comments: [],
    commentLoading:true,
    searchVideos:[],
    searchVideosLoading:true,
    playlist: [],
    playlistLoading: true,

}

export const commentsFetching = createAsyncThunk(
    "comment/commentsFetchig",
    async (id) => {
        const {request3} = useHttp()

        const res = await request3(id)
        return res
    }
) 

export const searchVideosFetching = createAsyncThunk(
    "searchVideos/searchVideosFetchig",
    async (value) => {
        const {request5} = useHttp()

        const res = await request5(value)
        return res
    }
) 

export const playlistFetching = createAsyncThunk(
    "playlist/playlistFetching",
    async (value) => {
        console.log(value);
        const {request6} = useHttp()

        const res = await request6(value)
        return res
    }
)

const fetchingSlice = createSlice({
    name:"comments",
    initialState,
    reducers:{},
    extraReducers:builder => {
        builder
            .addCase(commentsFetching.pending, (state) => {
                state.commentLoading = true
            })
            .addCase(commentsFetching.fulfilled, (state, action) => {
                state.commentLoading = false
                state.comments = action.payload
            })
            .addCase(commentsFetching.rejected, (state) => {
                state.commentLoading = false
            })
            .addCase(searchVideosFetching.pending, (state) => {
                state.searchVideosLoading = true
            })
            .addCase(searchVideosFetching.fulfilled, (state, action) => {
                state.searchVideosLoading = false
                state.searchVideos = action.payload
            })
            .addCase(searchVideosFetching.rejected, (state) => {
                state.searchVideosLoading = false
            })
            .addCase(playlistFetching.pending, (state) => {
                state.playlistLoading = true
            })
            .addCase(playlistFetching.fulfilled, (state, action) => {
                state.playlistLoading = false
                state.playlist = action.payload
            })
            .addCase(playlistFetching.rejected, (state) => {
                state.playlistLoading = false
            })
            .addDefaultCase((state) => state)
    }
})



const {reducer, actions} = fetchingSlice

export default reducer