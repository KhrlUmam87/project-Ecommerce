import { Box, Button, IconButton, Select, Typography } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import SelectOptions from "./SelectOptions"
import { useEffect, useState } from "react"

const Order = () => {
  const [province, setProvince] = useState("")
  const [city, setCity] = useState("")
  const [courier, setCourier] = useState("")
  const [service, setService] = useState("")
  const [address, setAddress] = useState("")

  // useEffect(() => {
  //   console.log(province, city, courier, service, address)
  // }, [province, city, courier, service, address])

  return (
    <Box
      sx={{
        width: "80%",
        borderRadius: "10px",
        p: "15px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        height: "650px",
        boxShadow: 4,
        backgroundColor: "",
      }}
    >
      <Typography variant="h6" fontWeight="bold">
        Atur Jumlah
      </Typography>

      <Box sx={{ display: "flex", gap: "15px", p: "5px" }}>
        <Box sx={{ display: "flex", gap: "15px", p: "5px" }}>
          <IconButton>
            <RemoveIcon></RemoveIcon>
          </IconButton>
          <Box
            sx={{
              width: 50,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            1
          </Box>
          <IconButton>
            <AddIcon></AddIcon>
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Total Stok:
        </Box>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between", p: "5px" }}>
        <Typography fontWeight="bold" fontSize={18}>Subtotal</Typography>
        <Typography fontWeight="bold" fontSize={20}>5452454</Typography>
      </Box>
      <Box>
        <Typography fontWeight="bold">Alamat Pengiriman</Typography>
      </Box>
      {/* select Options */}
      <Box>
        <SelectOptions
          provinsi={(p) => setProvince(p)}
          kota={(c) => setCity(c)}
          kurir={(c) => setCourier(c)}
          layanan={(s) => setService(s)}
          alamat={(a) => setAddress(a)}
        />
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between", p: "5px" }}>
        <Typography fontWeight="bold" fontSize={18}>
          Ongkir
        </Typography>
        <Typography fontWeight="bold" fontSize={20}>
          5452454
        </Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between", p: "5px" }}>
        <Typography fontWeight="bold" fontSize={18}>
          Total
        </Typography>
        <Typography fontWeight="bold" fontSize={20}>
          5452454
        </Typography>
      </Box>

      <Button variant="contained">Beli</Button>
    </Box>
  )
}

export default Order
