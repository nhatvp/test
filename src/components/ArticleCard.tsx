import React from 'react';
import { Card, Typography, Box } from '@mui/material';

type ArticleCardProps = {
  date: string;
  title: string;
  hashtags: string[];
  image: string;
};

const ArticleCard: React.FC<ArticleCardProps> = ({ date, title, hashtags, image }) => {
  return (
    <Card sx={{ position: 'relative', overflow: 'hidden', borderRadius: '0',boxShadow:'none' }}>
      <Box sx={{ position: 'relative', width: '100%', height: '150px' }}>
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            width: '50%',
            backgroundColor: '#FFCC21',
            color: 'white',
            textAlign: 'center',
            padding: '4px 0',
            boxSizing: 'border-box',
          }}
        >
          <Typography variant="body2" sx={{ fontFamily: 'Hiragino Kaku Gothic Pro', color: 'white' }}>
            {date}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ padding: '16px', backgroundColor: 'white', color: 'black' }}>
        <Typography variant="body1" sx={{ fontFamily: 'Hiragino Kaku Gothic Pro', fontWeight: 'bold', marginBottom: '8px' }}>
          {title}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {hashtags.map((hashtag, index) => (
            <Typography key={index} variant="body2" sx={{ fontFamily: 'Hiragino Kaku Gothic Pro', color: '#FF963C' }}>
              #{hashtag}
            </Typography>
          ))}
        </Box>
      </Box>
    </Card>
  );
};

export default ArticleCard;
