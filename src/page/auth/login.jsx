import AuthContainer from "../../components/template/AuthContainer";
import coverImg from "../../assets/images/login-cover-img.png";
import ActionLink from "../../components/ui/ActionLink";
import Form from "../../components/template/Form";
import Textinput from "../../components/ui/Textinput";
import Button from "../../components/ui/Button";
import useAuth from "../../utils/hooks/useAuth";

import getFormValues from "../../utils/getFormValues";
import toast, { Toaster } from "react-hot-toast";


export default function Login() {
  const { signIn } = useAuth();
  const handleSubmit = async () => {
    const values = getFormValues("login-form");
    const resp = await signIn(values);
    !resp.success && toast.error(resp.message);

    await signIn();

  };

  return (
    <AuthContainer img={coverImg}>
      <h2 className="auth-title">Kirish</h2>
      <p className="auth-desc">
        Sizning hisobingiz yo’qmi?
        <ActionLink path="/register"> Ro’yxatdan o’tish</ActionLink>
      </p>

      <Form className="auth-form-control login-form" onSubmit={handleSubmit}>
        <Textinput name="email" placeholder="Email" />
        <Textinput name="password" placeholder="Parol" />

        <Button type="submit">Keyingi qadam</Button>
      </Form>
      <Toaster position="top-center" reve />
    </AuthContainer>
  );
}
