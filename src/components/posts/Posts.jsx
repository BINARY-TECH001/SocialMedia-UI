import React from 'react'
import "./posts.scss"
import img1 from "../../images/1.jpg"
import img2 from "../../images/2.jpg"
import img3 from "../../images/3.jpg"
import img4 from "../../images/4.jpg"
import img5 from "../../images/ade.jpg"
import Post from '../post/Post'


    //TEMPORARY
    const posts = [
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
      },
      {
          id: 4,
          name: "Ademola Abdulrafiu",
          userId: 4,
          profilePic: img4,
          img: img1,
          desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur dignissimos maiores earum quod ipsum id at beatae illo iste quo?"
      },
  ]

const Posts = () => {
  return (
    <div className='posts'>
      {posts.map(post=>(
        <Post post={post} key={post.id}/>
      ))}
    </div>
  )
}

export default Posts
