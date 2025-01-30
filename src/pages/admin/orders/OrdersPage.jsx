import { Box, Input } from "@mui/material"
import AdminBar from "../components/appbar/AdminBar"
import OrdersTable from "./OrdersTable"

const OrdersPage = () => {
  return (
    <Box sx={{ height: "100vh" }}>
      <AdminBar />

      {/* search function */}
      <Box sx={{ p: 2 }}>
        <Input placeholder="Cari pesanan" />
      </Box>
      <Box sx={{ p: 2 }}>
        <OrdersTable />
      </Box>
    </Box>
  )
}

export default OrdersPage
