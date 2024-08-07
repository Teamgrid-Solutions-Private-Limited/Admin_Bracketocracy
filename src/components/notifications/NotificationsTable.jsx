import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  Box,
  Paper,
  Button,
  // Button,
} from "@mui/material";
import EnhancedTableHead from "../global/EnhancedTableHead";
import ConfirmModal from "../global/ConfirmModal";
import { getComparator, stableSort } from "../global/UtilFunction";
import { withConfirmAction } from "../constants/AppGeneral";
// import { zoneActiveInactiveDelete } from "../../store/actions/Zone.Action";

const NotificationsTable = (props) => {
  // const dispatch = useDispatch();
  const { records, handleEditAction } = props;
  const [order, setOrder] = useState("desc");
  const [orderBy, setOrderBy] = useState("created");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selectedItem, setSelectedItem] = useState({});
  const [showConfirm, setShowConfirm] = useState(false);
  const [actionFor, setActionFor] = useState("");
  const [confirmDetails, setConfirmDetails] = useState(false);

  const handleCloseConfirm = () => {
    setShowConfirm(false);
    setSelectedItem({});
  };

  const handleOkConfirm = () => {
    if (selectedItem.id && selectedItem.id !== "") {
      setShowConfirm(false);
      const payload = {
        zoneId: selectedItem.id,
      };
      // dispatch(zoneActiveInactiveDelete(payload, actionFor));
    }
  };
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const onActionClick = (event, rowData, actionForLoc) => {
    setSelectedItem(rowData);
    setActionFor(actionForLoc);
    if (withConfirmAction.includes(actionForLoc)) {
      setShowConfirm(true);
      const confirmDetailsLoc = {
        text: "Are you sure you want to " + actionForLoc + " the zone ?",
      };
      setConfirmDetails(confirmDetailsLoc);
    } else {
      handleEditAction(rowData);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table size="medium">
            <EnhancedTableHead
              headCells={headCells}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />

            {/* <TableBody>
              {stableSort(records, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

                .map((row, index) => {
                  return (
                    <TableRow
                      hover
                      tabIndex={-1}
                      key={row.notificationTitle + "_" + index}
                    >
                      <TableCell component="th" scope="row" size="small">
                        {row.notificationTitle ? row.notificationTitle : ""}
                      </TableCell>
                      <TableCell component="th" scope="row" size="small">
                        {row.notificationText ? row.notificationText : ""}
                      </TableCell>
                      <TableCell component="th" scope="row" size="small">
                        {row.created ? row.created : ""}
                      </TableCell> */}
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
                      {/* <TableCell align="center" size="small"> */}
                        {/* <IconButton
                          color="error"
                          onClick={(e) => onActionClick(e, row, "delete")}
                        >
                          <DeleteOutline />
                        </IconButton> */}
                        {/* <Button
                          variant="contained"
                          color="info"
                          onClick={(e) => onActionClick(e, row, "resend")}
                        >
                          Re-Send
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}

              {records.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4}>No Record Found(s)</TableCell>
                </TableRow>
              ) : null} */}
            {/* </TableBody> */}
          </Table>
        </TableContainer>

        {/* <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={records.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        /> */}
      </Paper>
      <ConfirmModal
        showConfirm={showConfirm}
        handleCloseConfirm={handleCloseConfirm}
        handleOKConfirm={handleOkConfirm}
        actionButton="Confirm"
        confirmDetails={confirmDetails}
      />
    </Box>
  );
};
export default NotificationsTable;
const headCells = [
  { id: "notificationTitle", isSortable: true, label: "Title" },
  { id: "notificationText", isSortable: true, label: "Message" },
  { id: "created", isSortable: true, label: "Send Date" },
  { id: "action", isSortable: false, label: "Edit" },
];
