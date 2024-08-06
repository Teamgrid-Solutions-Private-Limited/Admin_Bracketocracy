import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TablePagination,
    TableRow,
    Box,
    Paper,
    Avatar,
    IconButton,
  } from "@mui/material";
  import { DeleteOutline, EditRounded } from "@mui/icons-material";
import EnhancedTableHead from '../global/EnhancedTableHead';
const TeamTable = () => {
  return (
    <Box sx={{ width: "100%" }}>
    <Paper sx={{ width: "100%", mb: 2 }}>
      <TableContainer>
        <Table size="medium">
          <EnhancedTableHead
            headCells={headCells}
            // order={order}
            // orderBy={orderBy}
            // onRequestSort={handleRequestSort}
          />

          <TableBody>
            {/* {stableSort(records, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

              .map((row, index) => {
                return ( */}
                  <TableRow hover 
                //   tabIndex={-1} key={row.name + "_" + index}
                  >
                    <TableCell align="left" size="small">
                      {/* {row.logo !== "" ? ( */}
                        <Avatar
                        //   alt={row.name}
                        //   src={row.logo}
                          sx={{ width: 56, height: 56 }}
                          variant="square"
                        />
                      {/* ) : null} */}
                    </TableCell>
                    <TableCell component="th" scope="row" size="small">
                      {/* {row.name} */}
                      name
                    </TableCell>

                    <TableCell align="left" size="small">
                      {/* {row.seed} */}
                      seed
                    </TableCell>
                    <TableCell align="left" size="small">
                      {/* {row.created} */}
                      cretaed
                    </TableCell>

                    {/* <TableCell align="center" size="small">
                      {row.status === "1" ? (
                        <Button
                          variant="contained"
                          color="success"
                          onClick={(e) => onActionClick(e, row, "deactive")}
                        >
                          Yes
                        </Button>
                      ) : (
                        <Button
                          variant="contained"
                          color="error"
                          onClick={(e) => onActionClick(e, row, "active")}
                        >
                          No
                        </Button>
                      )}
                    </TableCell> */}
                    <TableCell align="center" size="small">
                      <IconButton
                        color="error"
                        // onClick={(e) => onActionClick(e, row, "delete")}
                      >
                        <DeleteOutline />
                      </IconButton>
                      <IconButton
                        color="primary"
                        // onClick={(e) => onActionClick(e, row, "edit")}
                      >
                        <EditRounded />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                {/* );
              })} */}

            {/* {records.length === 0 ? ( */}
              <TableRow>
                <TableCell colSpan={5}>No Record Found(s)</TableCell>
              </TableRow>
            {/* ) : null} */}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        // count={records.length}
        // rowsPerPage={rowsPerPage}
        // page={page}
        // onPageChange={handleChangePage}
        // onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    {/* <ConfirmModal
      showConfirm={showConfirm}
      handleCloseConfirm={handleCloseConfirm}
      handleOKConfirm={handleOkConfirm}
      actionButton="Confirm"
      confirmDetails={confirmDetails}
    /> */}
  </Box>
  )
}

export default TeamTable;
const headCells = [
    { id: "logo", isSortable: true, label: "Team's Logo" },
    { id: "name", isSortable: true, label: "Name" },
    { id: "seed", isSortable: true, label: "Seed Value" },
    { id: "created", isSortable: true, label: "Created Date" },
    // { id: "active", isSortable: false, label: "Active" },
    { id: "action", isSortable: false, label: "Actions" },
  ];