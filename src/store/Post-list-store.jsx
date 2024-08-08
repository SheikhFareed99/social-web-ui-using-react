import React, { createContext, useEffect, useReducer, useState } from "react";


const PostlistContext = createContext({
    Postlist: [],
    addpost: () => {},
    delpost: () => {},
    // initial_add:()=>{},
});




const postReducer = (state, action) => {


    switch (action.type) {
        case "Delete":
            return state.filter((post) => action.payload.postId !== post.id);
            case "ADD":
                return [ action.payload.newPost,...state];

                // case "INITIAL_ADD":
                //     return 

        default:
            return state;
    }
};

const PostlistProvider = ({ children }) => {
    const [Postlist, dispatchPost] = useReducer(postReducer,[]);

  

    const addpost = (newPost) => {
        dispatchPost({
            type: "ADD",
            payload: {newPost},
           
        });
       
  
    };

    const delpost = (postId) => {
       
        dispatchPost({
            type: "Delete",
            payload: { postId },
        });

    };

    const [fetching, setFetching] = useState(false);
     useEffect(() => {
 
    setFetching(true);
    fetch("https://dummyjson.com/posts")
    
      .then((res) => res.json())
      .then((data) => {
       
          data.posts.forEach((post) => {
            const postObject = {
              title: post.title,
              body: post.body,
              id: post.id,
              reactions: post.reactions ? post.reactions.likes : 0,
              tags: post.tags,
            };
        
            addpost(postObject);
          });
          setFetching(false);   
      });
}, []);

    return (
        <PostlistContext.Provider value={{ Postlist, addpost, delpost,fetching}}>
            {children}
        </PostlistContext.Provider>
    );
};



export default PostlistProvider;
export { PostlistContext };
