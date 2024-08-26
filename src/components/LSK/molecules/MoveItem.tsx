import Button from '@mui/material/Button';

type MovieType = {
    srcUrl: string,
    alt: string,
    movieno: string,
}

const MovieItem = ({srcUrl, alt, movieno}:MovieType) => {
    return (
        <div>
            <div>
                <img className="rounded-lg" src={srcUrl} alt={alt} />
            </div>
            <div className='grid justify-items-center m-4'>
               <Button variant="outlined">예약하기</Button>
            </div>
        </div>
    )
}

export default MovieItem;