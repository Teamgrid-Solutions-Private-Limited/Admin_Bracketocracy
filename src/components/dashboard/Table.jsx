import * as React from "react";


import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Typography,
  Box,
  Paper,
  Button,
} from "@mui/material";

import { visuallyHidden } from "@mui/utils";

import { Modal } from "react-bootstrap";

import { RiEditBoxLine, RiAddFill } from "react-icons/ri";

import FormMasterDataModal from "./FormMasterData";

import { getComparator, stableSort } from "../../global/util/UtilFunctions";

import { userStatus, No_Record_Found } from "../../constants/Constants";

import Searchbar from "../../global/util/Searchbar";

import { onboardNewUser } from "../../store/actions/DataPMO.Action";

export default function ManageMasterData() {
  const [order, setOrder] = React.useState("asc");

  const [orderBy, setOrderBy] = React.useState("enterpriseID");

  const [page, setPage] = React.useState(0);

  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [selectedUser, setSelectedUser] = React.useState({});

  const [records, setRecords] = React.useState([]);

  const [actionFor, setActionFor] = React.useState([]);


  const [show, setShow] = React.useState(false);

  const handleClose = () => {
    setShow(false);

    setSelectedUser({});
  };

  const handleShow = () => {
    setShow(true);

    setSelectedUser({});
  };



  const searchCallback = (query, currentElement) => {
    let queryString = currentElement.enterpriseID;

    return queryString.toLowerCase().includes(query);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";

    setOrder(isAsc ? "desc" : "asc");

    setOrderBy(property);
  };

  const onActionClick = (event, userData, actionForLoc) => {
    // checked = userData.status.toUpperCase() === userStatus.ACTIVE?true:fa

    if (actionForLoc !== "status") {
      setShow(true);

      setSelectedUser(userData);

      setActionFor(actionForLoc);
    } else {
      setActionFor("");

      let payload = Object.assign({}, userData);

      payload["status"] =
        userData.status.toUpperCase() === userStatus.ACTIVE
          ? userStatus.INACTIVE
          : userStatus.ACTIVE;

      dispatch(onboardNewUser(payload));
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));

    setPage(0);
  };

  React.useEffect(() => {
    setRecords(masterDataList);
  }, [masterDataList]);

  React.useEffect(() => {
    handleClose();
  }, [isRefreshedScreen]);

  //   // Avoid a layout jump when reaching the last page with empty rows.

  //   const emptyRows =

  //     page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <div className="data-pmo-records-main ">
      <div className="top-line">
        <div>
          <Typography
            sx={{ flex: "1 1 100%" }}
            variant="h2"
            id="tableTitle"
            component="div"
            className="heading-page"
          >
            Onboarded User List
          </Typography>
        </div>

        <Searchbar
          searchArray={masterDataList}
          setSearchArray={setRecords}
          originalArray={masterDataList}
          searchCallback={searchCallback}
          searchPlaceholder="Search by enterprise id"
          style={{ flexGrow: "0.5" }}
        />

        <div>
          <button
            type="button"
            className="btn insert-record-submit-btn"
            onClick={handleShow}
          >
            <span style={{ marginRight: "5px" }}>
              <RiAddFill className="delete-btn-icon" />
            </span>
            ADD NEW
          </button>
        </div>
      </div>

      <Box sx={{ width: "100%", borderTop: "1px solid #939393;" }}>
        <Paper sx={{ width: "100%", mb: 2 }}>
          <TableContainer>
            <Table size="medium">
              <EnhancedTableHead
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
              />

              <TableBody>
                {/* if you don't need to support IE11, you can replace the `stableSort` call with:

                  rows.slice().sort(getComparator(order, orderBy)) */}

                {stableSort(records, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

                  .map((row, index) => {
                    const isItemSelected = false;

                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        tabIndex={-1}
                        key={row.enterpriseID + "_" + index}
                        selected={isItemSelected}
                      >
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          size="small"
                          onClick={(event) => onActionClick(event, row, "view")}
                          sx={{ cursor: "pointer" }}
                        >
                          {row.enterpriseID}
                        </TableCell>

                        <TableCell
                          align="left"
                          sx={{ cursor: "pointer" }}
                          onClick={(event) => onActionClick(event, row, "view")}
                          size="small"
                        >
                          {row.name}
                        </TableCell>

                        <TableCell align="left" size="small">
                          {row.role}
                        </TableCell>

                        <TableCell align="left" size="small">
                          {row.careerLevel}
                        </TableCell>

                        <TableCell align="left" size="small">
                          {row.supervisor_id}
                        </TableCell>

                        <TableCell align="left" size="small">
                          {row.geography}
                        </TableCell>

                        {/* <TableCell align="left">{row.teamName}</TableCell> */}

                        <TableCell
                          align="left"
                          size="small"
                          className="tdmaxWidth"
                        >
                          {row.groupName}
                        </TableCell>

                        <TableCell
                          align="left"
                          size="small"
                          className="tdmaxWidth"
                        >
                          {row.primary_skill}
                        </TableCell>

                        <TableCell
                          align="left"
                          size="small"
                          onClick={(event) =>
                            onActionClick(event, row, "status")
                          }
                        >
                          {row.status.toUpperCase() === userStatus.ACTIVE ? (
                            <Button variant="contained" color="success">
                              Yes
                            </Button>
                          ) : (
                            <Button variant="contained" color="error">
                              No
                            </Button>
                          )}

                          {/* {row.status} */}

                          {/* <BootstrapSwitchButton

                            checked={

                              row.status.toUpperCase() === userStatus.ACTIVE

                                ? true

                                : false

                            }

                            onstyle="success"

                            onlabel={"Yes"}

                            offlabel={"No"}

                            offstyle="danger"

                            // onChange={(checked) =>

                            //   onActionClick(checked, row, "status")

                            // }

                          /> */}
                        </TableCell>

                        <TableCell align="center" size="small">
                          <Button
                            variant="outlined"
                            startIcon={<RiEditBoxLine />}
                            onClick={(e) => onActionClick(e, row, "edit")}
                          >
                            Edit
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}

                {records.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={9}>{No_Record_Found}</TableCell>
                  </TableRow>
                ) : null}

                {/* {emptyRows > 0 && (

                  <TableRow

                    style={{

                      height: (dense ? 33 : 53) * emptyRows,

                    }}

                  >

                    <TableCell colSpan={6} />

                  </TableRow>

                )} */}
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
      </Box>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="xl"
      >
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">
            {selectedUser.enterpriseID
              ? "User Information"
              : "Onboard New User"}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <FormMasterDataModal
            selectedUser={selectedUser}
            actionFor={actionFor}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}

const headCells = [
  { id: "enterpriseID", isSortable: true, label: "Enterprise id" },

  //   { id: "employeeID", isSortable: true, label: "Employee id"},

  { id: "name", isSortable: true, label: "Name" },

  { id: "role", isSortable: true, label: "Role" },

  { id: "careerLevel", isSortable: true, label: "Career Level" },

  { id: "supervisor_id", isSortable: true, label: "Supervisor id" },

  { id: "geography", isSortable: true, label: "Geography" },

  { id: "groupName", isSortable: true, label: "Group name" },

  { id: "primary_skill", isSortable: true, label: "Primary Skill" },

  { id: "status", isSortable: true, label: "Active" },

  { id: "action", isSortable: false, label: "Actions" },
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead sx={{ borderBottom: "2px solid #7500c0;" }}>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            className="style-table-header"
            key={headCell.id}
            align="left"
            size="small"
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.isSortable ? (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}

                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            ) : (
              headCell.label
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
