import { Box } from "@mui/material";
import React, { useState } from "react";
import Hero from "../components/Hero";
import SearchExercise from "../components/SearchExercise";
import Exercise from "../components/Exercise";

export const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);

  return (
    <Box>
      <Hero />
      <SearchExercise
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        setExercises={setExercises}
      />
      <Exercise
        bodyPart={bodyPart}
        exercises={exercises}
        setExercises={setExercises}
      />
    </Box>
  );
};
