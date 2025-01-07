"use client";
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Comment {
  id: string;
  author: string;
  text: string;
}

interface CommentProps {
  postId: string | undefined; // postId can be undefined initially
}

export default function CommentSec({ postId }: CommentProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [editingComment, setEditingComment] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchComments = async () => {
      if (!postId) {
        setIsLoading(false);
        return; // Don't fetch, agar yahan pe koi postId nhi haii to...
      }

      setIsLoading(true);
      setError(null);

      try {
        // Dummy data for demonstration
        setTimeout(() => {
          setComments([
            {
              id: "1",
              author: "Ahad Khanzada",
              text: "Very Informative Ahad! ✔",
            },
          ]);
          setIsLoading(false);
        }, 1000);

      }
       catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message || "Failed to fetch comments.");
          console.error("Error fetching comments:", err);
        } else {
          setError("An unknown error occurred.");
          console.error("Unknown error:", err);
        }
        setIsLoading(false);
      }

      // } catch (err: Error) {
      //   setError(err.message || "Failed to fetch comments.");
      //   setIsLoading(false);
      // }
    };

    fetchComments();
  }, [postId]);

  const handleAddComment = () => {
    if (newComment.trim() && authorName.trim()) {
      const newCommentObj: Comment = {
        id: new Date().toISOString(),
        author: authorName,
        text: newComment,
      };
      setComments([...comments, newCommentObj]);
      setNewComment("");
      setAuthorName("");
    }
  };

  const handleEditingComment = (commentID: string) => {
    const commentToEdit = comments.find((comment) => comment.id === commentID);
    if (commentToEdit) {
      setNewComment(commentToEdit.text);
      setAuthorName(commentToEdit.author);
      setEditingComment(commentID);
    }
  };

  const handleSavedEditedComment = () => {
    if (newComment.trim() && authorName.trim() && editingComment) {
      const updatedComments = comments.map((comment) =>
        comment.id === editingComment
          ? { ...comment, text: newComment, author: authorName }
          : comment
      );
      setComments(updatedComments);
      setNewComment("");
      setAuthorName("");
      setEditingComment(null);
    }
  };

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className=" px-4 mt-24 py-7 rounded-xl">
      <h2 className="text-2xl font-semibold">Comments</h2>

      {isLoading ? (
        <p>Loading comments...</p>
      ) : comments.length > 0 ? (
        <div className="mt-4 space-y-4">
          {comments.map((comment) => (
            <Card key={comment.id}>
              <CardContent className="p-4">
                <div className=" font-semibold">{comment.author}</div>
                <p>{comment.text}</p>
                <Button
                  onClick={() => handleEditingComment(comment.id)}
                  className="mt-2 bg-[#323232] text-[#DDD]"
                >
                  Edit
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <p className="text-gray-400">No comments yet</p>
      )}

      <div className="text-[#DDD] mt-6">
        <Input
          key="authorInput"
          type="text"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          placeholder="Your Name"
          className="bg-[#4d4b4b] text-[#DDD] border-black hover:border-[#DDD] w-full mb-2"
        />

        <Input
          key="commentInput"
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
          className="bg-[#4d4b4b] text-[#DDD] border-black hover:border-[#DDD] w-full mb-2"
        />

        <Button
          onClick={editingComment ? handleSavedEditedComment : handleAddComment}
          className="mt-4"
        >
          {editingComment ? "Save" : "Submit"}
        </Button>
      </div>
    </div>
  );
}
