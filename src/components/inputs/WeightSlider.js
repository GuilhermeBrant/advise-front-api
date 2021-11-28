import React from 'react';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';

export function WeightSlider({name, onChange}) {
  const marks = [
    {
      value: 0,
      label: 'Indiferente',
    },
    {
      value: 10,
      label: 'Importante',
    },
  ];
  

    return (
      <Box sx={{ width: 100 }}>
      <Slider
        onChange={onChange}
        name={name}
        defaultValue={0}
        step={1}
        marks={marks}
        min={0}
        max={10}
        valueLabelDisplay="auto"
      />
      </Box>
    );
  }
