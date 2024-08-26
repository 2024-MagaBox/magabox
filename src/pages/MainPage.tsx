import MovieList from "../components/LSK/organism/MovieList";

const MainPage = () => {
    return <div className="flex justify-center">
    <div>
        <div className="flex relative h-10">
            <div className="w-full text-center mb-5 text-base"><span className="p-2 border-b-2 border-gray-500">박스오피스</span></div>
            <div className="absolute right-0 text-sm">더보기 +</div>
        </div>
        <MovieList />
    </div>
</div>
}

export default MainPage;
