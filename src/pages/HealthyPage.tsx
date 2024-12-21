import React from 'react';
import { Container, CssBaseline } from '@mui/material';
import RecommendPage from '../components/RecommendPage';

const HealthyPage: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <CssBaseline />
      <RecommendPage />
    </Container>
  );
};

export default HealthyPage;
