import React, { useEffect, useRef, useState } from 'react'
import "./subscription.css"
import { HiBellAlert} from 'react-icons/hi2'
import img from "../assets/bg-img.png"
import { Link, Outlet, useParams } from 'react-router-dom';
import {FiSearch} from 'react-icons/fi';
import Video from '../components/subscriptionComponents/Video';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChanelDetails } from '../redux/reduser';

const Subscription = () => {
  // const [channelId, setCHanelId] = useState(localStorage.getItem("chanelId"))
  const {chanelDetails,chanelLoading} = useSelector((state) => state.videoReduser)
  const dispatch = useDispatch()
  const {id} = useParams()
  const countRef = useRef(null)

  if(!chanelLoading){
    countRef.current = chanelDetails.items[0].statistics.subscriberCount 
  }

  useEffect(() => {
    console.log("salom");
    console.log(id);
    dispatch(fetchChanelDetails(id))
  }, [id])

  // console.log(chanelDetails);

  // useEffect(() => {
  //   dispatch(playlistFetching(channelId))
  // }, [channelId])

  // if(chanelDetails.items !== undefined) {
  //   console.log("hayir");
  // }
  


  if(chanelLoading) return <p>loading...</p>
  return (
    <div className="subscription">
      <div className="suubscription-bg-img">
        <img 
        className="subscription__img" 
        src={
          chanelDetails.items[0].brandingSettings.image === undefined
          ? img
          : chanelDetails.items[0].brandingSettings.image.bannerExternalUrl
        } alt="" 
        />
      </div>

      <div className="subscription__profile">
        <div className="subscription-settings mt-3">
          <div className="subscription-settings-top">
            <ul className="subscription__list1">
              <li className="subscription__item2 ">
                <img 
                  className="subscription-profile__img" 
                  src={chanelDetails.items[0].snippet.thumbnails.default.url} 
                  alt="" 
                />
              </li>

              <li className="subscription-item1">
                <h4 className="subscription__title">
                  {chanelDetails.items[0].brandingSettings.channel.title}
                </h4>
                <h5 className="subscription__subtitle">
                  {
                  (countRef.current * 1) >= 1000 
                  ?(countRef.current * 1) >= 1000000 
                  ?countRef.current.slice(0,countRef.current.length - 6) + "M"
                  :countRef.current.slice(0,countRef.current.length - 3) + "K"
                  :countRef.current
                  } subscription
                </h5>
              </li>
            </ul>

            <ul className="subscription__list1">
              <li className="subscription-item1">
                <button className='btn btn-light  watch-subscribe'>Subscribe</button>
              </li>

              <li className="watch_left-settings-item1">
                <button className='subscription-btn'>
                  <HiBellAlert className='subscription-icon'/>
                </button>
              </li>
            </ul>
          </div>
          <ul className="subscription_navigate-list">
            <li className="subscription_navigate-item subscription_active">
              <Link
              className="subscription_navigate-link" 
              to={`/chanel/${id}/`}
              >
                HOME
              </Link>
            </li>

            <li className="subscription_navigate-item">
              <Link 
              className="subscription_navigate-link" 
              to={`/chanel/${id}/videos`}
              >
                  VIDEOS
              </Link>
            </li>

            <li className="subscription_navigate-item">
              <Link 
              className="subscription_navigate-link" 
              to={`/chanel/${id}/playlist`}
              >
                  PLAYLISTS
              </Link>
            </li>

            <li className="subscription_navigate-item">
              <Link 
              className="subscription_navigate-link" 
              to={`/chanel/${id}/community`}
              >
                  COMMUNITY
              </Link>
            </li>

            <li className="subscription_navigate-item">
              <Link 
              className="subscription_navigate-link" 
              to={`/chanel/${id}/channels`}
              >
                CHANNELS
              </Link>
            </li>

            <li className="subscription_navigate-item">
              <Link 
              className="subscription_navigate-link" 
              to={`/chanel/${id}/about`}
              >
                 ABOUT
              </Link>
            </li>

            <li className="subscription_navigate-item">
              <Link 
              className="subscription_navigate-link" 
              to=""
              >
                <FiSearch className="subscription_navigate-icon text-light"/>
              </Link>
            </li>

            <li className="subscription_navigate-item">
              <Link 
              className="subscription_navigate-link" 
              to=""
              >
                <input type="text" placeholder='Search'/>
              </Link>
            </li>
          </ul>
        </div>

        <Video/>
        <Outlet/>
      </div>


    </div>
  )
}

export default Subscription