import { Fragment } from "react"
import AdminBar from "../components/appbar/AdminBar"
import { Box } from "@mui/material"
import Data from "./Data"
import Transactions from "./Transactions"

const Dashboard = () => {
  return (
    <Fragment>
      <AdminBar />
      <Box sx={{ height: "calc(100vh - 100px)", p: 2 , display:"flex", alignItems:"center", justifyContent:"start",flexFlow:"column", gap:2}}>
        <Data />
        <Transactions />
      </Box>
    </Fragment>
  )
}

export default Dashboard

/*
 side bar menggunakan react drawer Component
 Temporary drawer

 Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily above all other content until a section is selected.*/