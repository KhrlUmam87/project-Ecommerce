import {
  Box,
  Button,
  IconButton,
  Select,
  Typography,
  InputLabel,
  FormControl,
  MenuItem,
} from "@mui/material"
import { useEffect, useState } from "react"

const SelectOptions = ({ provinsi, kota, kurir, layanan, alamat }) => {
  const [province, setProvince] = useState("")
  const [city, setCity] = useState("")
  const [courier, setCourier] = useState("")
  const [service, setService] = useState("")
  const [address, setAddress] = useState("")

  const handleProvince = (event) => {
    setProvince(event.target.value)
    provinsi(event.target.value)
  }
  const handleCity = (event) => {
    setCity(event.target.value)
    kota(event.target.value)
  }
  const handleCourier = (event) => {
    setCourier(event.target.value)
    kurir(event.target.value)
  }
  const handleService = (event) => {
    setService(event.target.value)
    layanan(event.target.value)
  }

  useEffect(() => {
    alamat(address)
  })
  return (
    <Box
      sx={{
        minWidth: 120,
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Provinsi</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={province}
          label="Provinsi"
          onChange={handleProvince}
        >
          <MenuItem value="Jakarta">Jakarta</MenuItem>
          <MenuItem value="Jawa Barat">Jawa Barat</MenuItem>
          <MenuItem value="Jawa Tengah">Jawa Tengah</MenuItem>
          <MenuItem value="Jawa Timur">Jawa Timur</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Kota / Kabupaten</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={city}
          label="Kota / Kabupaten"
          onChange={handleCity}
        >
          <MenuItem value="Jakarta Pusat">Jakarta Pusat</MenuItem>
          <MenuItem value="Bandung">Bandung</MenuItem>
          <MenuItem value="Semarang">Semarang</MenuItem>
          <MenuItem value="Surabaya">Surabaya</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Kurir</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={courier}
          label="Kurir"
          onChange={handleCourier}
        >
          <MenuItem value="J&T">J&T Express</MenuItem>
          <MenuItem value="JNE Express">JNE Express</MenuItem>
          <MenuItem value="Antaraja">Antaraja</MenuItem>
          <MenuItem value="SiCepat">SiCepat</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Layanan</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={service}
          label="Layanan"
          onChange={handleService}
        >
          <MenuItem value="Layanan 1">Layanan 1</MenuItem>
          <MenuItem value="Layanan 2">Layanan 2</MenuItem>
          <MenuItem value="Layanan 3">Layanan 3</MenuItem>
          <MenuItem value="Layanan 4">Layanan 4</MenuItem>
        </Select>
      </FormControl>
      <textarea
        placeholder="massukan alamat"
        style={{ p: "10px" }}
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
    </Box>
  )
}

export default SelectOptions
