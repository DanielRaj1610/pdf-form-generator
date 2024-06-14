import React, { useEffect, useState } from 'react';
import {
  BlobProvider,
  Document,
  Page,
  Text,
  View,
  Link,
  StyleSheet,
  render
} from '@react-pdf/renderer';
import { PDF } from '../pdf';
import { Card } from '@mui/material';
export const PdfPreview = ({ value }: { value: string }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Card variant='elevation' sx={{ width: '50%' }}>
      {isClient && (
        <BlobProvider document={PDF({ value: value })}>
          {({ url, error, loading }) => {
            if (loading) {
              return <h4>Loading....</h4>;
            }

            if (error) {
              return <h4>Facing issues....</h4>;
            }

            return <>{url && <iframe src={url} style={{ width: '100%', height: '100%' }} />}</>;
          }}
        </BlobProvider>
      )}
    </Card>
  );
};
