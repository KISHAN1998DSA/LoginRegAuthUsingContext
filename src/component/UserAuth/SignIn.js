import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";

const SignupSchema = yup.object().shape({
  userName: yup.string().required("Enter the User Name"),
  password: yup.string().required("Enter the password"),
});

const SignIn = () => {
  // const [userName, setUserName] = useState("");
  // const [password, setPassword] = useState("");
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
    let userData = JSON.parse(localStorage.getItem("userReg"));
    const found = userData.find((obj) => {
      return obj.userName === data.userName && obj.password === data.password;
    });
    if (found) {
      alert("login successFull");
      auth.login(userData);
      auth.isAuthUser(true);
      nav("/");
    } else {
      alert("Wrong User");
    }
    // userData.forEach((element) => {

    //   if (
    //     element.userName === data.userName &&
    //     element.password === data.password
    //   ) {
    //     alert("login successFull");
    //     auth.login(userData);
    //     //alert(JSON.stringify(auth.user))
    //     nav("/");
    //   }
    // });
  };

  const onError = (errors) => {
    console.error(errors);
  };
  return (
    <Container>
      <Grid className="cardStyle boxShadow">
        <form>
          <Card>
            <CardHeader color="green" title="Sign In" />

            <Divider />
            <CardContent>
              <TextField
                style={{ marginTop: 20 }}
                id="userName"
                fullWidth={true}
                label="User Name"
                variant="outlined"
                // onChange={(e) => {
                //   setUserName(e.target.value);
                // }}
                {...register("userName", { required: true, maxLength: 20 })}
              />
              {errors.userName && <p>{errors.userName.message}</p>}
              <TextField
                style={{ marginTop: 20 }}
                id="password"
                fullWidth={true}
                label="Password"
                variant="outlined"
                type="password"
                // onChange={(e) => {
                //   setPassword(e.target.value);
                // }}
                {...register("password")}
              />
              {errors.password && <p>{errors.password.message}</p>}
            </CardContent>
            <CardActions>
              <Typography variant="h6">
                <Checkbox />
                Remember Me Later
              </Typography>
            </CardActions>
            <Button
              variant="outlined"
              fullWidth={true}
              onClick={handleSubmit(onSubmit, onError)}
            >
              Sign In
            </Button>
            <Button className="cardFiled" color="primary">
              {" "}
              Forget Password
            </Button>
          </Card>
        </form>
      </Grid>
    </Container>
  );
};

export default SignIn;
