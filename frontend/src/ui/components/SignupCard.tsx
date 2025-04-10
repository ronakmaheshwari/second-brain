import { useCallback, useEffect, useState } from "react";
import SignupHeader from "./SignupHeader";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Bounce, toast } from "react-toastify";
import InputBox from "./Inputbox";
import { Backend_Url } from "../../config";

export default function SignupCard({ type }: { type: "signup" | "signin" }) {
  const [username, setUsername] = useState("");  
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const sendSignup = useCallback(async () => {
    try {
      const response = await axios.post(`${Backend_Url}/user/signup`, {
        username,
        password,  
      });

      if (response.status === 200) {
        const jwt = response.data.token;
        localStorage.setItem("token", jwt);
        navigate("/dashboard");

        toast.success("Sign-Up Successful!", {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
          transition: Bounce,
        });
      }
    } catch (error) {
      toast.error("Sign-Up failed! Please try again.", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        transition: Bounce,
      });
    }
  }, [username, password, navigate]); 

  const sendSignin = useCallback(async () => {
    try {
      const response = await axios.post(`${Backend_Url}/user/signin`, {
        username,
        password, 
      });

      if (response.status === 200) {
        const jwt = response.data.token;
        localStorage.setItem("token", jwt);
        navigate("/dashboard");

        toast.success("Sign-In Successful!", {  
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
          transition: Bounce,
        });
      }
    } catch (error) {
      toast.error("Sign-In failed! Please try again.", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        transition: Bounce,
      });
    }
  }, [username, password, navigate]);
  
  useEffect(() => {
    const timeout = setTimeout(async () => {
      try {
        await axios.get(`${Backend_Url}/user/hit`);
      } catch (error) {
        console.error("Error hitting user API:", error);
      }
    }, 10000);
  
    return () => clearTimeout(timeout); 
  }, []);

  return (
    <div className="flex flex-col w-full max-w-md h-auto rounded-lg shadow-xl bg-white p-6 space-y-4">
      <SignupHeader />
      
      <InputBox
        label="Email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="ronak@gmail.com"
      />
      
      <InputBox
        label="Password"
        value={password}  
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Pass@123"
      />
      
      <button
        className="w-full h-10 rounded-md bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition duration-200"
        onClick={type === "signup" ? sendSignup : sendSignin}
      >
        {type === "signup" ? "Create Your Second Brain" : "Login to Second Brain"}
      </button>

      <div className="flex flex-col space-y-2 text-center text-xs text-gray-500">
        <p>
          By signing up, you agree to our{" "}
          <a href="#" className="underline underline-offset-4 hover:text-indigo-500">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="underline underline-offset-4 hover:text-indigo-500">
            Privacy Policy
          </a>.
        </p>
        
        <p>
          {type === "signup" ? "Already have an account? " : "Don't have an account? "}
          <button
            className="font-medium text-indigo-600 hover:text-indigo-700"
            onClick={() => navigate(type === "signup" ? "/signin" : "/signup")}
          >
            {type === "signup" ? "Sign in" : "Sign up"}
          </button>
        </p>
      </div>
    </div>
  );
}
