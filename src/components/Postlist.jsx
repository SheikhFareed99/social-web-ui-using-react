import React, { useContext } from "react";
import Posts from "./Posts";
import { PostlistContext } from "../store/Post-list-store";

const Postlist = () => {
  const { Postlist } = useContext(PostlistContext);

  return (
    <div>
      {Postlist.map((post) => (
        <Posts key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Postlist;
