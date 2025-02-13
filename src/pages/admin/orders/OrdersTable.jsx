import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material"
import React from "react"

const OrdersTable = () => {
  const columns = [
    {
      label: "NO",
      width: 30,
    },
    {
      label: "Order Id",
      width: 100,
    },
    {
      label: "Pelanggan",
      width: 100,
    },
    {
      label: "Tagihan",
      width: 100,
    },
    {
      label: "Tanggal",
      width: 100,
    },
    {
      label: "Status",
      width: 100,
    },
    {
      label: "Pengiriman",
      width: 100,
    },
    {
      label: "Resi",
      width: 100,
    },
    {
      label: "No HP",
      width: 100,
    },
    {
      label: "Aksi",
      width: 100,
    },
  ]
  return (
    <Paper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column, index) => (
                <TableCell
                  align="center"
                  key={column.index}
                  sx={{ minWidth: column.width }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    </Paper>
  )
}

export default OrdersTable
