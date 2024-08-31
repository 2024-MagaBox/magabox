import { useState } from "react";

type PaymentProps = {
  price: number;
};

export const Payment = ({ price }: PaymentProps) => {
  const [isPayment, setIsPayment] = useState(0);

  return <span>{isPayment * price}</span>;
};
