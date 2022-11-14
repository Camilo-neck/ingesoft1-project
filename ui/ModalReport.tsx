import * as React from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import IconButton from '@mui/material/IconButton';
import { blue, red } from '@mui/material/colors';
import MultipleSelect from './MultipleSelect';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
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
  
const ModalReport = ({
  open,
  onClose,
  chaza
}: {
  open: boolean;
  onClose: () => void;
  chaza: boolean;
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
      className="fixed top-20 right-0 z-50 grid w-full md:w-full justify-items-center"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="p-4 mr-8 w-2/3 border border-black bg-white shadow-2xl grid justify-items-stretch"
      >
        <IconButton
          color="secondary"
          aria-label="add an alarm"
          onClick={onClose}
          className ='justify-self-end mr-2'
        >
          <CancelIcon sx={{ color: red[500], fontSize: 25 }} />
        </IconButton>
        <p className="text-4xl font-medium leading-none justify-self-center mr-5">Reportar {(chaza)? "chaza":"comentario"}</p>
        <p className="text-2xl font-medium leading-none mt-3 mr-5">Causa del reporte</p>
        <MultipleSelect chaza={chaza}/>
        <p className="text-2xl font-medium leading-none mt-3 mr-5">Detalles del reporte</p>
        <Box
          component="form"
          
          noValidate
          autoComplete="off"
          
        >
          <div>
            <TextField
              id="outlined-multiline-static"
              label="Detalles"
              multiline
              rows={5}
              defaultValue=""
              className="w-11/12 m-1 mt-3"
            />
          </div>
        </Box>
        <Stack spacing={2} direction="row" className='justify-self-end mt-4 mr-5'>
          <ButtonCust variant="contained">Finalizar denuncia</ButtonCust>
        </Stack>
      </div>
    </div>
  );
};

export default ModalReport;
