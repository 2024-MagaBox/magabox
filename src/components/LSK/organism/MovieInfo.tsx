import axios from "axios";
import { useEffect, useState } from "react";
import CommentWrite from "../molecules/CommentWrite";
import CommentList from "../molecules/CommentList";

type propsType = {
    movieID: number,
}
type movieApi = {
    movieNM: string,
    movieIMG: string,
    movieCONTENT: string,
}

const MovieInfo = ({movieID}:propsType) => {
        const [movieAPI, setMovieAPI] = useState<movieApi>();
        const [barmode, setBarmode] = useState(false);
    
        useEffect(()=>{
            getMovieApi();
        },[])

        const handleScroll = () => {
            if (window.scrollY >= 400){
                setBarmode(true);
            } else {
                setBarmode(false);
            }
        };
    
        useEffect(() => {
            window.addEventListener('scroll', handleScroll);
    
            // 컴포넌트 언마운트 시 이벤트 리스너 제거
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, []);
    
        const getMovieApi = async () => {
            try{
                const result = await axios.get(`http://localhost:8080/api/movie/${movieID}`);
                
                setMovieAPI({
                    movieNM      : result.data.moviesNAME,
                    movieIMG     : result.data.moviesIMGURL,
                    movieCONTENT : result.data.contents.replace(/\n/g, '<br>'),
            })
            } catch(e) {
                console.log(e);
            }  
        }
        return <div>
            <div className="flex justify-center items-center w-full h-96 bg-black">
                <div className={`flex justify-items-center w-[1000px] h-80 ${barmode? 'hidden' : 'block'}`}>
                    <div className="text-white w-2/3">
                        <div className="my-10 ml-4 text-xl font-bold">{movieAPI?.movieNM}</div>
                        <div className="ml-4" dangerouslySetInnerHTML={{ __html: movieAPI?.movieCONTENT || '' }}></div>
                    </div>
                    <div className="w-1/3 flex justify-center items-center"><img className="w-60 h-80" src={movieAPI?.movieIMG} alt={movieAPI?.movieNM}/></div>
                </div>
            </div>
            <div className={`fixed top-0 w-full h-20 bg-black text-white flex items-center ${barmode? 'block' : 'hidden'}`}>
                {movieAPI?.movieNM}
            </div>
            <div className="flex justify-center items-center w-full mt-8">
                <div className="w-[1000px] h-[1000px]" >
                    <div className="font-bold text-subColor">
                        <div className="text-lg my-6">{movieAPI?.movieNM}의 감상평을 남겨주세요.</div>
                    </div>
                    <div>
                        <CommentWrite />
                    </div>
                    <div className="my-5">
                        <CommentList />
                    </div>
                </div>
            </div>
         </div>   
}

export default MovieInfo;