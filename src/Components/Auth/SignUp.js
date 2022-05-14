import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

const SignUp = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email: ", Email);
    console.log("Password: ", Password);
    console.log("First Name: ", FirstName);
    console.log("Last Name: ", LastName);
  };
  return (
    <Stack
      direction="column"
      style={{ padding: "21px", margin: "15px 30px 0 20px" }}
      spacing={3}
    >
      <Typography variant="h4" component="h6" color="primary">
        Sign UP
      </Typography>
      <form onSubmit={handleSubmit}>
        <Stack direction="column" spacing={3}>
          <TextField
            label="First Name"
            variant="standard"
            size="medium"
            required
            sx={{ width: 700 }}
            helperText={
              !FirstName ? "Required" : "Do not share your password with anyone"
            }
            type="text"
            error={!FirstName}
            value={FirstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            label="Last Name"
            variant="standard"
            size="medium"
            required
            sx={{ width: 700 }}
            helperText={
              !LastName ? "Required" : "Do not share your password with anyone"
            }
            type="text"
            error={!LastName}
            value={LastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            label="Email"
            variant="standard"
            size="medium"
            required
            sx={{ width: 700 }}
            helperText={
              !Email ? "Required" : "Do not share your password with anyone"
            }
            type="text"
            error={!Email}
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            variant="standard"
            size="medium"
            required
            sx={{ width: 700 }}
            helperText={
              !Password ? "Required" : "Do not share your password with anyone"
            }
            type="password"
            error={!Password}
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            type="submit"
            sx={{ height: 50, width: 100 }}
            color="secondary"
          >
            Submit
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};

export default SignUp;
