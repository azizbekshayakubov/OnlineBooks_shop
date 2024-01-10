import AuthContainer from "../../components/template/AuthContainer";
import coverImg from "../../assets/images/login-cover-img.png";
import ActionLink from "../../components/ui/ActionLink";
import Form from "../../components/template/Form";
import Textinput from "../../components/ui/Textinput";
import Button from "../../components/ui/Button";
import useAuth from "../../utils/hooks/useAuth";

export default function Login() {
  const { signIn } = useAuth();
  const handleSubmit = async () => {
    await signIn();
  };

  return (
    <AuthContainer img={coverImg}>
      <h2 className="auth-title">Kirish</h2>
      <p className="auth-desc">
        Sizning hisobingiz yo’qmi?
        <ActionLink path="/register"> Ro’yxatdan o’tish</ActionLink>
      </p>
      <Form className="auth-form-control" onSubmit={handleSubmit}>
        <Textinput placeholder="Email" />
        <Textinput placeholder="Parol" />
        <Button type="submit">Keyingi qadam</Button>
      </Form>
    </AuthContainer>
  );
}
