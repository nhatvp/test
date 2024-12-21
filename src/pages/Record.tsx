import React from 'react';
import { Container, CssBaseline } from '@mui/material';
import RecordPage from '../components/RecordPage';

const Record: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <CssBaseline />
      <RecordPage />
    </Container>
  );
};

export default Record;
