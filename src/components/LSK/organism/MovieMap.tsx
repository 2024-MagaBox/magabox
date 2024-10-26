import axios from "axios";
import { useEffect, useState } from "react";
import MovieItem from "../molecules/MoveItem";
import { lineHeight } from "@mui/system";

type MovieType = {
    moviesID: number;
    moviesNAME: string;
    moviesImgurl: string;
    useyn: string;
};

const MovieMap = () => {
    const [movies, setMovies] = useState<MovieType[]>([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState<{ page: number; size: number }>({ page: 0, size: 3 });
    const [total, setTotal] = useState(3);
    const [add, setAdd] = useState(true);

    useEffect(() => {
        getMovieList();
    }, [total]);

    const getMovieList = async () => {
        setLoading(true); // 로딩 시작
        try {
            const result = await axios.get(`http://localhost:8080/api/moviepage?page=${page.page}&size=${page.size}`);
            setMovies(result.data._embedded.findAllDTOList); // 적절한 경로로 설정
            if (total >= result.data.page.totalElements){
                setAdd(false)
            } else {
                setAdd(true)
            }
        } catch (error) {
            console.error("Error fetching movies:", error);
        } finally {
            setLoading(false); // 데이터 로딩 완료 후 false로 설정
        }
    };
    const getaddmovie = () => {
        setTotal(total + 3);
        console.log(total)
        setPage((prev)=>({
            ...prev,
            size: total + 3
        }))
    }
    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className=" w-full flex justify-center my-5">
                    <div>
                        <div className= {`grid h-[${page.size/3 * 500}px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4  my-5`}>
                            {movies.map((movie) => (
                                    <MovieItem  
                                        key={movie.moviesID}
                                        srcUrl={movie.moviesImgurl}
                                        alt={movie.moviesNAME}
                                        movieno={movie.moviesID ? movie.moviesID.toString() : 'Unknown'}
                                    />
                            ))}  
                        </div>
                        <div 
                            className={`w-full h-18 bg-darkgray cursor-pointer  text-center mb-3 ${add? "block" : "hidden"}`} 
                            style={{ lineHeight: '4rem' }} 
                            onClick={getaddmovie}
                        >
                                더보기
                        </div>  
                    </div>
                </div>
            )}
        </div>
    );
};

export default MovieMap;
