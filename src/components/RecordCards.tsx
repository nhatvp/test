import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import bodyRecordImage from '../assets/pictures/body_record.jpg';
import myExerciseImage from '../assets/pictures/my_exercise.jpg';
import myDiaryImage from '../assets/pictures/my_diary.jpg';

const RecordCards: React.FC = () => {
  const handleScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box display="flex" justifyContent="space-between" marginBottom="16px">
      {/* BODY RECORD Card */}
      <Card
        onClick={() => handleScrollTo('body-record')}
        sx={{ width: '30%', border: '2px solid yellow', position: 'relative', padding: '16px', boxSizing: 'border-box', backgroundColor: '#FFCC21', cursor: 'pointer' }}
      >
        <Box sx={{ position: 'relative', width: '100%' }}>
          <img src={bodyRecordImage} alt="Body Record" style={{ width: '100%', height: 'auto' }} />
          <CardContent
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              color: 'white',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '16px',
              boxSizing: 'border-box',
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Hiragino Kaku Gothic Pro",
                fontSize: "16px",
                fontWeight: 700,
                lineHeight: "24px",
                letterSpacing: "0.033px",
                color: "#FFCC21",
              }}
            >
              BODY RECORD
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "Hiragino Kaku Gothic Pro",
                fontSize: "12px",
                fontWeight: 400,
                lineHeight: "18px",
                letterSpacing: "0.033px",
                marginTop: "8px",
                backgroundColor: "#FF963C",
                padding: '4px',
              }}
            >
              自分のカラダの記録
            </Typography>
          </CardContent>
        </Box>
      </Card>

      {/* MY EXERCISE Card */}
      <Card
        onClick={() => handleScrollTo('my-exercise')}
        sx={{ width: '30%', border: '2px solid yellow', position: 'relative', padding: '16px', boxSizing: 'border-box', backgroundColor: '#FFCC21', cursor: 'pointer' }}
      >
        <Box sx={{ position: 'relative', width: '100%' }}>
          <img src={myExerciseImage} alt="My Exercise" style={{ width: '100%', height: 'auto' }} />
          <CardContent
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              color: 'white',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '16px',
              boxSizing: 'border-box',
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Hiragino Kaku Gothic Pro",
                fontSize: "16px",
                fontWeight: 700,
                lineHeight: "24px",
                letterSpacing: "0.033px",
                color: "#FFCC21",
              }}
            >
              MY EXERCISE
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "Hiragino Kaku Gothic Pro",
                fontSize: "12px",
                fontWeight: 400,
                lineHeight: "18px",
                letterSpacing: "0.033px",
                marginTop: "8px",
                backgroundColor: "#FF963C",
                padding: '4px',
              }}
            >
              自分の運動の記録
            </Typography>
          </CardContent>
        </Box>
      </Card>

      {/* MY DIARY Card */}
      <Card
        onClick={() => handleScrollTo('my-diary')}
        sx={{ width: '30%', border: '2px solid yellow', position: 'relative', padding: '16px', boxSizing: 'border-box', backgroundColor: '#FFCC21', cursor: 'pointer' }}
      >
        <Box sx={{ position: 'relative', width: '100%' }}>
          <img src={myDiaryImage} alt="My Diary" style={{ width: '100%', height: 'auto' }} />
          <CardContent
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              color: 'white',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '16px',
              boxSizing: 'border-box',
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Hiragino Kaku Gothic Pro",
                fontSize: "16px",
                fontWeight: 700,
                lineHeight: "24px",
                letterSpacing: "0.033px",
                color: "#FFCC21",
              }}
            >
              MY DIARY
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "Hiragino Kaku Gothic Pro",
                fontSize: "12px",
                fontWeight: 400,
                lineHeight: "18px",
                letterSpacing: "0.033px",
                marginTop: "8px",
                backgroundColor: "#FF963C",
                padding: '4px',
              }}
            >
              自分の日記
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
};

export default RecordCards;
