import React from 'react'
import './rightbar.scss'
import UserImg from '../../images/user.png'


const Rightbar = () => {
  return (
    <div className='rightbar'>
      <div className="container">
        <div className="item">
          <span> Suggestions For You </span>

          <div className="user">
            <div className="userInfo">
              <img src={UserImg} alt="UserPics" />
              <span> Binary Tech </span>
            </div>
            <div className="buttons">
              <button> Follow </button>
              <button> Dismiss </button>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src={UserImg} alt="UserPics" />
              <span> Binary Tech </span>
            </div>
            <div className="buttons">
              <button> Follow </button>
              <button> Dismiss </button>
            </div>
          </div>

        </div>

        <div className="item">
          <span> Latest Activities </span>

          <div className="user">
            <div className="userInfo">
              <img src={UserImg} alt="UserPics" />
              <p>
                <span> Binary Tech </span>
                changed their cover picture
              </p>
            </div>
            <span> 1 min ago </span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src={UserImg} alt="UserPics" />
              <p>
                <span> Binary Tech </span>
                changed their cover picture
              </p>
            </div>
            <span> 1 min ago </span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src={UserImg} alt="UserPics" />
              <p>
                <span> Binary Tech </span>
                changed their cover picture
              </p>
            </div>
            <span> 1 min ago </span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src={UserImg} alt="UserPics" />
              <p>
                <span> Binary Tech </span>
                changed their cover picture
              </p>
            </div>
            <span> 1 min ago </span>
          </div>
        </div>

        <div className="item">
          <span> Online Friends </span>

          <div className="user">
            <div className="userInfo">
              <img src={UserImg} alt="UserPics" />
            <div className="online" />
            <span> Binary </span>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src={UserImg} alt="UserPics" />
            <div className="online" />
            <span> Rafiu Mubarak </span>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src={UserImg} alt="UserPics" />
            <div className="online" />
            <span> Mubarak Ademola </span>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src={UserImg} alt="UserPics" />
            <div className="online" />
            <span> Ibrahim Al-Ameen </span>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Rightbar
