import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [register, setRegister] = useState(false);
  const navigate = useNavigate();

  useEffect(()=>{
    if(register){
      navigate('/register')
    }
    else{
      navigate('/login')
    }

  },[register, navigate]);

  
  return (
    <div style={{
      display: "flex",
      backgroundColor: "whitesmoke", 
      width: "100%",
      height: "100vh",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
      margin: "0",
      padding: "0",
      boxSizing: "border-box"
    }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        width: "50rem",
        height:"40rem",
        padding: "1rem",
        borderRadius: "10px",
        boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <h4 style={{
          color: "black", 
          fontFamily: "Arial, sans-serif",
          fontSize: "36px",
          marginBottom: "2rem"
        }}>
          {register? `Sign up`:`Sign in`}
        </h4>
        {
          !register && <p style={{
          color:"#333",
          fontSize:"18px",
          marginBottom:"2rem"
        }}>Welcome back! Please log in to your account.</p>
        }
        
        <form style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center"
        }}>

        {
          register && <input type="text" placeholder="User Name" style={
            {
               width: "80%",
              padding: "0.5rem",
              margin: "0.5rem 0",
              fontSize: "16px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              backgroundColor:"white"
            }
        }/>
        }
          <input
            type="email"
            placeholder="Email"
            required={true}
            style={{
              width: "80%",
              padding: "0.5rem",
              margin: "0.5rem 0",
              fontSize: "16px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              backgroundColor:"white"
            }}
          />
          <input
            type="password"
            placeholder="Password"
            required={true}
            style={{
              width: "80%",
              padding: "0.5rem",
              margin: "0.5rem 0",
              fontSize: "16px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              backgroundColor:"white"
            }}
          />
          <button
            type="submit"
            style={{
              width: "80%",
              padding: "0.7rem",
              margin: "2rem 0",
              fontSize: "18px",
              color: "white",
              backgroundColor: "#013220", 
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "background-color 0.3s ease"
            }}
            onMouseOver={(e) => e.target.style.backgroundColor ="#90EE90"}
            onMouseOut={(e) => e.target.style.backgroundColor = "#013220"}
          >
            {register? `Sign up`:`Sign in`}
          </button>
        </form>
        {
          !register && <p style={{
          fontSize:"18px"
        }}>
          New to Travel Easy ? 
          &nbsp;
          <span
              onClick={()=>setRegister(true)}
              style={{
                color: "blue",
                cursor: "pointer",
                textDecoration: "none",
                fontSize: "18px",
              }}
            >
              Sign up
            </span>
        </p>
        }
        
      </div>
    </div>
  );
}
