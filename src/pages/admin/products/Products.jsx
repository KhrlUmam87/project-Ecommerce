import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Rating,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material"
import sample from "../../../../public/sample.png"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import { blue, green, orange, red, grey, blueGrey } from "@mui/material/colors"
import ChatIcon from "@mui/icons-material/Chat"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"
import EditIcon from "@mui/icons-material/Edit"

export const Products = () => {
  return (
    <Card sx={{ width: 200 }}>
      <CardMedia component="img" height={224} image={sample} />
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography fontWeight="bold" align="center" fontSize={18}>
            Maouse
          </Typography>
          <Typography
            fontWeight="bold"
            align="center"
            fontSize={14}
            fontStyle="italic"
          >
            100.000
          </Typography>
          <Stack spacing={2}>
            <Rating value={5} readOnly />
          </Stack>
        </Box>
      </CardContent>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <CardActions>
          <Tooltip title="Deskripsi">
            <IconButton>
              <MoreVertIcon sx={{ color: blueGrey[900] }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Rewievs">
            <IconButton>
              <ChatIcon sx={{ color: blue[500] }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Edit">
            <IconButton>
              <EditIcon sx={{ color: orange[500] }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Hapus">
            <IconButton>
              <DeleteForeverIcon sx={{ color: red[500] }} />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Box>
    </Card>
  )
}
