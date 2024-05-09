import React from 'react'
import { useSelector } from 'react-redux'

const SideBanner = () => {

  const count = useSelector((state)=>state.counter.value)
  const subscriber = useSelector((state)=>state.subscribe.value)
  const comments = useSelector((state)=>state.comment.value)
  console.log(comments)

  return (
     <div className="sidebanner">
        <div className="sidebarSub">
          Subscriber: {subscriber}
        </div>
        <div className="sidebarLikes">
          Likes : {count}
        </div>
        <div className="commentSection">
          Comments:
           <ul>
           {
            comments.map((item)=>(
                 <li>{item}</li>
            ))
          }
           </ul>
        </div>
     </div>
  )
}

export default SideBanner