import MovieItem from "../molecules/MoveItem"

const MovieList = () => {
    return (
        <div className="flex flex-row gap-4 my-3">
            <MovieItem srcUrl="https://img.megabox.co.kr/SharedImg/2024/08/16/ZZCwS3lFDKJC1tsaVLHBMApICqyHcjwu_420.jpg" alt="" movieno="1"/>
            <MovieItem srcUrl="https://img.megabox.co.kr/SharedImg/2024/08/16/xIZN191YgucQ4B9XhOKEyTtP4RmAmuc5_420.jpg" alt="" movieno="2"/>
            <MovieItem srcUrl="https://img.megabox.co.kr/SharedImg/2024/08/01/BUsWispT4T7lkUapLBCGyK17FuX5kKk6_420.jpg" alt="" movieno="3"/>
            <MovieItem srcUrl="https://img.megabox.co.kr/SharedImg/2024/07/12/vnc6yDiS1ll8qlhyqSBD9vAqISkyRez3_420.jpg" alt="" movieno="4"/>
        </div>
    )
}

export default MovieList;