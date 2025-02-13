import Button from '@mui/material/Button';
import { Link, useNavigate } from "react-router-dom";

type MovieType = {
    srcUrl: string,
    alt: string,
    movieno: string,
}

const MovieItem = ({srcUrl, alt, movieno}:MovieType) => {
    return (
        <div key={movieno} className='h-[500px]'>
            <div>
               <Link to={`/movieinfo/${movieno}`}> 
                 <img className="rounded-lg" src={srcUrl} alt={alt} />
               </Link>
            </div>
            <div className='grid justify-items-center m-4'>
               <Link to={`/reservation/${movieno}`}>
                 <Button variant="outlined">예약하기</Button>
               </Link>
            </div>
        </div>
    )
}

export default MovieItem;