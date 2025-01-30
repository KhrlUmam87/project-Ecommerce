import Appbar from "../../components/appbar/Appbar"
import Footer from "../../components/footer/footer"
import Box from "@mui/material/Box"
import Products from "../product/Products"

const Home = () => {
  return (
    <div>
      <Appbar />

      <Box
        sx={{
          minheight: 800,
          m: 2,
          display: "flex",
          alignItems: "start",
          justifyContent: "center",

        }}
      >
        <Products />
      </Box>

      <Footer />
    </div>
  )
}

export default Home
