import FormLogin from "@/components/pages/login/FormLogin";
import { LoginProvider } from "@/contexts/loginContext";

export default function Login() {
  return (
    <div className="flex justify-center items-center mt-36">
      <div className="max-w-96 flex-1">
        <FormLogin />
      </div>
    </div>
  );
}
