import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const causesChaza = [
    'El perfil de la chaza es falso',
    'Chaza no está en funcionamiento',
    'Se publica información falsa',
    'Otra'
]
const causesComment = [
    'Comentario con información falsa',
    'Lenguaje inapropiado',
    'Mencion a una persona',
    'Otra'
]
export default function SelectAutoWidth({chaza}:{chaza:boolean}) {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div className='w-9/12 '>
      <FormControl className='m-1 mt-3 w-11/12'>
        <InputLabel id="demo-simple-select-autowidth-label">Causa</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Causa"
          className="w-10/12"
        >
            <MenuItem value="">
            <em>Ninguna</em>
          </MenuItem>
          {((chaza)? causesChaza:causesComment).map((cause) => (
            <MenuItem
              key={cause}
              value={cause}
            >
              {cause}
            </MenuItem>
          
          ))}
           
        </Select>
      </FormControl>
    </div>
  );
}