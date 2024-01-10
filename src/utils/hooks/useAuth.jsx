import { useDispatch } from "react-redux";
import { API_ENDPOINTS } from "../../services/ApiEndpoints";
import api from "../../services/index";
import { setSignInSuccess } from "../../store/auth/sessionSlice";
import { setUser } from "../../store/auth/userSlice";

export default function useAuth() {
  const dispatch = useDispatch();

  const signUp = async (values) => {
   try {
            const resp = await api.post(API_ENDPOINTS.REGISTER, values)
            dispatch(setSignInSuccess(resp.data.tokens.access))
            dispatch(setUser(resp.data.user))

            return {
                success: true,
                message: ''
            }
        } catch (error) {
            return {
                success: false,
                message: JSON.stringify(error.response.data)
            }
        }
  };
  const signIn = async () => {
    console.log("signIn");
  };
  const signOut = async () => {
    console.log("signOut");
  };

  return { signIn, signUp, signOut };
}
