import {
  useRadioGroup as MuiRadioButton,
  MyFormControlLabel,
  Radio,
} from "@mui/material";

const radioButton = () => {
  return (
    <MuiRadioButton name="use-radio-group" defaultValue="first">
      <MyFormControlLabel value="first" label="First" control={<Radio />} />
      <MyFormControlLabel value="second" label="Second" control={<Radio />} />
    </MuiRadioButton>
  );
};

export default radioButton;
