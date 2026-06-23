import {
  Box,
  Button,
  TextField,
  Typography,
  Paper
} from "@mui/material";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
  try {
    console.log("Sending login request...");

    const res = await api.post("/auth/login", {
      email,
      password,
    });

    console.log("SUCCESS:", res.data);

    localStorage.setItem(
      "username",
      res.data.username
    );

    navigate("/feed");

  } catch (err) {
    console.log("FULL ERROR:", err);

    if (err.response) {
      console.log("STATUS:", err.response.status);
      console.log("DATA:", err.response.data);
    }

    alert("Login Failed");
  }
};

 return (

  <Box
   sx={{
    minHeight:"100vh",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    bgcolor:"#F8FAFC"
   }}
  >

   <Paper
    elevation={4}
    sx={{
      p:4,
      width:350,
      borderRadius:4
    }}
   >

    <Typography
      variant="h4"
      textAlign="center"
      mb={3}
    >
      SocialSphere
    </Typography>

    <TextField
  fullWidth
  label="Email"
  sx={{ mb: 2 }}
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

    <TextField
  fullWidth
  label="Password"
  type="password"
  sx={{ mb: 2 }}
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>

    <Button
      fullWidth
      variant="contained"
      onClick={handleLogin}
    >
      Login
    </Button>

   </Paper>

  </Box>
 );
}