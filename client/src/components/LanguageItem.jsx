import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

function LanguageItem({label}) {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip label={label} variant="outlined" onClick={handleClick} />
    </Stack>
  );
}

export default LanguageItem;