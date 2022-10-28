import React from 'react'
import {Routes,Route,Navigate} from "react-router-dom"
import Home from '../pages/Home'
import SubscriptionHome from "../components/subscriptionComponents/Home"
import SubscriptionVideos from "../components/subscriptionComponents/Videos"
import SubscriptionPlaylist from "../components/subscriptionComponents/Playlists"
import SubscriptionComunity from "../components/subscriptionComponents/Community"
import SubscriptionChanels from "../components/subscriptionComponents/Channells"
import SubscriptionAbout from "../components/subscriptionComponents/About"
import Subscription from '../pages/Subscription'
import SubscribeWatch from '../pages/SubscribeWatch'
import Watch from '../pages/Watch'
import SearchVideoPages from '../pages/SearchVideoPages'

const PrivetRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/watch/subscribtions' element = {<SubscribeWatch/>}/>
        <Route path='/chanel/:id' element = {<Subscription/>}>
          <Route path='/chanel/:id/' element = {<SubscriptionHome/>}/>
          <Route path='/chanel/:id/videos' element = {<SubscriptionVideos/>}/>
          <Route path='/chanel/:id/playlist' element = {<SubscriptionPlaylist/>}/>
          <Route path='/chanel/:id/community' element = {<SubscriptionComunity/>}/>
          <Route path='/chanel/:id/channels' element = {<SubscriptionChanels/>}/>
          <Route path='/chanel/:id/about' element = {<SubscriptionAbout/>}/>
          {/* <Route path='/chanel/:id' element = {<Navigate to = "/chanel/:id/home"/>}/> */}
        </Route>
        <Route path='/watch-video/:id' element = {<Watch/>}/>
        <Route path='/search-video' element = {<SearchVideoPages/>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>   
    </>
  )
}

export default PrivetRoute