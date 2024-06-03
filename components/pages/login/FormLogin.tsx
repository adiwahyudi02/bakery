import InputBox from "@/components/commons/form/InputBox";
import { Controller, useForm } from "react-hook-form";
import { User } from "@/types/user";
import { useLoginCtx } from "@/contexts/loginContext";

const FormLogin = () => {
  const { login } = useLoginCtx();
  const { control, handleSubmit } = useForm<User>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLoginOrder = (data: User) => {
    login(data);
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-6">Login.</h2>
      <form onSubmit={handleSubmit((data) => handleLoginOrder(data))}>
        <Controller
          control={control}
          name="email"
          rules={{ required: "Email harus diisi" }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <InputBox
              type="text"
              label="Email"
              value={value}
              onChange={onChange}
              isRequired
              error={error?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          rules={{ required: "Password harus diisi" }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <div>
              <InputBox
                type="password"
                label="Password"
                value={value}
                onChange={onChange}
                isRequired
                error={error?.message}
              />
            </div>
          )}
        />
        <div className="flex justify-end mt-8">
          <button
            type="submit"
            className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormLogin;
