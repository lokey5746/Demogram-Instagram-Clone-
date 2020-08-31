import React, { useState, useEffect } from "react";
import firebase from "firebase";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";
import { db } from "./firebase";

function Post({ postId, username, caption, imageUrl, user }) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  useEffect(() => {
    let unsubscribe;
    if (postId) {
      unsubscribe = db
        .collection("posts")
        .doc(postId)
        .collection("comments")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }
    return () => {
      unsubscribe();
    };
  }, [postId]);

  // ==================post comment function========
  const postComment = (e) => {
    e.preventDefault();
    db.collection("posts").doc(postId).collection("comments").add({
      text: comment,
      username: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setComment("");
  };

  return (
    <div className="post">
      <div className="post__header">
        <Avatar className="post__avatar" alt="prayga" src="" />
        <h3>{username}</h3>
      </div>
      {/* Header -> Avatar and username */}

      <img className="post__image" src={imageUrl} alt="lokey image" />

      <h4 className="post__text">
        <strong>{username}</strong>: {caption}
      </h4>
      {/* ==============all comments============= */}
      <div className="post__comments">
        {comments.map((comment) => (
          <p>
            <b>{comment.username}</b>
            {comment.text}
          </p>
        ))}
      </div>

      {/* ==========comments input feild========= */}
      {user && (
        <form className="post__commentBox">
          <input
            className="post__input"
            type="text"
            placeholder="Add comment"
            value="comment"
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            className="post__button"
            disabled={!comment}
            type="submit"
            onClick={postComment}
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
}

export default Post;
