import React, { useState } from "react";
import Loader from "./Loader";

const Comment = ({ onSubmitComment }) => {
  const [comment, setComment] = useState(""); 
  const [isLoading, setIsLoading] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (comment.trim()) {
      setIsLoading(true); 

      
      setTimeout(() => {
        onSubmitComment(comment); 
        setComment(""); 
        setIsLoading(false); 
      }, 150); 
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 w-full">
      <label htmlFor="comment" className="text-gray-600 font-semibold text-lg mb-10">
        ADD COMMENT
      </label>
      <textarea
        id="comment"
        placeholder="Type ......"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="bg-white w-full mt-5 border border-gray-300 outline-none p-4 rounded-md focus:ring-2 ring-blue-500"
        rows="10"
        disabled={isLoading} 
      ></textarea>
      <button
        type="submit"
        className="mt-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-6 rounded hover:from-purple-600 hover:to-pink-600 transition-all disabled:opacity-50 flex items-center justify-center"
        disabled={isLoading} 
      >
        {isLoading ? <Loader /> : "SUBMIT"} 
      </button>
    </form>
  );
};

export default Comment;
