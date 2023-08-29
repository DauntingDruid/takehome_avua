import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  'Profile',
  'Contact Info',
  'Preferences',
  'Experience',
  'Education',
  'Additional',
  'Download',
];

export const HorizontalStepper = () => {
  return (
    <Box sx={{ width: '100%'  }}>
      <Stepper activeStep={3} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
