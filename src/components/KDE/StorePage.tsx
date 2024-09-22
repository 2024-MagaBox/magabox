import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useLoginStore from "../../stores/login";

const StoreItem = (props: {
  imgSrc: string;
  title: string;
  subtitle: string;
  price: string;
  isNew: boolean;
  isSoldOut: boolean;
  onClick: () => void;
}) => {
  const { imgSrc, title, subtitle, price, isNew, isSoldOut, onClick } = props;

  return (
    <div
      className="relative p-4 bg-white border rounded-lg shadow-md hover:bg-gray-200 cursor-pointer"
      onClick={onClick}
    >
      {isNew && (
        <div className="absolute top-0 left-0 px-2 py-1 text-xs font-semibold text-white bg-green-500 rounded-br-lg">
          NEW
        </div>
      )}
      {isSoldOut && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60">
          <span className="text-xl font-bold text-white">SOLD OUT</span>
        </div>
      )}
      <img src={imgSrc} alt={title} className="w-full h-40 object-cover" />
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-gray-500">{subtitle}</p>
      <p className="mt-4 text-xl font-bold text-purple-700">{price} 원</p>
    </div>
  );
};

const StorePage = () => {
  const [selectedItem, setSelectedItem] = useState<any>(null); // 선택된 아이템을 저장하는 상태
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 창 열림 상태
  const { loginId } = useLoginStore(); // 로그인 상태 가져오기
  const navigate = useNavigate(); // 페이지 이동을 위한 hook

  const handleItemClick = (item: any) => {
    setSelectedItem(item); // 클릭한 상품을 저장
    setIsModalOpen(true); // 모달을 열림 상태로 변경
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // 모달을 닫음 상태로 변경
  };

  // 로그인 상태를 확인하고 로그인되지 않았다면 로그인 페이지로 리다이렉트
  const handleGift = () => {
    if (!loginId) {
      navigate("/login");
    } else {
      alert(`${selectedItem.title}을(를) 선물합니다!`);
    }
  };

  const handlePurchase = () => {
    if (!loginId) {
      navigate("/login");
    } else {
      alert(`${selectedItem.title}을(를) 구매합니다!`);
    }
  };

  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">스토어</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <StoreItem
          imgSrc="https://img.megabox.co.kr/SharedImg/store/2024/03/29/vMsr1afs6h28dyrsnpTb5UHoL05hxISS_280.png"
          title="황태스낵"
          subtitle="황태스낵 1"
          price="5,900"
          isNew={true}
          isSoldOut={false}
          onClick={() =>
            handleItemClick({
              imgSrc:
                "https://img.megabox.co.kr/SharedImg/store/2024/03/29/vMsr1afs6h28dyrsnpTb5UHoL05hxISS_280.png",
              title: "황태스낵",
              subtitle: "황태스낵 1",
              price: "5,900",
            })
          }
        />
        <StoreItem
          imgSrc="https://img.megabox.co.kr/SharedImg/store/2024/03/29/vMsr1afs6h28dyrsnpTb5UHoL05hxISS_280.png"
          title="(특가) 황태스낵"
          subtitle="황태스낵 1"
          price="2,900"
          isNew={false}
          isSoldOut={true}
          onClick={() =>
            handleItemClick({
              imgSrc:
                "https://img.megabox.co.kr/SharedImg/store/2024/03/29/vMsr1afs6h28dyrsnpTb5UHoL05hxISS_280.png",
              title: "(특가) 황태스낵",
              subtitle: "황태스낵 1",
              price: "2,900",
            })
          }
        />
        <StoreItem
          imgSrc="   https://img.megabox.co.kr/SharedImg/store/2023/12/21/xgNuyruo8l24C6EspYo67ZLM48ybqFZN_280.png"
          title="오징어튀김 세트"
          subtitle="오징어튀김1 + 탄산음료(L) 1"
          price="8,900"
          isNew={true}
          isSoldOut={false}
          onClick={() =>
            handleItemClick({
              imgSrc:
                "   https://img.megabox.co.kr/SharedImg/store/2023/12/21/xgNuyruo8l24C6EspYo67ZLM48ybqFZN_280.png",
              title: "오징어튀김 세트",
              subtitle: "오징어튀김1 + 탄산음료(L) 1",
              price: "8,900",
            })
          }
        />
        <StoreItem
          imgSrc="   https://img.megabox.co.kr/SharedImg/store/2023/12/21/K99yJLfXxchZxW3DnC67i4Aj2gVlkdOG_280.png"
          title="오징어튀김"
          subtitle="오징어튀김1"
          price="6,900"
          isNew={false}
          isSoldOut={false}
          onClick={() =>
            handleItemClick({
              imgSrc:
                "   https://img.megabox.co.kr/SharedImg/store/2023/12/21/K99yJLfXxchZxW3DnC67i4Aj2gVlkdOG_280.png",
              title: "오징어튀김",
              subtitle: "오징어튀김1",
              price: "6,900",
            })
          }
        />
        <StoreItem
          imgSrc="   https://img.megabox.co.kr/SharedImg/store/2022/03/07/qB1IVqlOLCV7hOOEAJp4J9iG3J5oVWjv_720.png"
          title="러브콤보"
          subtitle="팝콘(L) 1 + 탄산음료(R) 2"
          price="9,900"
          isNew={false}
          isSoldOut={false}
          onClick={() =>
            handleItemClick({
              imgSrc:
                "   https://img.megabox.co.kr/SharedImg/store/2022/03/07/qB1IVqlOLCV7hOOEAJp4J9iG3J5oVWjv_720.png",
              title: "러브콤보",
              subtitle: "팝콘(L) 1 + 탄산음료(R) 2",
              price: "9,900",
            })
          }
        />
        <StoreItem
          imgSrc="   https://img.megabox.co.kr/SharedImg/store/2022/03/07/qB1IVqlOLCV7hOOEAJp4J9iG3J5oVWjv_720.png"
          title="더블콤보"
          subtitle="팝콘(R) 2 + 탄산음료(R) 2"
          price="12,900"
          isNew={false}
          isSoldOut={false}
          onClick={() =>
            handleItemClick({
              imgSrc:
                "   https://img.megabox.co.kr/SharedImg/store/2022/03/07/qB1IVqlOLCV7hOOEAJp4J9iG3J5oVWjv_720.png",
              title: "더블콤보",
              subtitle: "팝콘(R) 2 + 탄산음료(R) 2",
              price: "12,900",
            })
          }
        />

        {/* 다른 StoreItem들 추가 */}
      </div>

      {/* 모달 창 */}
      {isModalOpen && selectedItem && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <img
              src={selectedItem.imgSrc}
              alt={selectedItem.title}
              className="w-full h-40 object-cover"
            />
            <h2 className="mt-4 text-2xl font-bold">{selectedItem.title}</h2>
            <p className="mt-2 text-sm text-gray-500">
              {selectedItem.subtitle}
            </p>
            <p className="mt-4 text-xl font-bold text-purple-700">
              {selectedItem.price} 원
            </p>

            {/* 선물하기, 구매하기 버튼 */}
            <div className="flex justify-between mt-6">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                onClick={handleGift}
              >
                선물하기
              </button>
              <button
                className="px-4 py-2 bg-green-500 text-white rounded-lg"
                onClick={handlePurchase}
              >
                구매하기
              </button>
            </div>

            <button
              className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg w-full"
              onClick={handleCloseModal}
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StorePage;
