import { Box } from "@mui/system"
import { Fragment } from "react"
import Appbar from "../../components/appbar/Appbar"
import { Button, TextField } from "@mui/material"

const Profile = () => {
  return (
    <Fragment>
      <Appbar />
      <Box
        sx={{
          height: "calc(100vh - 70px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            height: 700,
            width: 800,
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Background */}
          <Box
            sx={{
              height: "30%",
              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src="https://st2.depositphotos.com/2124221/45766/i/450/depositphotos_457661446-stock-illustration-abstrack-colour-background-can-use.jpg"
              alt="background"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                height: 150,
                width: 150,
                top: 0,
                bottom: 0,
                margin: "auto",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "2px solid white",
                overflow: "hidden",
              }}
            >
              
              <img
                src="https://imageio.forbes.com/specials-images/imageserve/645c9f5b9a8c05b67fe63665/Mamadou-Mbacke-Fall-will-join-FC-Barcelona-permanently-/960x0.jpg?format=jpg&width=960"
                alt="profile"
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            </Box>
          </Box>

          {/* detail */}
          <Box
            sx={{
              height: "65%",
              p: 2,
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <TextField fullWidth label="Nama Lengkap" sx={{ mb: 2 }} />
            <TextField fullWidth label="Email" sx={{ mb: 2 }} />
            <TextField fullWidth label="No Hp" sx={{ mb: 2 }} />
            <TextField fullWidth label="Password Lama" sx={{ mb: 2 }} />
            <TextField fullWidth label="Password Baru" sx={{ mb: 2 }} />
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                gap: 2,
                width: "100%",
              }}
            >
              <Button variant="outlined" color="secondary">
                Update Password
              </Button>
              <Button variant="outlined" color="error">
                Update Profile
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Fragment>
  )
}

export default Profile
