import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  Box,
  Paper,
  IconButton,
  Button,
  Avatar,
} from "@mui/material";
import { DeleteOutline, EditRounded } from "@mui/icons-material";
import EnhancedTableHead from "../global/EnhancedTableHead";
import ConfirmModal from "../global/ConfirmModal";
import { getComparator, stableSort } from "../global/UtilFunction";
import { withConfirmAction } from "../constants/AppGeneral";

const MatchesTable = (props) => {
  const { records, handleEditAction, teamIDLogoArr, teamIDNameArr } = props;
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("zoneName");
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
        matchId: selectedItem.id,
      };
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
    // if (withConfirmAction.includes(actionForLoc)) {
    //   setShowConfirm(true);
    //   const confirmDetailsLoc = {
    //     text: "Are you sure you want to " + actionForLoc + " the match ?",
    //   };
    //   setConfirmDetails(confirmDetailsLoc);
    // } else {
    //   handleEditAction(rowData, actionForLoc);
    // }
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
          <Table size="medium" className="table-striped">
            <EnhancedTableHead
              headCells={headCells}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />

            <TableBody>
              {stableSort(records, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

                .map((row, index) => {
                  return (
                    <TableRow
                      hover
                      tabIndex={-1}
                      key={row.zoneName + "_" + index}
                    >
                      <TableCell component="th" scope="row" size="small">
                        {row.zoneName}
                      </TableCell>
                      <TableCell align="left" size="small">
                        {row.roundName}
                      </TableCell>
                      <TableCell align="left" size="small">
                        {teamIDLogoArr["team_" + row.teamOneId] &&
                        teamIDLogoArr["team_" + row.teamOneId] !== "" ? (
                          <Avatar
                            className="teamLogo"
                            alt={row.teamOneName}
                            src={teamIDLogoArr["team_" + row.teamOneId]}
                            sx={{ width: 25, height: 25 }}
                            variant="circlle"
                          />
                        ) : null}
                        {teamIDNameArr["team_" + row.teamOneId] &&
                        teamIDNameArr["team_" + row.teamOneId] !== ""
                          ? teamIDNameArr["team_" + row.teamOneId]
                          : "-"}
                      </TableCell>
                      <TableCell align="left" size="small">
                        {teamIDLogoArr["team_" + row.teamTwoId] &&
                        teamIDLogoArr["team_" + row.teamTwoId] !== "" ? (
                          <Avatar
                            className="teamLogo"
                            alt={row.teamTwoName}
                            src={teamIDLogoArr["team_" + row.teamTwoId]}
                            sx={{ width: 25, height: 25 }}
                            variant="circlle"
                          />
                        ) : null}
                        {teamIDNameArr["team_" + row.teamTwoId] &&
                        teamIDNameArr["team_" + row.teamTwoId] !== ""
                          ? teamIDNameArr["team_" + row.teamTwoId]
                          : "-"}
                      </TableCell>
                      <TableCell align="left" size="small">
                        {row.teamOneScore}
                      </TableCell>
                      <TableCell align="left" size="small">
                        {row.teamTwoScore}
                      </TableCell>
                      {/* <TableCell align="left" size="small">
                        {row.matchDate ? row.matchDate : ""}
                      </TableCell> */}
                      <TableCell align="center" size="small">
                        <Button
                          variant="contained"
                          color="success"
                          onClick={(e) => onActionClick(e, row, "scroeupdate")}
                        >
                          Score
                        </Button>
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
                          onClick={(e) => onActionClick(e, row, "delete")}
                        >
                          <DeleteOutline />
                        </IconButton>
                        <IconButton
                          color="primary"
                          onClick={(e) => onActionClick(e, row, "edit")}
                        >
                          <EditRounded />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}

              {records.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8}>No Record Found(s)</TableCell>
                </TableRow>
              ) : null}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={records.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
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
export default MatchesTable;
const headCells = [
  { id: "zoneName", isSortable: true, label: "Region" },
  { id: "roundName", isSortable: true, label: "Round" },
  { id: "teamOneName", isSortable: true, label: "Team 1" },
  { id: "teamTwoName", isSortable: true, label: "Team 2" },
  { id: "teamOneScore", isSortable: true, label: "T-1's Score" },
  { id: "teamTwoScore", isSortable: true, label: "T-2's Score" },
  // { id: "matchDate", isSortable: true, label: "Tip off time" },
  { id: "result", isSortable: false, label: "Final Score" },
  // { id: "active", isSortable: false, label: "Active" },
  { id: "action", isSortable: false, label: "Actions" },
];
