

import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const Add = () => {
  return (
    <>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '100%' },
          maxWidth: '400px',
          margin: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="product-name" label="Product Name" variant="outlined" fullWidth />
        <TextField id="description" label="Description" variant="outlined" fullWidth />
        <TextField id="price" label="Price" variant="outlined" fullWidth />
        <TextField id="category" label="Category" variant="outlined" fullWidth />
        <Stack spacing={2} direction="row" sx={{ mt: 2 }}>
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </Stack>
      </Box>
    </>
  );
}

export default Add;