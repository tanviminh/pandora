import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import _ from 'lodash';
import * as React from 'react';
import { info } from 'utils/log';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const CustomizedTables: React.FC<{ data: Array<any> }> = ({ data }) => {
  const keys = _.keys(data[0]);
  const values = data.map((item) => {
    const arrItem = [];
    for (const [, value] of Object.entries(item)) {
      arrItem.push(value);
    }
    return arrItem;
  });
  info(values);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {keys.map((item, index) => {
              return <StyledTableCell key={index}>{item}</StyledTableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {values.map((item, index) => {
            return (
              <StyledTableRow key={index}>
                {item.map((value, index) => {
                  return <StyledTableCell key={index}>{value}</StyledTableCell>;
                })}
              </StyledTableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default React.memo(CustomizedTables);
