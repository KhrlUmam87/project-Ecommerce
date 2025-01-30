import AppBar from "../../components/appbar/Appbar"
import { Box, Typography } from "@mui/material"
import { IconButton } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import DeleteIcon from "@mui/icons-material/Delete"
import Order from "./Order"

const product = {
  _id: {
    $oid: "6566c165801e99be12650c13",
  },
  name: "Rodrick Schwant",
  image: [
    {
      link: "https://imageio.forbes.com/specials-images/imageserve/65f2d5c080790f47bcfa620f/Rafa-Marquez-will-leave-FC-Barcelona-/960x0.jpg?format=jpg&width=960",
    },
    {
      link: "http://dummyimage.com/650x650.png/ff4444/000000",
    },
    {
      link: "http://dummyimage.com/650x650.png/ff4444/333333",
    },
    {
      link: "http://dummyimage.com/650x650.png/ff4444/666666",
    },
    {
      link: "http://dummyimage.com/650x650.png/dddddd/000000",
    },
  ],
  desc: "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
  category: "Grocery",
  price: 6562674,
  capital: 6552674,
  profit: 10000,
  stock: 10,
  weight: 1708,
  rating: 4,
  reviews: [
    {
      user: "64aa82aba176b956ba8982c1",
      rating: 5,
      comment:
        "Revision of Extraluminal Device in Ureter, Percutaneous Endoscopic Approach",
    },
    {
      user: "64aa82aba176b956ba898250",
      rating: 3,
      comment:
        "Supplement Right Brachial Artery with Nonautologous Tissue Substitute, Percutaneous Endoscopic Approach",
    },
  ],
}

const Cart = () => {
  return (
    <>
      <AppBar />
      <Box sx={{ m: "30px", height: "80vh" }}>
        <Typography variant="h6" fontWeight="bold">
          Keranjang Belanja
        </Typography>

        <Box sx={{ display: "flex", width: "100%" }}>
          <Box
            sx={{
              flex: 2,
              display: "flex",
              alignItems: "start",
              p: "20px",
              gap: "20px",
            }}
          >
            <img
              src={product.image[0].link}
              alt={product.name}
              style={{
                height: "120px",
                width: "120px",
                objectFit: "cover",
                borderRadius: "5px",
              }}
            />
            <Box
              sx={{
                width: "80%",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Typography fontWeight={"bold"}>{product.name}</Typography>
              <Typography fontWeight={"bold"}>{`Rp ${parseFloat(
                product.price
              ).toLocaleString("id-ID")}`}</Typography>
              <Typography fontSize={15} fontStyle="italic">
                {product.weight} gram
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  gap: "15px",
                  p: "5px",
                  justifyContent: "end",
                }}
              >
                <IconButton>
                  <DeleteIcon />
                </IconButton>
                <Box sx={{ display: "flex", gap: "15px", p: "2px" }}>
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
              </Box>
            </Box>
          </Box>

          <Box sx={{ flex: 1, display:"flex",alignItems:"center", justifyContent:"center" }}>
            <Order />
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Cart
