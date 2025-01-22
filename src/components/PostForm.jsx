import React, { useState } from "react";
import { usePostContext } from "../context/PostContext";

function PostForm() {
    const [content, setContent] = useState("");
    const { dispatch } = usePostContext();

    const handleSumbet = (e) => {
        e.preventDefault();
        if (content.trim()) {
            dispatch({ type: "ADD_POST", payload: {id: Date.now(), content}});
            setContent("");
        }
    };

    return (
        <form onSumbit={handleSumbet}>
            <input
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button type="sumbit">ADD POST</button>
        </form>
    );
}

export default PostForm;