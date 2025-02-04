import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { Container, Typography, Button, Paper } from "@mui/material";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={3}
        sx={{ padding: 4, marginTop: 8, textAlign: "center" }}
      >
        <Typography variant="h5">Welcome, {user?.email}</Typography>
        <Button
          onClick={() => {
            logout();
            navigate("/");
          }}
          variant="contained"
          color="secondary"
          sx={{ marginTop: 2 }}
        >
          Logout
        </Button>
      </Paper>
    </Container>
  );
};

export default Dashboard;
