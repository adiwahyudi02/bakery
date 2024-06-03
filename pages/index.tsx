import FormOrdersModal from "@/components/pages/orders/FormOrdersModal";
import StatisticOrders from "@/components/pages/orders/StatisticOrders";
import TableOrders from "@/components/pages/orders/TableOrders";
import { OrdersProvider } from "@/contexts/ordersContext";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <OrdersProvider>
      <div className="p-4">
        <div className="flex justify-end">
          <button
            type="button"
            className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
            onClick={toggleModal}
          >
            Buat Pesanan
          </button>
        </div>

        <FormOrdersModal isOpen={isOpen} onClose={toggleModal} />
        <div className="mb-10">
          <StatisticOrders />
        </div>
        <TableOrders />
      </div>
    </OrdersProvider>
  );
}
