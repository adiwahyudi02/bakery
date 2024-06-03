import { Order } from "@/types/order";
import { createContext, ReactNode, useContext, useState } from "react";

interface OrdersContextType {
  orders: Order[];
  createOrder: (data: Order) => void;
}

interface OrdersProviderPropsType {
  children: ReactNode;
}

const useOrdersValue = (): OrdersContextType => {
  const [orders, setOrders] = useState<Order[]>([]);

  const createOrder = (data: Order) => {
    setOrders((prev) => [...prev, data]);

    alert("Pesanan berhasil dibuat");
  };

  return {
    orders,
    createOrder,
  };
};

const OrdersContext = createContext<OrdersContextType>(null!);

const OrdersProvider = ({ children }: OrdersProviderPropsType) => {
  const value = useOrdersValue();

  return (
    <OrdersContext.Provider value={value}>{children}</OrdersContext.Provider>
  );
};

const useOrdersCtx = () => {
  const context = useContext(OrdersContext);
  if (context === undefined) {
    throw new Error("useOrdersCtx must be used within a OrdersProvider");
  }

  return context;
};

export { OrdersProvider, useOrdersCtx };
