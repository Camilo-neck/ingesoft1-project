import React, { useState } from 'react'
import CancelIcon from '@mui/icons-material/Cancel';
import IconButton from '@mui/material/IconButton';
import { blue, red } from '@mui/material/colors';
import MultipleSelect from './MultipleSelect';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import { MenuItem } from '@mui/material';
import { storage } from 'config/firebase';
import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage';

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

const categories = [
    'Mercado',
    'Viveros',
    'Comida',
    'Comidas rapidas',
    'Ropa',
    'Bisuteria',
    'Papeleria',
    'Otros'
]

const ModalChaza = ({
    open,
    onClose,
    add,
    propietario
  }: {
    open: boolean;
    onClose: () => void;
    add: boolean;
    propietario: any;
  }) => {
    const [value, setValue] = useState('Controlled');
    const [name, setName] = useState('');
    const [ description, setDescription] = useState('');
    const [ubicacion, setUbicacion] = useState('');
    const [horario, setHorario] = useState('');
    const [telefono, setTelefono] = useState('');
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [pfp, setPfp] = useState<string>('');
    const [bgPic, setBgPic] = useState<string>('');
    if (!open) return null;
    // eslint-disable-next-line react-hooks/rules-of-hooks
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const chaza = {
        nombre: name,
        descripcion: description,
        ubicacion,
        horario,
        telefono,
        categorias: selectedCategories,
        calificacion: 0,
        comentarios: [],
        reportes: [],
        propietario: propietario.nombre,
        urlFotoChaza: pfp,
        urlImagen: bgPic
      }
      const body = {
        propietario,
        chaza
      }

      fetch('http://localhost:3000/api/addChaza', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
    }

  return (
    <div
        onClick={onClose}
        className="fixed top-4 mr-3 z-50 grid h-96 md:h-[30rem] lg:h-[43rem] border border-black bg-white shadow-2xl w-fit justify-items-center overflow-auto"
      >
        <form
          onClick={(e) => {
            e.stopPropagation();
          }}
          onSubmit={handleSubmit}
          className="p-4 md:mr-8 w-fit h-auto grid justify-items-stretch"
        >
          <IconButton
            color="secondary"
            aria-label="add an alarm"
            onClick={onClose}
            className ='justify-self-end mr-2'
          >
            <CancelIcon sx={{ color: red[500], fontSize: 25 }} />
          </IconButton>
          <p className="text-4xl font-medium leading-none justify-self-center mr-5">{(add)? "Añadir":"Editar"} Chaza</p>
          <p className="md:text-2xl sm:text-xl font-medium leading-none mt-3 mr-5">Datos de la chaza</p>
          <Box
            component="form"
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                id="outlined-multiline-static"
                label="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-11/12 m-1 mt-3"
              />
              <TextField
                id="outlined-multiline-static"
                label="Descripción de la chaza"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                multiline
                rows={2}
                className="w-11/12 m-1 mt-3"
              />
              <TextField
                id="outlined-multiline-static"
                label="Descripción de la ubicación"
                value={ubicacion}
                onChange={(e) => setUbicacion(e.target.value)}
                className="w-11/12 m-1 mt-3"
              />
              <TextField
                id="outlined-multiline-static"
                label="Teléfono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                type="tel"
                className="w-11/12 m-1 mt-3"
              />
              <TextField
                id="outlined-multiline-static"
                label="Horario de atención"
                value={horario}
                onChange={(e) => setHorario(e.target.value)}
                className="w-11/12 m-1 mt-3"
              />
              <p className='md:text-2xl sm:text-xl font-medium leading-none mt-3 mr-5'>Foto de perfil</p>
              <input type='file' accept='image/*' onChange={(e) => {
                const metadata = {
                  contentType: 'image/jpeg'
                };
                if (e.target.files) {
                  const file= e?.target?.files[0];
                  console.log(file);
                  const storageRef = ref(storage, 'images/' + file.name);
                  const uploadTask = uploadBytesResumable(storageRef, file, metadata);
                  if (file) uploadTask.on('state_changed', (snapshot: any) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                      case 'paused':
                        console.log('Upload is paused');
                        break;
                      case 'running':
                        console.log('Upload is running');
                        break;
                    }
                  }, (error) => {
                    switch (error.code) {
                      case 'storage/unauthorized':
                        console.log(error)
                        break;

                      case 'storage/canceled':
                        console.log(error)
                        break;

                      case 'storage/unknown':
                        console.log(error)
                        break;
                    }
                  }, () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL:any) => {
                      console.log('File available at', downloadURL);
                      setPfp(downloadURL);
                    });
                  })
                }
                ;
              }} className="w-11/12 m-1 mt-3" />
              <p className='md:text-2xl sm:text-xl font-medium leading-none mt-3 mr-5'>Imágen de fondo</p>
              <input type="file" accept='image/*' onChange={(e) => {
                const metadata = {
                  contentType: 'image/jpeg'
                };
                if (e.target.files) {
                  const file= e?.target?.files[0];
                  console.log(file);
                  const storageRef = ref(storage, 'images/' + file.name);
                  const uploadTask = uploadBytesResumable(storageRef, file, metadata);
                  if (file) uploadTask.on('state_changed', (snapshot: any) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                      case 'paused':
                        console.log('Upload is paused');
                        break;
                      case 'running':
                        console.log('Upload is running');
                        break;
                    }
                  }, (error) => {
                    switch (error.code) {
                      case 'storage/unauthorized':
                        console.log(error)
                        break;

                      case 'storage/canceled':
                        console.log(error)
                        break;

                      case 'storage/unknown':
                        console.log(error)
                        break;
                    }
                  }, () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL:any) => {
                      console.log('File available at', downloadURL);
                      setBgPic(downloadURL);
                    });
                  })
                }
                ;
              }} className="w-11/12 m-1 mt-3" />
            </div>
          </Box>
          <Select
          label='categorias'
          value={selectedCategories}
          onChange={(e) => setSelectedCategories(e.target.value as string[])}
          multiple
          className='mt-5'
          >
            {categories.map((category, index) => (
              <MenuItem key={index} value={category}>{category}</MenuItem>
            ))}
          </Select>
          <Stack spacing={2} direction="row" className='justify-self-end mt-4 mr-5'>
            <ButtonCust
            disabled={name === '' || description === '' || ubicacion === '' || telefono === '' || horario === '' || pfp === '' || bgPic === '' || selectedCategories.length === 0}
            type='submit' variant="contained">{(add)? "Añadir":"Editar"} chaza</ButtonCust>
          </Stack>
        </form>
      </div>
  )
}

export default ModalChaza


