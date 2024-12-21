import React from 'react';
import { Box,  Grid } from '@mui/material';
import RecordCards from '../components/RecordCards';
import BodyRecordGraph from '../components/BodyRecordGraph';
import MyExerciseRecord from '../components/MyExerciseRecord';
import DiaryList from '../components/DiaryList';

const RecordPage: React.FC = () => {
  return (
    <Box sx={{color: 'white', padding: '16px' }}>
      
      <RecordCards />
      
      <Grid container spacing={2}>
        <Grid item xs={12} id="body-record">
          <BodyRecordGraph />
        </Grid>
        
        <Grid item xs={12} id="my-exercise">
          <MyExerciseRecord />
        </Grid>
        
        <Grid item xs={12} id="my-diary">
          <DiaryList />
        </Grid>
      </Grid>
    </Box>
  );
};

export default RecordPage;
