import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import ProductCard from './ProductCard';
import { mockProducts } from '../assets/data/mockup';

const ProductList: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(8);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" sx={{paddingBottom:8}}>
      <Box display="flex" flexWrap="wrap" justifyContent="center" width="80%">
        {mockProducts.slice(0, visibleCount).map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </Box>
      {visibleCount < mockProducts.length && (
        <Button
          variant="contained"
          onClick={handleShowMore}
          sx={{
            mt: 2,
            background: 'linear-gradient(90deg, #FFCC21, #FF963C)',
            color: 'white',
            '&:hover': {
              background: 'linear-gradient(90deg, #FFCC21, #FF963C)',
              opacity: 0.8,
            },
          }}
        >
          記録をもっと見る
        </Button>
      )}
    </Box>
  );
};

export default ProductList;
