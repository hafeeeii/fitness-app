import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const ExerciseCard = ({exercise}) => {
  return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading='auto' />

        <Stack direction='row'>
    <Button sx={{ml:'21px',backgroundColor:'#ffa9a9',color:'#fff',textTransform:'capitalize',fontSize:'14px',borderRadius:'20px'}}>
    {exercise.bodyPart}
    </Button>
      
    <Button sx={{ml:'21px',backgroundColor:'#fcc757',color:'#fff',textTransform:'capitalize',fontSize:'14px',borderRadius:'20px'}}>
    {exercise.target}
    </Button>
        </Stack>
        <Typography ml='21px' color='#000' fontWeight='bold' textTransform='capitalize' mt='11px' pb='10px' fontSize='22px' >
            {exercise.name}
        </Typography>
    </Link>
  )
}

export default ExerciseCard