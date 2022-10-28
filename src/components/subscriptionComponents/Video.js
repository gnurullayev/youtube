import React from 'react'
import "./video.css"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNextVideo } from '../../redux/reduser'

const Video = () => {
    const {video,videoLoading,} = useSelector(state => state.videoReduser)
    const dispatch = useDispatch()
    if(videoLoading) return <p>loading...</p>

    const chanelHandler = (channelId,videoId) => {
        dispatch(fetchNextVideo(videoId))
        // dispatch(commentsFetching(videoId))
        localStorage.setItem("chanelId", channelId)
      }

  return (
    <div className="subscription-video pt-4">
        <div className='row subscription-video-border pb-4'>
            <div className="col-md-5 ps-0">
            <iframe className='video__watch' src={`https://www.youtube.com/embed/${video.items[0].id}`}
              frameBorder='0'
              allow='autoplay; encrypted-media'
              allowFullScreen
              title='video'
            />
            </div>

            <div className="col-md-7">
                <h5 className="subscrib-vide-title">
                    {video.items[0].snippet.title}
                </h5>

                <p className="subscrib-vide-text1">
                    <span className="text-muted">
                    378K views 
                    </span> 

                    <small className="ms-2 text-muted"> 3 week ago</small>
                </p>

                <p className="video-desc">
                    {video.items[0].snippet.description.slice(0,350)}...
                </p>
                <p className='video-watch__text pb-0'>📺 Watch the complete Build a SwiftUI app for iOS 15 course</p>
                <Link 
                className='video-link' 
                to = {`/watch-video/${video.items[0].id}`}
                >
                    READ MORE
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Video