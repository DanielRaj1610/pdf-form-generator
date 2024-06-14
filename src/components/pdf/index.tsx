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
export const PDF = ({ value }: { value: string }) => (
  <Document>
    <Page wrap>
      <Text style={{ padding: 40 }}>{value}</Text>
    </Page>
  </Document>
);
