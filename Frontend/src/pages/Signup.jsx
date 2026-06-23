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

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
  try {

    await api.post("/auth/signup", {
      username,
      email,
      password
    });

    alert("Signup Successful");

    navigate("/");

  } catch (err) {

    console.log(err);

    alert("Signup Failed");

  }
};

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#F8FAFC"
      }}
    >
      <Paper
        elevation={4}
        sx={{
          p: 4,
          width: 350,
          borderRadius: 4
        }}
      >
        <Typography
          variant="h4"
          textAlign="center"
          mb={3}
        >
          Join SocialSphere
        </Typography>

       <TextField
  fullWidth
  label="Username"
  sx={{ mb: 2 }}
  value={username}
  onChange={(e) => setUsername(e.target.value)}
/>

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
  onClick={handleSignup}
>
  Sign Up
</Button>

      </Paper>
    </Box>
  );
}