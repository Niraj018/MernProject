import React from "react";
import styles from "./auth.module.scss";
import {  AiOutlineUserAdd } from "react-icons/ai";
import Card from "../../components/card/Card";
import { Link,useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import { registerUser, validateEmail } from "../../services/authService";
import { useDispatch } from "react-redux";
import { SET_LOGIN, SET_NAME } from "../../redux/features/auth/authSlice";
import Loader from "../../components/loader/Loader";

const initialState = {
  name:"",
  email:"",
  password: "",
  cPassword : "",
}

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setformData] = useState(initialState)
    const{name, email , password , cPassword} = formData

    const handleChange = (e) => {
      const {name, value} = e.target;
      setformData({ ...formData,[name]:value})
    };

    const register = async(e) =>{
      e.preventDefault();

      if(!name || !email || !password){
        return toast.error("Input Fields Cannot Be Empty");
      }
      if(!validateEmail(email)){
        return toast.error("Please enter a valid email")
      }

      if(password !== cPassword){
        return toast.error("Passwords Must Be Same");
      }
      
      const userData = {
        name, email, password 
      }
      setIsLoading(true)
       try {
        const data = await registerUser(userData)
        // console.log(data);
        await dispatch(SET_LOGIN(true));
        await dispatch(SET_NAME(data.name));
        navigate("/dashboard");
        setIsLoading(false);

       } catch (error) {
        setIsLoading(false);
        console.log(error.message);
       }
    };

  return (
    <div className={`container ${styles.auth}`}>
      {isLoading && <Loader />}
      <Card>
        <div className={styles.form}>
          <div className="--flex-center">
            <AiOutlineUserAdd size={35} color="#999" />
          </div>
          <h2>Register</h2>

          <form onSubmit={register}>
            <input
              type="text"
              value={name} 
              onChange={handleChange}
              placeholder="Full Name"
              required
              name="name"
            />
            <input
              type="email"
              placeholder="Enter your Email"
              required
              name="email"
              value={email} 
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Enter Your Password"
              required
              name="password"
              value={password} 
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              required
              name="cPassword"
              value={cPassword} 
              onChange={handleChange}
            />
            <button type="submit" className="--btn --btn-primary --btn-block">
              Register
            </button>
          </form>
          <Link to="/forgot">Forgot Password</Link>
          <span className={styles.register}>
          <Link to="/">Home</Link>
            <p> &nbsp; Don't have an account? &nbsp;</p>
            <Link to="/login">Login</Link>
          </span>
        </div>
      </Card>
    </div>
  );
};

export default Register;
