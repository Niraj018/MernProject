import React from "react";
import styles from "./auth.module.scss";
import { AiFillAccountBook, AiOutlineUserAdd } from "react-icons/ai";
import Card from "../../components/card/Card";
import { Link } from "react-router-dom";
import { toast } from "react-toastify/dist/types";
import { useState } from "react";
const initialState = {
  name:"",
  email:"",
  password: "",
  cPassword : "",
}

const Register = () => {
    const [isLoading, setisLoading] = useState(false)
    const [formData, setformData] = useState(initialState)
    const{name, email , password , cPassword} = formData

    const handleChange = (e) => {
      const {name, value} = e.target;
      setformData({ ...formData,[name]:value})
    };

    const register = (e) =>{
      e.preventDefault();

      if(!name || !email || !password){
        return toast.error("Input Fields Cannot Be Empty");
      }

      if(password !== cPassword){
        return toast.error("Passwords Don't Match");
      }
    };

  return (
    <div className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <div className="--flex-center">
            <AiOutlineUserAdd size={35} color="#999" />
          </div>
          <h2>Register</h2>

          <form onSubmit={register}>
            <input type="text" placeholder="Full Name" required name="name" />
            <input
              type="name"
              value={name} 
              onChange={handleChange}
              placeholder="Enter your Name"
              required
              name="name"
            />
            <input type="email" placeholder="Enter Your Email" required name="email" />
            <input
              type="email"
              placeholder="Enter your Name"
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
              Login
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
