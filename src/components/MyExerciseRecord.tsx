import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const MyExerciseRecord: React.FC = () => {
  const exercises = [
    {
      description: "家事全般 (立位・軽い)",
      duration: "10 min",
      calories: "26kcal",
    },
    {
      description: "家事全般 (立位・軽い)",
      duration: "10 min",
      calories: "26kcal",
    },
    {
      description: "家事全般 (立位・軽い)",
      duration: "10 min",
      calories: "26kcal",
    },
    {
      description: "家事全般 (立位・軽い)",
      duration: "10 min",
      calories: "26kcal",
    },
    {
      description: "家事全般 (立位・軽い)",
      duration: "10 min",
      calories: "26kcal",
    },
    {
      description: "家事全般 (立位・軽い)",
      duration: "10 min",
      calories: "26kcal",
    },
    {
      description: "家事全般 (立位・軽い)",
      duration: "10 min",
      calories: "26kcal",
    },
    {
      description: "家事全般 (立位・軽い)",
      duration: "10 min",
      calories: "26kcal",
    },
    {
      description: "家事全般 (立位・軽い)",
      duration: "10 min",
      calories: "26kcal",
    },
    {
      description: "家事全般 (立位・軽い)",
      duration: "10 min",
      calories: "26kcal",
    },
    {
      description: "家事全般 (立位・軽い)",
      duration: "10 min",
      calories: "26kcal",
    },
    {
      description: "家事全般 (立位・軽い)",
      duration: "10 min",
      calories: "26kcal",
    },
    {
      description: "家事全般 (立位・軽い)",
      duration: "10 min",
      calories: "26kcal",
    },
    {
      description: "家事全般 (立位・軽い)",
      duration: "10 min",
      calories: "26kcal",
    },
    {
      description: "家事全般 (立位・軽い)",
      duration: "10 min",
      calories: "26kcal",
    },
    {
      description: "家事全般 (立位・軽い)",
      duration: "10 min",
      calories: "26kcal",
    },
    {
      description: "家事全般 (立位・軽い)",
      duration: "10 min",
      calories: "26kcal",
    },
    {
      description: "家事全般 (立位・軽い)",
      duration: "10 min",
      calories: "26kcal",
    },
    {
      description: "家事全般 (立位・軽い)",
      duration: "10 min",
      calories: "26kcal",
    },
    {
      description: "家事全般 (立位・軽い)",
      duration: "10 min",
      calories: "26kcal",
    },
    {
      description: "家事全般 (立位・軽い)",
      duration: "10 min",
      calories: "26kcal",
    },
    {
      description: "家事全般 (立位・軽い)",
      duration: "10 min",
      calories: "26kcal",
    },
    {
      description: "家事全般 (立位・軽い)",
      duration: "10 min",
      calories: "26kcal",
    },
    {
      description: "家事全般 (立位・軽い)",
      duration: "10 min",
      calories: "26kcal",
    },
    {
      description: "家事全般 (立位・軽い)",
      duration: "10 min",
      calories: "26kcal",
    },
    {
      description: "家事全般 (立位・軽い)",
      duration: "10 min",
      calories: "26kcal",
    },
    {
      description: "家事全般 (立位・軽い)",
      duration: "10 min",
      calories: "26kcal",
    },
    {
      description: "家事全般 (立位・軽い)",
      duration: "10 min",
      calories: "26kcal",
    },
    {
      description: "家事全般 (立位・軽い)",
      duration: "10 min",
      calories: "26kcal",
    },
    {
      description: "家事全般 (立位・軽い)",
      duration: "10 min",
      calories: "26kcal",
    },
  ];

  const half = Math.ceil(exercises.length / 2);
  const leftColumn = exercises.slice(0, half);
  const rightColumn = exercises.slice(half);

  return (
    <Box
      sx={{
        backgroundColor: "#414141",
        color: "white",
        padding: "16px",
        borderRadius: "8px",
        marginTop: "16px",
        maxHeight: "300px",
        overflowY: "auto",
        scrollbarColor: "#FFCC21 #414141",
        scrollbarWidth: "thin",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "left",
          gap: 4,
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Hiragino Kaku Gothic Pro",
            marginBottom: "8px",
            textAlign: "left",
          }}
        >
          MY EXERCISE
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Hiragino Kaku Gothic Pro",
            marginBottom: "16px",
            textAlign: "left",
          }}
        >
          2021.05.21
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          {leftColumn.map((exercise, index) => (
            <Box key={index} sx={{ marginBottom: "8px" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{
                    width: "8px",
                    height: "8px",
                    backgroundColor: "white",
                    borderRadius: "50%",
                    marginRight: "8px",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Hiragino Kaku Gothic Pro",
                      fontSize: "15px",
                      fontWeight: "bold",
                    }}
                  >
                    {exercise.description}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Hiragino Kaku Gothic Pro",
                      fontSize: "15px",
                      color: "#FFCC21",
                    }}
                  >
                    {exercise.duration}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  marginTop: "4px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Hiragino Kaku Gothic Pro",
                    fontSize: "15px",
                    color: "#FFCC21",
                  }}
                >
                  {exercise.calories}
                </Typography>
              </Box>
              <Box
                sx={{
                  height: "1px",
                  backgroundColor: "white",
                  marginTop: "8px",
                }}
              ></Box>
            </Box>
          ))}
        </Grid>
        <Grid item xs={6}>
          {rightColumn.map((exercise, index) => (
            <Box key={index} sx={{ marginBottom: "8px" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{
                    width: "8px",
                    height: "8px",
                    backgroundColor: "white",
                    borderRadius: "50%",
                    marginRight: "8px",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Hiragino Kaku Gothic Pro",
                      fontSize: "15px",
                      fontWeight: "bold",
                    }}
                  >
                    {exercise.description}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Hiragino Kaku Gothic Pro",
                      fontSize: "15px",
                    }}
                  >
                    {exercise.duration}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  marginTop: "4px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Hiragino Kaku Gothic Pro",
                    fontSize: "15px",
                    color: "#FFCC21",
                  }}
                >
                  {exercise.calories}
                </Typography>
              </Box>
              <Box
                sx={{
                  height: "1px",
                  backgroundColor: "white",
                  marginTop: "8px",
                }}
              ></Box>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default MyExerciseRecord;
