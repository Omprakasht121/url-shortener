
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../validation/login-schema.js";
import { loginApiCall } from "../api/user-api.js";
import { useNavigate } from "react-router-dom";
export const useLogin = () => {
    const navigate = useNavigate();
    const{register,handleSubmit,formState:{errors}}= useForm({
        resolver: zodResolver(loginSchema),
        defaultValues:{
            email:"tt@gmail.com",
            password:"12345678"
        }
    });
    const doSubmit = async(formData) => {
        console.log('Login form submitted',formData);
        try{
            const response = await loginApiCall(formData);
            console.log('Login api response',response);
            if(response.data.id){
                localStorage.email = response.data.email;
                // alert("Login successful");
                navigate("/dashboard");
            }
            else{
                alert("Login failed");
            }
        }
        catch(error){
            alert("Login failed");
            console.log('Login api error',error);
        }
    }
    return {doSubmit,register,handleSubmit,errors};
}