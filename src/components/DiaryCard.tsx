import React from 'react';
import { Box, Typography } from '@mui/material';

type DiaryCardProps = {
  date: string;
  time: string;
  content: string;
};

const DiaryCard: React.FC<DiaryCardProps> = ({ date, time, content }) => {
  return (
    <Box sx={{ backgroundColor: 'white', color: 'black', padding: '16px', border: '1px solid black', marginBottom: '16px' ,height:200}}>
      <Typography variant="body2" sx={{ fontFamily: 'Hiragino Kaku Gothic Pro', fontWeight: 'bold', marginBottom: '4px' }}>
        {date} {time}
      </Typography>
      <Typography variant="body2" sx={{ fontFamily: 'Hiragino Kaku Gothic Pro' }}>
        {content}
      </Typography>
    </Box>
  );
};

export default DiaryCard;
