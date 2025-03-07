import React from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from '@mui/material';

function AnimatedIcon({ icon: Icon, tooltip, ...props }) {
  return (
    <Tooltip title={tooltip} arrow>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{ display: 'inline-flex' }}
        {...props}
      >
        <Icon />
      </motion.div>
    </Tooltip>
  );
}

export default AnimatedIcon; 