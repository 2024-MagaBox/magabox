import axios from "axios";
import { useEffect, useState } from "react";

const StoreItem = (props: {
  imgSrc: string;
  title: string;
  subtitle: string;
  price: number;
  isNew: boolean;
  isSoldOut: boolean;
}) => {
  const { imgSrc, title, subtitle, price, isNew, isSoldOut } = props;

  return (
    <div className="relative p-4 bg-white border rounded-lg shadow-md hover:bg-gray">
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

type StorePageType = {
  product_id: number;
  product_name: string;
  product_description: string;
  is_new: number;
  is_sold_out: number;
  url: string;
  price: number;
};

const StorePage = () => {
  const [storePage, setStorePage] = useState<StorePageType[]>([]);
  const [loading, setLoading] = useState<boolean>(true); //로딩 초기

  useEffect(() => {
    getStorePage();
  }, []);

  const getStorePage = async () => {
    try {
      const result = await axios.get<StorePageType[]>(
        "http://localhost:8080/api/productAll"
      );
      setStorePage(result.data);
    } catch (error) {
      console.log("Erro fetching store:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 bg-gray-100 hover:">
      <h1 className="text-3xl font-bold mb-8">스토어</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {loading ? (
          <div>Loading...</div>
        ) : (
          storePage.map((product) => {
            return (
              <StoreItem
                key={product.product_id}
                imgSrc={product.url}
                title={product.product_name}
                subtitle={product.product_description}
                price={product.is_sold_out ? 0 : product.price} // 실제 가격 데이터로 변경
                isNew={product.is_new === 1}
                isSoldOut={product.is_sold_out === 1}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default StorePage;
