import { useState } from "react";
import { signIn, signInWithGoogle } from "./authService";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Typography, Paper } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 8 }}>
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Login
          </Button>
          <Button
            startIcon={<GoogleIcon />}
            onClick={() =>
              signInWithGoogle().then(() => navigate("/dashboard"))
            }
            variant="outlined"
            color="secondary"
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Login with Google
          </Button>
          <Typography variant="body2" sx={{ mt: 2 }}>
            New User?
          </Typography>
          <Button
            variant="outlined"
            color="secondary"
            fullWidth
            sx={{ mt: 1 }}
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
