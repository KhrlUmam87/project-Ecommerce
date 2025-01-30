import HomeIcon from "@mui/icons-material/Home"
import AssessmentIcon from "@mui/icons-material/Assessment"
import DashboardIcon from "@mui/icons-material/Dashboard"
import PeopleAltIcon from "@mui/icons-material/PeopleAlt"
import LocalMallIcon from "@mui/icons-material/LocalMall"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { blue } from "@mui/material/colors"

const ListMenus = [
  {
    label: "Home",
    link: "/",
    icon: <HomeIcon sx={{ color: blue[500] }} />,
  },
  {
    label: "Dashboard",
    link: "/admin-dashboard",
    icon: <DashboardIcon sx={{ color: blue[500] }} />,
  },
  {
    label: "Pelanggan",
    link: "/admin-pelanggan",
    icon: <PeopleAltIcon sx={{ color: blue[500] }} />,
  },
  {
    label: "Produk",
    link: "/admin-produk",
    icon: <LocalMallIcon sx={{ color: blue[500] }} />,
  },
  {
    label: "Pesanan",
    link: "/admin-pesanan",
    icon: <ShoppingCartIcon sx={{ color: blue[500] }} />,
  },
  {
    label: "Laporan",
    link: "/admin-laporan",
    icon: <AssessmentIcon sx={{ color: blue[500] }} />,
  },
]

export default ListMenus
