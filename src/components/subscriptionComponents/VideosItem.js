import React from 'react'
import "./videosItem.css"
import { Link } from 'react-router-dom'
import img from "../../assets/card-img1.png"
import { useDispatch, useSelector } from 'react-redux'
import { fetchNextVideo } from '../../redux/reduser'

export const VideosItem = () => {
  const {playlist,playlistLoading} = useSelector((state) => state.commentReduser)
  const dispatch = useDispatch()

  
  if(!playlistLoading){
    console.log(playlist);
  }

  const chanelHandler = (channelId,videoId) => {
    dispatch(fetchNextVideo(videoId))
    // dispatch(commentsFetching(videoId))
    localStorage.setItem("chanelId", channelId)
  }

  if(playlistLoading) return <p>loading...</p>
  return (
    <ul className='row subscription-video-border'>
      {
        playlist.map(video => (
          <li className="col-md-6 col-lg-4 col-xl-3 ps-0">
              <Link 
              to={`/watch-video/${video.id.videoId}`}
              onClick={() => chanelHandler(video.snippet.channelId,video.id.videoId)}
              >
                <div className="card viseoitems-card">
                  <img className="card-im rounded-0"  src= {video.snippet.thumbnails.medium.url} alt=""/>

                  <div className="card-body">
                      <h4 
                      className="card-title viseoitems-card__title">
                        {video.snippet.title.slice(0,30)}...
                      </h4>
                      <p 
                      className='viseoitems-card__time'>
                      97K views 22 hours ago
                      {/* {(video.viewCount*1) >= 1000 ? (video.viewCount.slice(0,video.viewCount.length - 3) + "k"): video.viewCount} views   ·  {video.publishedTimeText} */}
                      </p>
                  </div>
                </div>
              </Link>
          </li>
        ))
      }
       
    </ul>
  )
}
