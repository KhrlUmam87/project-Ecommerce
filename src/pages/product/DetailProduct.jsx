import Box from "@mui/material/Box"
import Appbar from "../../components/appbar/Appbar"
import Footer from "../../components/footer/footer"
import { IconButton, Typography } from "@mui/material"
import StarRoundedIcon from "@mui/icons-material/StarRounded"
import { orange } from "@mui/material/colors"
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft"
import ArrowRightIcon from "@mui/icons-material/ArrowRight"
import { useState } from "react"
import Order from "./Order"

const createMarkUp = (html) => {
  return { __html: html }
}
const DetailProduct = () => {
  const product = {
    _id: {
      $oid: "6566c165801e99be12650c14",
    },
    name: "Chantalle Hatcliffe",
    image: [
      {
        link: "https://jualelektronik.com/wp-content/uploads/2024/06/Oxone-OX930-Portable-Gas-Burner-Picnic-With-Bag.jpg",
      },
      {
        link: "https://jualelektronik.com/wp-content/uploads/2024/06/Oxone-OX930-Portable-Gas-Burner-Picnic-With-Bags.jpg",
      },
      {
        link: "https://jualelektronik.com/wp-content/uploads/2024/06/Oxone-OX930-Portable-Gas-Burner-Picnic-With-Bag-putih-tampak-samping.jpg",
      },
      {
        link: "https://jualelektronik.com/wp-content/uploads/2024/06/Oxone-OX930-Portable-Gas-Burner-Picnic-With-Bag-putih-buka.jpg",
      },
      {
        link: "https://jualelektronik.com/wp-content/uploads/2024/06/Oxone-OX930-Portable-Gas-Burner-Picnic-With-Bag-putih.jpg",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
    ],
    desc: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    category: "Books",
    price: 491262,
    capital: 481262,
    profit: 10000,
    stock: 45,
    weight: 2828,
    rating: 4,
    reviews: [
      {
        user: {
          $oid: "652ba75b93f29666cf776283",
        },
        rating: 5,
        comment: "Keren Brooo",
        _id: {
          $oid: "658044b767e02a805fee2a1c",
        },
      },
    ],
    __v: 1,
    updatedAt: {
      $date: "2023-12-18T13:10:15.954Z",
    },
  }

  const [imageIndex, setIndex] = useState(0)

  const left = () => {
    setIndex((imageIndex - 1 + product.image.length) % product.image.length)
  }
  const right = () => {
    setIndex((imageIndex + 1) % product.image.length)
  }

  return (
    <Box>
      <Appbar />
      <Box sx={{ display: "flex", minHeight: "85vh" }}>
        <Box sx={{ display: "flex", flex: 2, alignItems: "start" }}>
          {/* box untuk gambar ya*/}{" "}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              p: 2,
            }}
          >
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={product.image[imageIndex].link}
                alt={product.name}
                style={{
                  height: "450px",
                  width: "450px",
                  borderRadius: "10px",
                  objectFit: "cover",
                }}
              />
            </Box>
            {/* iconarrow */}
            <Box
              sx={{
                position: "absolute",
                width: "530px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <IconButton onClick={left}>
                <ArrowLeftIcon />
              </IconButton>
              <IconButton onClick={right}>
                <ArrowRightIcon />
              </IconButton>
            </Box>
          </Box>
          {/* Detail */}
          <Box
            sx={{
              display: "flex",
              flex: 1,
              p: 2,
              gap: 1,
              flexDirection: "column",
            }}
          >
            <Typography variant="h5" fontWeight="bold">
              {product.name}
            </Typography>
            <Typography
              sx={{ display: "flex", alignItems: "center", color: "grey" }}
            >
              <StarRoundedIcon sx={{ color: orange[500] }} /> {product.rating}{" "}
              dari ({product.reviews.length} reviews )
            </Typography>
            <Typography sx={{ color: "gray" }}>
              {product.weight} gram
            </Typography>
            <Typography fontWeight="bold" variant="h5">{`Rp ${parseFloat(
              product.price
            ).toLocaleString("id-ID")}`}</Typography>
            <Typography dangerouslySetInnerHTML={createMarkUp(product.desc)} />
          </Box>
        </Box>
        <Box sx={{ display: "flex", flex: 1, p: 2, justifyContent:"center" }}>
          <Order/>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}

export default DetailProduct
