import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./comment.scss"
import img1 from "../../images/1.jpg"
import img2 from "../../images/2.jpg"
import img3 from "../../images/3.jpg"
import img5 from "../../images/4.jpg"
// import img5 from "../../images/ade.jpg"



//TEMPORARY
const comments = [
    {
        id: 1,
        name: "Binary Tech",
        userId: 1,
        profilePic: img5,
        img: img1,
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur dignissimos maiores earum quod ipsum id at beatae illo iste quo?"
    },
    {
        id: 2,
        name: "Mubarak Abdulrafiu",
        userId: 2,
        profilePic: img2,
        img: img3,
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur dignissimos maiores earum quod ipsum id at beatae illo iste quo?"
    },
    {
        id: 3,
        name: "Mubarak Ademola",
        userId: 3,
        profilePic: img3,
        img: img2,
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur dignissimos maiores earum quod ipsum id at beatae illo iste quo?"
    }
]


const Comments = () => {
    const { currentUser } = useContext(AuthContext);
    return (
    <div className='comments'>
        <div className="write">
            <img src={currentUser.profilePic} alt="" />
            <input type="text" placeholder="Write a comment" />
            <button> Comment </button>
        </div>
      {comments.map(comment =>(
        <div className="comment" key={comment.id}>
            <img src={comment.profilePic} alt="profile-pic" />
            <div className="info">
                <span> {comment.name} </span>
                <p> {comment.desc} </p>
            </div>
            <span className="date"> 1 hour ago </span>
        </div>
      ))}
    </div>
  )
}

export default Comments
