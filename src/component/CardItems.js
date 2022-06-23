import {
  Divider,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import UpdateContextData from "./UpdateContextData";
import { useAuth } from "./UserAuth/Auth";
import { useNavigate } from "react-router-dom";

const CardItems = ({
  userName,
  emailId,
  userAge,
  mobileNo,
  selGenderCat,
  index,
}) => {
  const auth = useAuth();
  const nav = useNavigate();
  const deleteContextData = (id) => {
    //debugger;
    console.log(id);
    if (window.confirm("Want to delete?")) {
      auth.handleData(auth.user.splice(id, 1));
      //nav("/");
    }
  };
  const editContextData = (id) => {
    //debugger;
    const found = auth.user.find((obj, index) => {
      return index === id;
    });
    auth.handleData(found);
    nav("/updateContext");
  };
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={"Email iD : " + emailId}
          secondary={
            <>
              <Typography
                sx={{ display: "" }}
                component=""
                variant="body2"
                color="text.primary"
              >
                {"Name:" + userName} {"Gender:" + selGenderCat}
              </Typography>
              {"Mobile Number :" + mobileNo} {"Age:" + userAge}
            </>
          }
        />
        <ListItemButton
          style={{ color: "red", marginTop: "20 auto" }}
          onClick={() => deleteContextData(index)}
        >
          Delete
        </ListItemButton>
        <ListItemButton
          style={{ color: "Blue", marginTop: "20 auto" }}
          onClick={() => editContextData(index)}
        >
          Edit
        </ListItemButton>
      </ListItem>
      <Divider />
    </>
  );
};

export default CardItems;
