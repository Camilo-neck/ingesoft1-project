import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import StarBorderIcon from '@mui/icons-material/StarBorder';

import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    borderColor: '#000000',
      borderWidth: 1,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      
      backgroundColor: theme.palette.mode === 'light' ? 'FFD05B' : 'cyan',
    },
  }));


function ProgressBar({stars, progress}:{stars: number,progress: number}) {
    
  
    return (
      <Box sx={{ width: '85%' }}>
        <div className='flex flex-column items-center'>
            <div className='basis-1/12 flex flex-column'>
                <p className='text-xl font-medium'>{stars}</p>
                <StarBorderIcon />
            </div>
            
            <BorderLinearProgress variant="determinate" value={progress} className='basis-11/12'/>
        </div>
        
      </Box>
    );
}

export default ProgressBar