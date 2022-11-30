import React, { useState } from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import IconButton from '@mui/material/IconButton';
import { blue, red } from '@mui/material/colors';
import MultipleSelect from './MultipleSelect';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';

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
  
  const ModalRating = ({
    open,
    onClose,
    uid,
    cid,
    onComment,
  }: {
    open: boolean;
    onClose: () => void;
    onComment: (comentario: any) => void;
    uid: string;
    cid: string;
  }) => {
    const [value, setValue] = useState('Controlled');
    const [rating, setRating] = useState<number | null>(0);
    const [comment, setComment] = useState('');
    if (!open) return null;
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      // eslint-disable-next-line no-console
      const comentario = {
        chazaId: cid,
        estrellas: rating,
        contenido: comment,
        fecha: new Date(),
        upvotes: 0,
        usuario: uid
      }
      console.log(comentario);
      onComment(comentario);
      setRating(0);
      setComment('');
      onClose();
    }
  
    return (
      <div
        onClick={onClose}
        className="fixed top-20 right-0 z-50 grid w-full md:w-full justify-items-center"
      >
        <form
          onClick={(e) => {
            e.stopPropagation();
          }}
          onSubmit={handleSubmit}
          className="p-4 mr-8 w-2/3 h-auto border border-black bg-white shadow-2xl grid justify-items-stretch"
        >
          <IconButton
            color="secondary"
            aria-label="add an alarm"
            onClick={() => {onClose(); setRating(0); setComment('');}}
            className ='justify-self-end mr-2'
          >
            <CancelIcon sx={{ color: red[500], fontSize: 25 }} />
          </IconButton>
          <p className="text-4xl font-medium leading-none justify-self-center mr-5">Califica la Chaza</p>
          <p className="md:text-2xl sm:text-xl font-medium leading-none mt-3 mr-5">¿Cuántas estrellas le das a la chaza?</p>
          <Stack spacing={1} className="justify-self-center">
            <Rating name="half-rating-read" onChange={(e, new_value) => setRating(new_value)} value={rating} precision={0.5} size="large"/>
          </Stack>
          <p className="md:text-2xl sm:text-xl font-medium leading-none mt-3 mr-5">Comenta tu experiencia</p>
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
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-11/12 m-1 mt-3"
                disabled={rating === 0}
              />  
            </div>
          </Box>
          <Stack spacing={2} direction="row" className='justify-self-end mt-4 mr-5'>
            <ButtonCust type='submit' variant="contained" disabled={rating === 0}>Finalizar calificación</ButtonCust>
          </Stack>
        </form>
      </div>
    );
  };
  

export default ModalRating