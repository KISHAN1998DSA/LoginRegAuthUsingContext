import * as React from "react";
import List from "@mui/material/List";

import { Container } from "@mui/material";
import { useAuth } from "./UserAuth/Auth";

import CardItems from "./CardItems";

const DisplayUsers = () => {
  const auth = useAuth();

  return (
    <Container>
      <List sx={{ width: "100%", maxWidth: 500, bgcolor: "background.paper" }}>
        {auth.user.map((users, index) => (
          <CardItems
            index={index}
            userName={users.userName}
            emailId={users.emailId}
            mobileNo={users.mobileNo}
            selGenderCat={users.selGenderCat}
            userAge={users.userAge}
          />
        ))}
      </List>
      {/* <Button onClick={handleSighOut}> Sign Out</Button> */}
    </Container>
  );
};

export default DisplayUsers;
