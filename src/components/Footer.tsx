import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#414141',
        color: 'white',
        padding: '24px 56px',
        textAlign: 'left',
        fontFamily: 'Hiragino Kaku Gothic Pro',
        fontSize: '11px',
        fontWeight: 300,
        lineHeight: '16px',
        letterSpacing: '0.033px',
        textUnderlinePosition: 'from-font',
        textDecorationSkipInk: 'none',
      }}

    >
      <Typography variant="body2" component="p">
        <Link
          href="#"
          color="inherit"
          sx={{
            margin: '0 8px',
            textDecoration: 'none', 
            '&:hover': {
              textDecoration: 'underline', 
            },
          }}
        >
          会員登録
        </Link>
        <Link
          href="#"
          color="inherit"
          sx={{
            margin: '0 8px',
            textDecoration: 'none', 
            '&:hover': {
              textDecoration: 'underline', 
            },
          }}
        >
          運営会社
        </Link>
        <Link
          href="#"
          color="inherit"
          sx={{
            margin: '0 8px',
            textDecoration: 'none', 
            '&:hover': {
              textDecoration: 'underline', 
            },
          }}
        >
          利用規約
        </Link>
        <Link
          href="#"
          color="inherit"
          sx={{
            margin: '0 8px',
            textDecoration: 'none', 
            '&:hover': {
              textDecoration: 'underline', 
            },
          }}
        >
          個人情報の取扱について
        </Link>
        <Link
          href="#"
          color="inherit"
          sx={{
            margin: '0 8px',
            textDecoration: 'none', 
            '&:hover': {
              textDecoration: 'underline', 
            },
          }}
        >
          特定商取引法に基づく表記
        </Link>
        <Link
          href="#"
          color="inherit"
          sx={{
            margin: '0 8px',
            textDecoration: 'none', 
            '&:hover': {
              textDecoration: 'underline', 
            },
          }}
        >
          お問い合わせ
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
