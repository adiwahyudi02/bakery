import Card from "@/components/commons/Card";
import { sourceOrderType } from "@/constants/sourceOrder";
import { useOrdersCtx } from "@/contexts/ordersContext";

const StatisticOrders = () => {
  const { orders } = useOrdersCtx();

  const calculateStatistics = (sourceOrderType: string) => {
    return orders.filter((order) => order.source === sourceOrderType).length;
  };

  const statistics = [
    {
      title: "WhatsApp",
      value: calculateStatistics(sourceOrderType.WHATSAPP),
    },
    {
      title: "Call",
      value: calculateStatistics(sourceOrderType.CALL),
    },
    {
      title: "Email",
      value: calculateStatistics(sourceOrderType.EMAIL),
    },
  ];

  return (
    <div>
      <h2 className="font-bold my-4">Statistik Pesanan</h2>
      <div className="flex flex-wrap gap-4">
        {statistics.map((stat) => (
          <Card
            key={stat.title}
            title={stat.title}
            additionalClass="w-full sm:w-48"
          >
            <p className="font-bold">{stat.value}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default StatisticOrders;
