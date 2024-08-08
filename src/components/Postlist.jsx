import React, { useContext, useEffect, useState } from "react";
import Posts from "./Posts";
import Welcome from "./Wellcome";
import Spinner from "./Spiner";
import { PostlistContext } from "../store/Post-list-store";

const Postlist = () => {
  const { fetching, Postlist } = useContext(PostlistContext);
 
  return (
    <div>
      {fetching && <Spinner />}
      {!fetching&&Postlist.length === 0 && <Welcome />}
      {!fetching&& Postlist.length > 0 && Postlist.map((post) => (
        <Posts key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Postlist;
