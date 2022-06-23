import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@mui/material";
import { Container } from "@mui/system";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./UserAuth/style.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./UserAuth/Auth";

const SignupSchema = yup.object().shape({
  userName: yup.string().required("Enter the User Name"),
  emailId: yup.string().required("Enter the Email"),
});

const UpdateContextData = () => {
  const auth = useAuth();
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });

  const onSubmit = (data) => {
    console.info(data);
  };

  const onError = (errors) => {
    console.error(errors);
  };
  return (
    <Container>
      <Grid className="cardStyle boxShadow">
        <Card>
          <CardHeader color="green" title="Update" />

          <Divider />
          <CardContent>
            <TextField
              style={{ marginTop: 20 }}
              id="userName"
              fullWidth={true}
              label="User Name"
              variant="outlined"
              value={auth.userData.userName}
              {...register("userName")}
            />
            {errors.userName && <p>{errors.userName.message}</p>}
            <TextField
              style={{ marginTop: 20 }}
              id="emailId"
              fullWidth={true}
              label="email Id"
              variant="outlined"
              type="email"
              value={auth.userData.emailId}
              {...register("emailId")}
            />
            {errors.emailId && <p>{errors.emailId.message}</p>}
          </CardContent>

          <Button
            variant="outlined"
            fullWidth={true}
            onClick={handleSubmit(onSubmit, onError)}
          >
            Update
          </Button>
        </Card>
      </Grid>
    </Container>
  );
};

export default UpdateContextData;
