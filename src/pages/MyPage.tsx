const MyPage = () => {
  return (
    <div className="w-screen h-screen p-10">
      <div className="max-w-2xl mx-auto">
        <div className="w-full flex justify-between items-end pb-3 border-black border-b">
          <div className="text-lg font-bold">나의 예매 내역</div>
          <div className="text-sm">더보기 ▷</div>
        </div>

        <div className="w-full h-96 flex justify-center items-center border-black border-b">
          <div>예매 내역이 없습니다.</div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
