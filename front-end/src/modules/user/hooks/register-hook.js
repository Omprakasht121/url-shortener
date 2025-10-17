import {useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../validation/register-schema.js";
import { registerApiCall } from "../api/user-api.js";
import { useNavigate } from "react-router-dom";

export const useRegister = () => {
    const navigate = useNavigate();
    const{register, handleSubmit, formState: {errors},reset} = useForm({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            name:"",
            email:"",
            password:""
        }
    }
    );
    const doSubmit = async(formData) => {
        console.log('Register form data', formData);
        try{
        const response =  await registerApiCall(formData);
        console.log('Register api response', response);
        if(response.data.id){
            alert("Registration successful");
            navigate("/login");
        }
        else{
            alert("Registration failed");
        }
        }
        catch(error){
            alert("Registration failed");
            console.log('Register api error', error);
        }
        
    }
    return {doSubmit,register,handleSubmit,errors,reset};
}