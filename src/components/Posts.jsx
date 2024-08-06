import { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { PostlistContext } from "../store/Post-list-store";

function Posts({post}) {
  const {delpost}=useContext(PostlistContext);
    return (
      <div>
        <div className="card " >
         
          <div className="card-body">
            <h5 className="card-title"> 
           

              {post.title}</h5>
            <p className="card-text">
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger delete"
            onClick={()=>{delpost(post.id)}} >
            <RxCross2 />
  </span>
              {post.body}
            </p>
            {post.tags.map((tag)=>
             <span class="badge text-bg-primary  tag">#{tag}</span>)}

<div class="alert alert-dark like" role="alert">
   {post.reactions} persons liked your post
</div>
          
          </div>
        </div>
      </div>
    );
  }
  
  export default Posts;
  