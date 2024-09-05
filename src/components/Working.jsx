import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faShieldAlt, faSearch, faFilter } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

// Styled component for the dotted line
const DottedLine = styled(motion.div)`
  width: 100px;
  height: 2px;
  background: repeating-linear-gradient(
    90deg,
    yellow,
    yellow 5px,
    transparent 5px,
    transparent 10px
  );
  animation: dash 2s linear infinite;
  margin: 0 10px; 

  @keyframes dash {
    to {
      background-position: 100%;
    }
  }
`;

const IconWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Working = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <IconWrapper
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <FontAwesomeIcon icon={faGlobe} size="3x" alt="Internet" /> Internet
      </IconWrapper>

      <DottedLine />

      <IconWrapper
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <FontAwesomeIcon icon={faShieldAlt} size="3x" alt="Security" />Security
      </IconWrapper>

      <DottedLine />

      <IconWrapper
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <FontAwesomeIcon icon={faSearch} size="3x" alt="Detection" /> Detection
      </IconWrapper>

      <DottedLine />

      <IconWrapper
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 3 }}
      >
        <FontAwesomeIcon icon={faFilter} size="3x" alt="Filtering" /> Filtering
      </IconWrapper>
    </div>
  );
};

export default Working;
