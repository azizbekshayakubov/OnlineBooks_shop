import AuthContainer from "../../components/template/AuthContainer";
import coverImg from "../../assets/images/register-cover-img.png";
import ActionLink from "../../components/ui/ActionLink";
import Form from "../../components/template/Form";
import Textinput from "../../components/ui/Textinput";
import Button from "../../components/ui/Button";
import useAuth from "../../utils/hooks/useAuth";
import getFormValues from "../../utils/getFormValues";

import toast, { Toaster } from "react-hot-toast";

// import HttpClient from "../../services/HttpsClient";
// import { API_ENDPOINTS } from "../../services/ApiEndpoints";
// import { useEffect } from "react";
// import { exampleGet } from "../../services/ExampleService";

export default function Regiter() {
  const { signUp } = useAuth();
  const handleSubmit = async () => {
    const values = getFormValues("register-form");
    const resp = await signUp(values);
    !resp.success && toast.error(resp.message);


  };

  // const getUsers = async () => {
  //   await exampleGet()
  //     .then((resp) => console.log(resp))
  //     .catch((err) => console.log(err));
  // };
  // useEffect(() => {
  //   getUsers();
  // }, []);
  return (
    <AuthContainer img={coverImg}>
      <h2 className="auth-title">Ro`yxatdan o`tish</h2>
      <p className="auth-desc">
        Sizning hisobingiz bormi? <ActionLink path="/login"> Kirish</ActionLink>
      </p>
      <Form className="auth-form-control register-form" onSubmit={handleSubmit}>
        <Textinput name="firet_name" placeholder="Ismingiz" />
        <Textinput name="last_name" placeholder="Familyangiz" />
        <Textinput name="phone_number" placeholder="Telefon raqam" />
        <Textinput name="email" placeholder="Email" />
        <Textinput name="password" placeholder="Parol" />
        <Button type="submit">Keyingi qadam</Button>
      </Form>

      <Toaster position="top-center" reve />
    </AuthContainer>
  );
}
