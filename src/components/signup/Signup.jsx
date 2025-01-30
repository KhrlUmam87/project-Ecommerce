import { Box, TextField, Typography, Button } from "@mui/material"
import GoogleIcon from "@mui/icons-material/Google"

const Signup = () => {
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
          height: 600,
          width: 1000,
          display: "flex",
          borderRadius: "5px",
          boxShadow: 4,
        }}
      >
        <Box sx={{ flex: 1, p: 4 }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png"
            alt="daftar"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>

        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            p: 4,
            gap: 2,
          }}
        >
          <Typography variant="h6">Daftar</Typography>
          <Typography variant="body2">
            Kmai menjaga data abda, NO Handphone di gunakan untuk mengkonfirmasi
            pengiriman
          </Typography>

          <form
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <TextField
              fullWidth
              placeholder="Nama"
              label="Nama"
              name="name"
              type="text"
              required
            />
            <TextField
              fullWidth
              placeholder="Password"
              label="Password"
              name="Pasword"
              type="text"
              required
            />
            <TextField
              fullWidth
              placeholder="No Hp"
              label="No Hp"
              name="phone"
              e
              type="text"
              required
            />
            <TextField
              fullWidth
              placeholder="Nama"
              label="Nama"
              name="name"
              type="text"
              required
            />

            <Button variant="contained" color="success">
              Daftar
            </Button>
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

export default Signup
