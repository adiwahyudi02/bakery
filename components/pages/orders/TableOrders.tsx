import EmptyCell from "@/components/commons/cells/EmptyCell";
import Table, { Column } from "@/components/commons/Table";
import { useOrdersCtx } from "@/contexts/ordersContext";
import { Order } from "@/types/order";

const TableOrders = () => {
  const { orders } = useOrdersCtx();

  const columns: Column<Order>[] = [
    { Header: "Name", accessor: "name" },
    { Header: "Sumber Pemesan", accessor: "source" },
    { Header: "Email", accessor: "email", Cell: EmptyCell },
    { Header: "No HP", accessor: "no" },
    { Header: "Jumlah Roti", accessor: "quantity" },
    { Header: "Keterangan", accessor: "description", Cell: EmptyCell },
  ];

  return (
    <div>
      <h2 className="font-bold my-4">Daftar Pesanan</h2>
      <Table columns={columns} data={orders} />
    </div>
  );
};

export default TableOrders;
