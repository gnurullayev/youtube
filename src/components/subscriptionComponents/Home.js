import React from 'react'
import { Link } from 'react-router-dom'
import { VideosItem } from './VideosItem'
import "./home.css"

const Home = () => {
  return (
    <div className='channel__home'>
       <div className="uploads">
            <div className="home-uploads">
                <Link className='uploads-list-link' to = "">
                    Uploads
                </Link>
                <button className='uploads-list-btn' type='button'>
                    Play all
                </button>
            </div>
            <p className='uploads-desc'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus labore voluptate sint accusantium, beatae atque.
            </p>
            <VideosItem/>
       </div>
    </div>
  )
}

export default Home