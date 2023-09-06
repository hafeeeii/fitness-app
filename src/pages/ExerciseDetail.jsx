import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";
import { useParams } from "react-router-dom";
import {
  exerciseOptions,
  fetchData,
  youtubeOptions,
} from "../components/utils/fetchData";

const ExerciseDetail = () => {
  const { id } = useParams();
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetExercise, setTargetExercise] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);

      const videoDetailData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`,
        youtubeOptions
      );
      setExerciseVideos(videoDetailData.contents);

      const targetMuscleExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
        exerciseOptions
      );
      setTargetExercise(targetMuscleExercisesData);

      const equipmentMuscleExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
        exerciseOptions
      );
      setEquipmentExercises(equipmentMuscleExercisesData);
    };
    fetchExerciseData();

    window.scrollTo(0, 0)
  }, [id]);

  if (!exerciseDetail) return <div>No Data</div>;

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        equipmentExercises={equipmentExercises}
        targetExercises={targetExercise}
      />
    </Box>
  );
};

export default ExerciseDetail;
