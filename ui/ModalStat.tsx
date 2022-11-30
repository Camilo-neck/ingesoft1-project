import * as React from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import IconButton from '@mui/material/IconButton';
import { blue, red } from '@mui/material/colors';
import PieChart from './PieChart';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const ButtonCust = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#FFB703',
    borderColor: '#000000',
    
    '&:hover': {
      backgroundColor: '#FFB703',
      borderColor: '#000000',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#EDC52F',
      borderColor: '#000000',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(237, 197, 47 ,.5)',
    },
  });
  
const ModalStat = ({
  open,
  onClose,
  data
}: {
  open: boolean;
  onClose: () => void;
  data: any;
}) => {
  if (!open) return null;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div
      onClick={onClose}
      className="fixed top-12 right-0 z-50 grid w-full h-full md:w-full justify-items-center"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="p-4 mr-8 w-9/12 h-5/6 border border-black bg-white shadow-2xl grid justify-items-stretch"
      >
        <IconButton
          color="secondary"
          aria-label="add an alarm"
          onClick={onClose}
          className ='justify-self-end mr-2'
        >
          <CancelIcon sx={{ color: red[500], fontSize: 25 }} />
        </IconButton>
        
        <p className="text-2xl font-medium leading-none mr-5">Estadísticas de los comentario</p>
        
        <PieChart data={data}/>
        
      </div>
    </div>
  );
};

export default ModalStat;
