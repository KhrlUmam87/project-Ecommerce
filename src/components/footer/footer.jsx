import { Box } from "@mui/material"

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <Box
      sx={{
        height: 60,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {" "}
      &copy;: KHRL UMAM {year}
    </Box>
  )
}

export default Footer
