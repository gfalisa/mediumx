import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  shiftToClassicStyle,
  shiftToMediumStyle
} from "../../../store/actions";
import Switch from "@material-ui/core/Switch";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: "20px",
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

const SetComment = (...params) => {
  const isClassic = useSelector(state => state.comment.isClassicComment);
  const dispatch = useDispatch();

  const classes = useStyles();

  const handleChange = event => {
    let action;
    if (isClassic) {
      action = shiftToMediumStyle();
    } else {
      action = shiftToClassicStyle();
    }
    dispatch(action);
  };

  return (
    <div className={classes.root}>
      <span>Classic Comment System</span>
      <Switch
        checked={isClassic}
        onChange={handleChange}
        color="primary"
        name="isClassic"
        inputProps={{ "aria-label": "primary checkbox" }}
      />
    </div>
  );
};

export default SetComment;
