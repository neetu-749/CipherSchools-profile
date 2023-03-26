import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function UserForm() {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel  style={{paddingBottom:10}}>
          
        </InputLabel>
        <NativeSelect
          defaultValue={'none'}
          inputProps={{
            name: 'courses',
            id: 'uncontrolled-native',
          }}
        >
          <option value={0}>Browse</option>
          <option value={1}>App Development</option>
          <option value={2}>Web Development</option>
          <option value={3}>Game Development</option>
          <option value={4}>Data Structures</option>
          <option value={5}>Programming</option>
          <option value={6}>Machine Learning</option>
          <option value={7}>Data Science</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}