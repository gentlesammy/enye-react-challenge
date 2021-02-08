import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {filterRecordByGender, filterRecordByUsername, filterRecordByPaymentMethod} from "../actions/Filter";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


const useStyles = makeStyles((theme) => ({
    table: {
    minWidth: 700,
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CustomizedTables({profiles}){
  const classes = useStyles();
  const dispatch = useDispatch();
  // Handle Text search input filterRecordByUsername
  const searchTextHandle = (event) => {
    dispatch(filterRecordByUsername(event.target.value));
  }

  // handle gender change here
    const changeGenderHandle = (event) => {
      dispatch(filterRecordByGender(event.target.value));
    }

  // handle payment method change here filterRecordByPaymentMethod
    const changePaymentMethodHandle = (event) => {
      dispatch(filterRecordByPaymentMethod(event.target.value));
    }

    const filters = useSelector(state => state.filters)

    return (
        <div className={classes.root} style={{paddingLeft: "5%",  paddingRight: "5%", paddingTop: "50px", paddingBottom: "50px"}} >
        <Grid container spacing={3}>
        {/* sorting and search criteria will be shwon here */}
          <Grid item md={6} xs={12} sm={6}>
            <Paper className={classes.paper}>
                <form className={classes.root} noValidate autoComplete="off">
                  <TextField id="standard-basic" label="Search By Username"  onChange={searchTextHandle}/>
                </form>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper className={classes.paper}>
                  <InputLabel htmlFor="age-native-simple">Gender</InputLabel>
                  <Select
                    native
                    onChange={changeGenderHandle}
                >
                <option aria-label="None" value="" />
                  <option value={"male"}>Male</option>
                  <option value={"female"}>Female</option>
                  <option value={"Prefer to skip"}>Prefer to skip</option>
                </Select>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper className={classes.paper}>
                <InputLabel htmlFor="age-native-simple">Payment Method</InputLabel>
                  <Select
                    native
                    onChange={changePaymentMethodHandle}
                >
                    <option aria-label="None" value="Select Payment Method" />
                  <option value="">All</option>
                    <option value={"cc"}>CC</option>
                    <option value={"check"}>Check</option>
                    <option value={"paypal"}>Paypal</option>
                    <option value={"money order"}>Money Order</option>

                </Select>
            </Paper>
          </Grid>
          {/* table data will be shown here */}
          <Grid item xs={12}>
            
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>FullName</StyledTableCell>
                      <StyledTableCell align="left">UserName</StyledTableCell>
                      <StyledTableCell align="left">Gender</StyledTableCell>
                      <StyledTableCell align="left">Email</StyledTableCell>
                      <StyledTableCell align="left">PhoneNumber</StyledTableCell>
                      <StyledTableCell align="left">Payment Method</StyledTableCell>
                      <StyledTableCell align="left">DomainName</StyledTableCell>
                      <StyledTableCell align="left">URL</StyledTableCell>
                      <StyledTableCell align="left">Longitude</StyledTableCell>
                      <StyledTableCell align="left">Latitude</StyledTableCell>
                      <StyledTableCell align="left">LastLogin</StyledTableCell>
                      {/* <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell> */}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {profiles.map((row) => (
                      <StyledTableRow key={row.UserName}>
                        <StyledTableCell align="left">{row.FirstName + row.LastName}</StyledTableCell>
                        <StyledTableCell align="left">{row.UserName}</StyledTableCell>
                        <StyledTableCell align="left">{row.Gender}</StyledTableCell>
                        <StyledTableCell align="left">{row.Email}</StyledTableCell>
                        <StyledTableCell align="left">{row.PhoneNumber}</StyledTableCell>
                        <StyledTableCell align="left">{row.PaymentMethod}</StyledTableCell>
                        <StyledTableCell align="left">{row.DomainName}</StyledTableCell>
                        <StyledTableCell align="left">{row.URL}</StyledTableCell>
                        <StyledTableCell align="left">{row.Longitude}</StyledTableCell>  
                        <StyledTableCell align="left">{row.Latitude}</StyledTableCell>
                        <StyledTableCell align="left">{row.LastLogin}</StyledTableCell>
                        
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
          
          </Grid>
        
        </Grid>
      </div>
    );
}
