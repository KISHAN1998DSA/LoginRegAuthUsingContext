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
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./style.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object().shape({
  userName: yup.string().min(3).max(20).required("Enter the User Name"),
  selGenderCat: yup.string().required("Select Gender"),
  emailId: yup.string().email().required("Enter the Valid Email"),
  mobileNo: yup.number().required("Enter the Mob Number"),
  userAge: yup.number().min(15).max(99).required("Enter the Age"),
  password: yup.string().min(6).max(20).required("Enter the Password"),
});
let arr;
const SignUp = () => {
  const nav =useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.info(data);
    arr=JSON.parse(localStorage.getItem('userReg'));
    if(localStorage.getItem('userReg'))
    {
      arr=JSON.parse(localStorage.getItem('userReg'));
    }else{
      arr=[]
    }

    if(data.userName || data.password||data.message||data.emailId||data.mobileNo){
      arr.push(data)
    localStorage.setItem('userReg',JSON.stringify(arr));
      nav("/");
    }
  };

  const onError = (errors) => {
    console.error(errors);
  };
  
  return (
    <Container>
      <Grid className="cardStyle boxShadow">
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
              {...register("userName", { required: true })}
            />
            {errors.userName && <p>{errors.userName.message}</p>}
            <FormControl fullWidth style={{ marginTop: 20 }}>
              <InputLabel id="selGender">Gender</InputLabel>
              <Select
                labelId="selGender"
                id="selGenderCat"
                label="Gender"
                // onChange={(e) => {
                //   setGender(e.target.value);
                // }}
                {...register("selGenderCat", { required: true })}
              >
                <MenuItem value={"sel"}>Select</MenuItem>
                <MenuItem value={"male"}>Male</MenuItem>
                <MenuItem value={"female"}>Female</MenuItem>
                <MenuItem value={"transgender"}>Transgender</MenuItem>
              </Select>
            </FormControl>
            {errors.selGenderCat && <p>{errors.selGenderCat.message}</p>}
            <TextField
              style={{ marginTop: 20 }}
              id="emailId"
              fullWidth={true}
              label="Email Id"
              variant="outlined"
              {...register("emailId", { required: true })}
            />
            {errors.emailId && <p>{errors.emailId.message}</p>}
            <TextField
              style={{ marginTop: 20 }}
              id="mobileNo"
              fullWidth={true}
              label="Mobile Number"
              variant="outlined"
              {...register("mobileNo", { required: true })}
            />
            {errors.mobileNo && <p>{errors.mobileNo.message}</p>}
            <TextField
              style={{ marginTop: 20 }}
              id="userAge"
              fullWidth={true}
              label="Age"
              variant="outlined"
              type="number"
              {...register("userAge", { required: true })}
            />
            {errors.userAge && <p>{errors.userAge.message}</p>}
            <TextField
              style={{ marginTop: 20 }}
              id="password"
              fullWidth={true}
              label="Password"
              variant="outlined"
              type="password"
              {...register("password", { required: true })}
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
            Sign Up
          </Button>
        </Card>
      </Grid>
    </Container>
  );
};

export default SignUp;
