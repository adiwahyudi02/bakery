import InputBox from "@/components/commons/form/InputBox";
import Modal from "@/components/commons/Modal";
import SelectOptionBox from "@/components/commons/form/SelectOptionBox";
import TextAreaBox from "@/components/commons/form/TextAreaBox";
import { sourceOrderOptions } from "@/constants/sourceOrder";
import { useOrdersCtx } from "@/contexts/ordersContext";
import { Order } from "@/types/order";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";

interface FormOrdersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FormOrdersModal = ({ isOpen, onClose }: FormOrdersModalProps) => {
  const { createOrder } = useOrdersCtx();
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm<Order>({
    defaultValues: {
      source: "",
      name: "",
      no: "",
      email: "",
      quantity: "",
      description: "",
    },
  });

  const handleCreateOrder = (data: Order) => {
    createOrder(data);
    onClose();
  };

  // reset after submit the form
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} additionalClass="">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-6">Buat Pesanan</h2>
        <form onSubmit={handleSubmit((data) => handleCreateOrder(data))}>
          <Controller
            control={control}
            name="source"
            rules={{ required: "Sumber pesanan harus diisi" }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <SelectOptionBox
                label="Sumber Pesanan"
                value={value}
                onChange={onChange}
                options={sourceOrderOptions}
                isRequired
                error={error?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="name"
            rules={{ required: "Nama harus diisi" }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <div>
                <InputBox
                  type="text"
                  label="Nama"
                  value={value}
                  onChange={onChange}
                  isRequired
                  error={error?.message}
                />
              </div>
            )}
          />
          <Controller
            control={control}
            name="no"
            rules={{ required: "Nomor HP harus diisi" }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <InputBox
                type="tel"
                label="Nomor HP"
                value={value}
                onChange={onChange}
                isRequired
                error={error?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <InputBox
                type="text"
                label="Email"
                value={value}
                onChange={onChange}
              />
            )}
          />
          <Controller
            control={control}
            name="quantity"
            rules={{ required: "Jumlah Roti harus diisi" }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <InputBox
                type="number"
                label="Jumlah Roti"
                value={value}
                onChange={onChange}
                isRequired
                error={error?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="description"
            render={({ field: { onChange, value = "" } }) => (
              <TextAreaBox
                label="Keterangan"
                value={value}
                onChange={onChange}
              />
            )}
          />

          <div className="flex justify-between mt-8">
            <button
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              onClick={() => reset({})}
            >
              Reset
            </button>
            <button
              type="submit"
              className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default FormOrdersModal;
