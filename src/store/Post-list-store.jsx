import React, { createContext, useReducer } from "react";


const PostlistContext = createContext({
    Postlist: [],
    addpost: () => {},
    delpost: () => {},
});

// const default_list = [
//     {
//         title: "New-york tour",
//         body: "Hey guys, I went to New York, yay! Come and join me.",
//         id: "01",
//         reactions: 5, 
//         tags: ["new-york", "tour", "ties"],
//     },
//     {
//         title: "Learning React",
//         body: "Hey, I am learning React from KG Coding. You should come and join me.",
//         id: "02",
//         reactions: 2,
//         tags: ["learning", "coding", "excited"],
//     },
// ];


const postReducer = (state, action) => {

    switch (action.type) {
        case "Delete":
            return state.filter((post) => action.payload.postId !== post.id);
            case "ADD":
                return [...state, action.payload.newPost];

        default:
            return state;
    }
};

const PostlistProvider = ({ children }) => {
    const [Postlist, dispatchPost] = useReducer(postReducer, []);

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

    return (
        <PostlistContext.Provider value={{ Postlist, addpost, delpost }}>
            {children}
        </PostlistContext.Provider>
    );
};

export default PostlistProvider;
export { PostlistContext };
