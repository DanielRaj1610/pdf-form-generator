'use client';

import { useState } from 'react';
import { PdfPreview } from '../pdfPreview';
import { Card } from '@mui/material';

export const Generator = () => {
  const [value, setValue] = useState('hey!');
  return (
    <div
      style={{
        display: 'flex',
        gap: '15px',
        // justifyContent: "space-between",
        height: '100vh'
      }}
    >
      <Card variant='elevation' sx={{ width: '50%' }}>
        <input value={value} type='text' onChange={(e) => setValue(e.target.value)} />
      </Card>
      <PdfPreview value={value} />
    </div>
  );
};
