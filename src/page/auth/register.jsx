import AuthContainer from "../../components/template/AuthContainer";
import coverImg from "../../assets/images/register-cover-img.png";
import ActionLink from "../../components/ui/ActionLink";
import Form from "../../components/template/Form";
import Textinput from "../../components/ui/Textinput";
import Button from "../../components/ui/Button";

export default function Regiter() {
  return (
    <AuthContainer img={coverImg}>
      <h2 className="auth-title">Ro`yxatdan o`tish</h2>
      <p className="auth-desc">
        Sizning hisobingiz bormi? <ActionLink path="/login"> Kirish</ActionLink>
        <Form className="auth-form-control">
          <Textinput placeholder="Ismingiz" />
          <Textinput placeholder="Familyangiz" />
          <Textinput placeholder="Telefon raqam" />
          <Textinput placeholder="Email" />
          <Textinput placeholder="Parol" />
          <Button>Keyingi qadam</Button>
        </Form>
      </p>
    </AuthContainer>
  );
}
