import { makeStyles } from "@material-ui/core";

export const formStyles = makeStyles((theme) => ({
  root: {
    fontSize: 18,
  },
  card: {
    padding: theme.spacing(4),
    borderRadius: 16,
    margin: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  main: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
  },
  fields: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  tableTitle: {
    fontSize: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: theme.spacing(2),
  },
  tableLabel: {
    marginBottom: theme.spacing(4),
    marginLeft: theme.spacing(2),
    fontWeight: 650,
    fontSize: 24,
  },
  table: {
    minWidth: 650,
  },
  icon: {
    fontSize: 40,
    padding: theme.spacing(1),
  },
  th: {
    fontSize: 20,
  },
  td: {
    fontSize: 16,
  },
  createTest: {
    display: "flex",
    alignItems: "flex-end",
  },
  testTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: 24,
  },
  button: {
    paddingBottom: 0,
    color: "black",
  },
  addQuestion: {
    display: "flex",
    flexDirection: "column",
  },
  textAndButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));
