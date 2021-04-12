import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import './App.css';

function Drawer() {
  const defaultValues = {
    name: "",
    age: 0,
    gender: "",
    os: "",
    favoriteNumber: 0,
  };
  const [formValues, setFormValues] = useState(defaultValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleSliderChange = (name) => (e, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <Grid container alignItems="center" justify="center" direction="column">
          <Grid item style={{marginTop: 10}}>
            <Typography variant="h4">Member 1</Typography>
          </Grid>
          <Grid item>
            <TextField
              id="name-input"
              name="A1"
              label="Area of cross-section"
              type="text"
              value={formValues.name}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item>
            <TextField
              id="name-input"
              name="E1"
              label="Young's Modulus"
              type="text"
              value={formValues.name}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item>
            <TextField
              id="name-input"
              name="I1"
              label="Moment of Inertia"
              type="text"
              value={formValues.name}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item>
            <TextField
              id="name-input"
              name="L1"
              label="Length"
              type="text"
              value={formValues.name}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item style={{marginTop: 10}}>
            <Typography variant="h4">Member 2</Typography>
          </Grid>
          <Grid item>
            <TextField
              id="name-input"
              name="A2"
              label="Area of cross section"
              type="text"
              value={formValues.name}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item>
            <TextField
              id="name-input"
              name="E2"
              label="Young's modulus"
              type="text"
              value={formValues.name}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item>
            <TextField
              id="name-input"
              name="I2"
              label="Moment of inertia"
              type="text"
              value={formValues.name}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item>
            <TextField
              id="name-input"
              name="L2"
              label="Length"
              type="text"
              value={formValues.name}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item style={{marginTop: 10}}>
            <Typography variant="h4">Member 3</Typography>
          </Grid>
          <Grid item>
            <TextField
              id="name-input"
              name="A3"
              label="Area of cross section"
              type="text"
              value={formValues.name}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item>
            <TextField
              id="name-input"
              name="E3"
              label="Young's modulus"
              type="text"
              value={formValues.name}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item>
            <TextField
              id="name-input"
              name="I3"
              label="Moment of inertia"
              type="text"
              value={formValues.name}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item>
            <TextField
              id="name-input"
              name="L3"
              label="Length"
              type="text"
              value={formValues.name}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item style={{marginTop: 10}}>
            <Typography variant="h4">Member 4</Typography>
          </Grid>
          <Grid item>
            <TextField
              id="name-input"
              name="A4"
              label="Area"
              type="text"
              value={formValues.name}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item>
            <TextField
              id="name-input"
              name="E4"
              label="Young's modulus"
              type="text"
              value={formValues.name}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item>
            <TextField
              id="name-input"
              name="I4"
              label="Moment of inertia"
              type="text"
              value={formValues.name}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item>
            <TextField
              id="name-input"
              name="L4"
              label="Length"
              type="text"
              value={formValues.name}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item style={{marginTop: 10}}>
            <Typography variant="h4">Member 5</Typography>
          </Grid>
          <Grid item>
            <TextField
              id="name-input"
              name="A5"
              label="Area of cross section"
              type="text"
              value={formValues.name}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item>
            <TextField
              id="name-input"
              name="E5"
              label="Young's modulus"
              type="text"
              value={formValues.name}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item>
            <TextField
              id="name-input"
              name="I5"
              label="Young's modulus"
              type="text"
              value={formValues.name}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item>
            <TextField
              id="name-input"
              name="L5"
              label="Length"
              type="text"
              value={formValues.name}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item style={{marginTop: 10}}>
            <Typography variant="h4">Global</Typography>
          </Grid>
          <Grid item>
            <TextField
              id="name-input"
              name="W1"
              label="W1"
              type="text"
              value={formValues.name}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item>
            <TextField
              id="name-input"
              name="W2"
              label="W2"
              type="text"
              value={formValues.name}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item>
            <TextField
              id="name-input"
              name="L_AG"
              label="Length of AG"
              type="text"
              value={formValues.name}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item>
            <TextField
              id="name-input"
              name="L_GB"
              label="Length of GB"
              type="text"
              value={formValues.name}
              onChange={handleInputChange}
            />
          </Grid>
          <Button variant="contained" color="primary" type="submit" style={{ marginTop: 10 }}>
            Submit
        </Button>
        </Grid>
      </form>
    </div>
  );
}

export default Drawer;
