import { useContext, useRef } from "react";
import { PostlistContext } from "../store/Post-list-store";

function Forms() {
  const { addpost } = useContext(PostlistContext);

  const useridRef = useRef();
  const titleRef = useRef();
  const contentRef = useRef();
  const tagsRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      title: titleRef.current.value,
      body: contentRef.current.value,
      id: useridRef.current.value,
      reactions: 0,
      tags: tagsRef.current.value.split(" "),
    };
    addpost(newPost);
    
 
    titleRef.current.value = "";
    contentRef.current.value = "";
    useridRef.current.value = "";
    tagsRef.current.value = "";
  };

  return (
    <div>
      <form className="createPost" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="UserId" className="form-label">User Id</label>
          <input type="text" className="form-control" id="UserId" placeholder="Enter your user ID..." ref={useridRef} />
        </div>

        <div className="mb-3">
          <label htmlFor="Title" className="form-label">Title</label>
          <input type="text" className="form-control" id="Title" placeholder="Enter your post title..." ref={titleRef} />
        </div>

        <div className="mb-3">
          <label htmlFor="Content" className="form-check-label">Content</label>
          <textarea id="Content" rows="3" className="form-control" ref={contentRef} placeholder="Express your thoughts..."></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="Tags" className="form-label">Tags</label>
          <input type="text" className="form-control" id="Tags" placeholder="Enter tags for your post..." ref={tagsRef} />
        </div>

        <button type="submit" className="btn btn-primary postbtn">Post</button>
      </form>
    </div>
  );
}

export default Forms;
