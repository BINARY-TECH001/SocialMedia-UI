import React from 'react'
import "./stories.scss"
import img1 from "../../images/1.jpg"
import img2 from "../../images/2.jpg"
import img3 from "../../images/3.jpg"
import img4 from "../../images/4.jpg"
import { useContext } from 'react'
import { AuthContext } from "../../context/authContext"

const Stories = () => {

    const { currentUser } = useContext(AuthContext)

    //TEMPORARY
    const stories = [
        {
            id: 1,
            name: "Binary Tech",
            img: img1
        },
        {
            id: 2,
            name: "Mubarak Abdulrafiu",
            img: img2
        },
        {
            id: 3,
            name: "Mubarak Ademola",
            img: img3
        },
        {
            id: 4,
            name: "Ademola Abdulrafiu",
            img: img4
        },
    ]
  return (
    <div className='stories'>
        <div className="story">
            <img src={currentUser.profilePic} alt="story" />
            <span> {currentUser.name} </span>
            <button>+</button>
        </div>

      { stories.map(story=>(
        <div className="story" key={story.id}>
            <img src={story.img} alt="story" />
            <span> {story.name} </span>
        </div>
      ))}
    </div>
  )
}

export default Stories
