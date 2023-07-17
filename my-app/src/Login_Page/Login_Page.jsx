import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";
import { Alert, Button, TextField } from "../MyComponents";
import { SearchPage } from "../Search_Page";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LoginPage = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorStatus, setErrorStatus] = useState(false);
  const [login, setLogin] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const savedEmail = "ayushbhagat@caldera.com";
    const savedPassword = "caldera";
    if (email === savedEmail && password === savedPassword) {
      console.log("Correct");
      setLogin(true);
    } else {
      setErrorStatus(true);
      setEmail("");
      setPassword("");
    }
  };
  const handleLogout = () => {
    setLogin(false);
  };
  const handleSearch = (searchInput) => {
    console.log("search term", searchInput);
  };

  return (
    <Container component="main" maxWidth="xs">
      {login ? (
        <SearchPage onLogout={handleLogout} onSearch={handleSearch} />
      ) : (
        <div className={classes.root}>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={handleEmailChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={handlePasswordChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              margin="theme.spacing(3, 0, 2)"
            >
              Sign In
            </Button>
          </form>
          {errorStatus && (
            <Alert severity="error" onClose={() => setErrorStatus(false)}>
              Invalid Email or Password
            </Alert>
          )}
        </div>
      )}
    </Container>
  );
};

export default LoginPage;
