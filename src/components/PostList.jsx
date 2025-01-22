import React from "react";
import { usePostContext } from "../context/PostContext";

function PostList() {
    const { state } = usePostContext();

    return (
        <div>
            <h2>Posts</h2>
            <ul>
                {state.posts.map((post) (
                    <li key={post.id}>{post.content}</li>
                ))}
            </ul>
        </div>
    );
}

export default PostList;