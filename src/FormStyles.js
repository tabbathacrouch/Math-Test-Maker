import { makeStyles } from "@material-ui/core";

export const formStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(4),
    borderRadius: 16,
  },
  main: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  fields: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  link: {
    align: "center",
  },
}));
