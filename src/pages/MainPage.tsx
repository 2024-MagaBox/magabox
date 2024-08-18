const MainPage = () => {
    return <div className="flex justify-center">
    <div>
        <div className="flex relative mt-20 h-10">
            <div className="w-full text-center mb-5 text-sm"><span className="p-2 border-b-2 border-gray-500">박스오피스</span></div>
            <div className="absolute right-0 text-sm">더보기 +</div>
        </div>
        <div className="flex flex-row gap-4 my-3">
            <img className="rounded-lg" src="https://img.megabox.co.kr/SharedImg/2024/08/16/ZZCwS3lFDKJC1tsaVLHBMApICqyHcjwu_420.jpg" alt="movie" />
            <img className="rounded-lg" src="https://img.megabox.co.kr/SharedImg/2024/08/16/xIZN191YgucQ4B9XhOKEyTtP4RmAmuc5_420.jpg" alt="movie" />
            <img className="rounded-lg" src="https://img.megabox.co.kr/SharedImg/2024/08/01/BUsWispT4T7lkUapLBCGyK17FuX5kKk6_420.jpg" alt="movie" />
            <img className="rounded-lg" src="https://img.megabox.co.kr/SharedImg/2024/07/12/vnc6yDiS1ll8qlhyqSBD9vAqISkyRez3_420.jpg" alt="movie" />
        </div>
    </div>
</div>
}

export default MainPage;