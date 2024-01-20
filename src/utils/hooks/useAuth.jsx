import { useDispatch } from "react-redux";
import { API_ENDPOINTS } from "../../services/ApiEndpoints";
import api from "../../services/index";
import { setSignInSuccess } from "../../store/auth/sessionSlice";
import { setUser } from "../../store/auth/userSlice";

export default function useAuth() {
  const dispatch = useDispatch();

  const signUp = async (values) => {

    try {
      const resp = await api.post(API_ENDPOINTS.REGISTER, values);
      dispatch(setSignInSuccess(resp.tokens.access));
      dispatch(setUser(resp.data.user));

      //

      return {
        success: true,
        message: "",
      };
    } catch (error) {
      return {
        success: false,
        message: JSON.stringify(error.response),
      };
    }
  };
  const signIn = async (values) => {
    try {
      const resp = await api.post(API_ENDPOINTS.LOGIN, values);
      dispatch(setSignInSuccess(resp.tokens.access));
      dispatch(
        setUser(
          resp.data?.user || {
            first_name: "user",
            last_name: "last name",
            phone_number: null,
            email: null,
          }
        )
      );
      return {
        success: true,
        message: "",
      };
    } catch (error) {
      return {
        success: false,
        message: JSON.stringify(error.response.data),
      };
    }


  };
  const signOut = async () => {
    console.log("signOut");
  };

  return { signIn, signUp, signOut };
}
