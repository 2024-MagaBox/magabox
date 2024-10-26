import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

type commentType = {
    commentId: number,
    username: string,
    writeDt:string,
    comments: string,
}

const CommentList = () => {
    const [comments, setComments] = useState<commentType[]>([]);
    const {id} = useParams();

    useEffect(()=>{
        getComment();
    },[])
   
    const getComment = async () => {
        try {
            const result = await axios.get(`http://localhost:8080/api/comment/${id}`);
            setComments(result.data.map((comment: any) => ({
                commentId: comment.commentId,
                username: comment.username,
                writeDt: comment.writeDt,
                comments: comment.comments,
            })));
        } catch (error) {
            console.error("Error fetching comments:", error);
        }
    };

    return (
        <div className="grid grid-cols-1 gap-5">
            {comments.length > 0 ? 
                comments.map(comment => (
                    <div key={comment.commentId} className="flex" >
                        <div className="w-1/6">
                                <h4>{comment.username}</h4>
                                <p>{comment.writeDt}</p>
                            </div>
                            <div className="w-5/6 flex items-center">
                                <p>{comment.comments}</p>
                            </div>
                    </div>
                ))
            : "감상평을 달아주세요."
            }
        </div>
    )
}

export default CommentList;