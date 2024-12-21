import React, { useRef, useState } from 'react';
import { Box } from '@mui/material';
import { ReactComponent as Arrow } from "../assets/svgs/arrow.svg";

const ScrollToTopButton: React.FC = () => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleScrollToTop = () => {
    if (!isDragging) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleMouseDown = (event: React.MouseEvent) => {
    const element = buttonRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    element.setAttribute('data-drag-start-x', String(event.clientX - rect.left));
    element.setAttribute('data-drag-start-y', String(event.clientY - rect.top));

    setIsDragging(true);
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    const element = buttonRef.current;
    if (!element || !isDragging || (event.clientX === 0 && event.clientY === 0)) return;

    const dragStartX = Number(element.getAttribute('data-drag-start-x'));
    const dragStartY = Number(element.getAttribute('data-drag-start-y'));

    element.style.left = `${event.clientX - dragStartX}px`;
    element.style.top = `${event.clientY - dragStartY}px`;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <Box
      ref={buttonRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onClick={handleScrollToTop}
      sx={{
        position: 'fixed',
        bottom: '16px',
        right: '16px',
        zIndex: 1000,
        width: '50px',
        height: '50px',
        backgroundColor: 'white',
        border: '1px solid #ddd',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
        transition: 'transform 0.2s ease',
        '&:hover': {
          transform: 'scale(1.1)',
        },
      }}
    >
      <Arrow style={{ width: '24px', height: '24px', fill: '#FF963C' }} />
    </Box>
  );
};

export default ScrollToTopButton;
