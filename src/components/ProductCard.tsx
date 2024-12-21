import React from 'react';
import { Card, Typography, Box } from '@mui/material';

interface ProductCardProps {
  tag: string;
  date: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ tag, date, image }) => {
  return (
    <Card sx={{ width: 250, height: 250, margin: 1, position: 'relative' }}>
      <Box
        component="img"
        src={image}
        alt={tag}
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
        <Typography variant="subtitle1" color="inherit">
          {date}.{tag}
        </Typography>
      </Box>
    </Card>
  );
};

export default ProductCard;
