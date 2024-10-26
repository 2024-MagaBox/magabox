import { ChangeEvent, useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { ArrowBubble } from "../../../stlye/ArrowBuddle";

const CommentWrite = () => {
    const loginId = localStorage.getItem('login-id')||null;
    const [userid, setUserid] = useState(loginId);
    const [bubble, setBubble] = useState(false);
    const [comments, setComments] = useState('');

    const handleClick = () => {
        if(!userid){
            setBubble(!bubble);
        } else {
            if (!comments){
                alert("글을 작성하십시오.")
            }
        }
    }

    const handleComment = (e:ChangeEvent<HTMLTextAreaElement>) => {
        setComments(e.target.value);
    }

    return <div className="w-full h-40 flex">
        <div className="w-1/6">
            <div className="w-full h-3/4 flex justify-center items-center">
                <img className="h-24" src="/img/basic-profile.webp"/>
            </div>
            <div className="h-1/4 align-middle text-center">
                {userid ? userid : 'test'}
            </div>
        </div>
        <div className="w-5/6 h-full border border-gray rounded-md flex">
            <div className="w-5/6 h-full  flex justify-center items-center">
                <div className={`w-5/6 h-5/6 flex justify-center items-center ${userid ? 'hidden' : 'block'}`} > 재미있게 보셨나요? 영화의 어떤 점이 좋았는지 이야기해주세요.</div>
                <textarea className={`w-5/6 h-5/6 border ${userid ? 'block' : 'hidden'}`} onChange={handleComment}/>
            </div>
            <div 
                className="w-1/6 h-full flex justify-center items-center cursor-pointer"
                onClick={handleClick}    
            >
                <FaPencilAlt style={{margin:"10px"}}/>관람평쓰기
                <div className={`absolute top-[530px] left-[1130px] ${bubble ? 'block' : 'hidden'}`}>
                    <ArrowBubble>
                    <span className="text-base">로그인이 필요한 서비스입니다.</span><br/><span className="text-sm text-red">로그인바로가기</span>
                    </ArrowBubble>
                </div>
            </div>
        </div>
        {/* <div className="border border-black absolute top-[600px] left-[1130px] w-64 h-16 "><span className="text-base">로그인이 필요한 서비스입니다.</span><br/><span className="text-sm text-red">로그인바로가기</span></div> */}
    </div>
}

export default CommentWrite;