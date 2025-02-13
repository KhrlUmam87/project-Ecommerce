import { Box, Button, TextField, Typography } from "@mui/material"
import { blueGrey } from "@mui/material/colors"
import { useNavigate } from "react-router-dom"
import GoogleIcon from "@mui/icons-material/Google"
import { useState } from "react"

const LoginPage = () => {
  const navigate = useNavigate()
  const toSignUp = () => navigate("/daftar")

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {
    alert(`${email} dan ${password}`)
  }
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: 1000,
          height: 600,
          borderRadius: "5px",
          boxShadow: 4,
          p: 1,
          display: "flex",
        }}
      >
        {/* image */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="/loginIMG.png"
            alt="loginimg"
            style={{
              width: "100%",
              height: "100%",
              alignItems: "center",
              objectFit: "cover",
            }}
          />
        </Box>
        {/* form */}
        <Box
          sx={{
            flex: 1,
            p: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Login
          </Typography>
          <Typography>
            Belum punya akun ?{" "}
            <span
              onClick={toSignUp}
              style={{ cursor: "pointer", color: "primary" }}
            >
              Daftar
            </span>
          </Typography>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              marginTop: "10px",
            }}
            onSubmit={handleLogin}
          >
            <TextField
              label="Email"
              placeholder="Email"
              name="email"
              type="email"
              value={email}
              on
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              label="Password"
              placeholder="Password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <Button variant="contained" color="primary" type="submit">
              Login
            </Button>
            <Typography align="center">Atau login dengan</Typography>
            <Button
              variant="contained"
              color="error"
              startIcon={<GoogleIcon />}
            >
              Google
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  )
}

export default LoginPage
