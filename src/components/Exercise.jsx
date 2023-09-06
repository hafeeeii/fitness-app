import { Box, Pagination, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ExerciseCard from './ExerciseCard'
import {fetchData,exerciseOptions} from './utils/fetchData'

const Exercise = ({exercises,bodyPart,setExercises}) => {

  const [currentPage,setCurrentPage] = useState(1)
  const exercisesPerPage = 6

useEffect(()=>{
  const fetchExercisesData = async () =>{
    let exerciseData = []
    if(bodyPart === 'all'){
      exerciseData = await fetchData( "https://exercisedb.p.rapidapi.com/exercises",
      exerciseOptions)
    }else{
      exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
      exerciseOptions)
    }
    setExercises(exerciseData)
  }
  fetchExercisesData()

},
[bodyPart])




  const indexOfLastExercise = currentPage * exercisesPerPage
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage
  const currentExercise = exercises.slice(indexOfFirstExercise,indexOfLastExercise)
  const paginate = (e,value) =>{
    setCurrentPage(value)
    window.scrollTo({top:1800,behavior:'smooth'})
  }

  return (
   <Box id='exercises'
   sx={{mt:{lg:'110px'}}}
   mt='50px'
   p='20px'>
    <Typography variant='h3' mb='46px'>
      Showing Results
    </Typography>
    <Stack direction='row'
    flexWrap='wrap'
    justifyContent='center'
    sx={{gap:{lg:'110px',xs:'50px'}}}
  
    >
     {currentExercise.map((exercise,index)=>(
      <ExerciseCard exercise={exercise} key={index}/>
     ))}
    </Stack>
    <Stack alignItems='center' mt='70px'>
      {exercises.length > exercisesPerPage && (
        <Pagination
        color="standard"
        shape="rounded"
        defaultPage={1}
        count={Math.ceil(exercises.length / exercisesPerPage)}
        page={currentPage}
        onChange={paginate}
        size="large"
      />
      )}
    </Stack>
   </Box>
  )
}

export default Exercise