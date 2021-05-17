import React from "react";
import { Link } from "react-router-dom";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import {
  Card,
  CardContent,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import { formStyles } from "./formStyles";

const createData = (test, responses, edit, share) => {
  return { test, responses, edit, share };
};

const rows = [
  createData("Test 1", "link", "link", "link"),
  createData("Test 2", "link", "link", "link"),
  createData("Test 3", "link", "link", "link"),
];

export const Dashboard = () => {
  const classes = formStyles();
  return (
    <Container maxWidth="md">
      <Card variant="outlined" component={Paper} className={classes.card}>
        <CardContent className={classes.main}>
          <Typography className={classes.tableTitle}>
            Create a New Test{" "}
            <Link className={classes.button} to="/create-test">
              <AddCircleIcon className={classes.icon} />
            </Link>
          </Typography>
          <Typography className={classes.tableLabel}>
            [Registered Name]'s Test
          </Typography>
          <TableContainer>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell className={classes.th}>Test</TableCell>
                  <TableCell align="center" className={classes.th}>
                    View Responses
                  </TableCell>
                  <TableCell align="center" className={classes.th}>
                    Edit Test
                  </TableCell>
                  <TableCell align="center" className={classes.th}>
                    Share Test
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, i) => (
                  <TableRow key={i}>
                    <TableCell className={classes.td}>{row.test}</TableCell>
                    <TableCell align="center" className={classes.td}>
                      {row.responses}
                    </TableCell>
                    <TableCell align="center" className={classes.td}>
                      {row.edit}
                    </TableCell>
                    <TableCell align="center" className={classes.td}>
                      {row.share}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Container>
  );
};
