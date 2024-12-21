import React, { useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import DiaryCard from "./DiaryCard";

const DiaryList: React.FC = () => {
  const diaryEntries = [
    {
      date: "2021.05.21",
      time: "23:25",
      content:
        "私の日記の記録が一部表示されます。テキストテキストテキストテキスト...",
    },
    {
      date: "2021.05.21",
      time: "23:25",
      content:
        "私の日記の記録が一部表示されます。テキストテキストテキストテキスト...",
    },
    {
      date: "2021.05.21",
      time: "23:25",
      content:
        "私の日記の記録が一部表示されます。テキストテキストテキストテキスト...",
    },
    {
      date: "2021.05.21",
      time: "23:25",
      content:
        "私の日記の記録が一部表示されます。テキストテキストテキストテキスト...",
    },
    {
      date: "2021.05.21",
      time: "23:25",
      content:
        "私の日記の記録が一部表示されます。テキストテキストテキストテキスト...",
    },
    {
      date: "2021.05.21",
      time: "23:25",
      content:
        "私の日記の記録が一部表示されます。テキストテキストテキストテキスト...",
    },
    {
      date: "2021.05.21",
      time: "23:25",
      content:
        "私の日記の記録が一部表示されます。テキストテキストテキストテキスト...",
    },
    {
      date: "2021.05.21",
      time: "23:25",
      content:
        "私の日記の記録が一部表示されます。テキストテキストテキストテキスト...",
    },
    {
      date: "2021.05.21",
      time: "23:25",
      content:
        "私の日記の記録が一部表示されます。テキストテキストテキストテキスト...",
    },
    {
      date: "2021.05.21",
      time: "23:25",
      content:
        "私の日記の記録が一部表示されます。テキストテキストテキストテキスト...",
    },
    {
      date: "2021.05.21",
      time: "23:25",
      content:
        "私の日記の記録が一部表示されます。テキストテキストテキストテキスト...",
    },
    {
      date: "2021.05.21",
      time: "23:25",
      content:
        "私の日記の記録が一部表示されます。テキストテキストテキストテキスト...",
    },
    {
      date: "2021.05.21",
      time: "23:25",
      content:
        "私の日記の記録が一部表示されます。テキストテキストテキストテキスト...",
    },
    {
      date: "2021.05.21",
      time: "23:25",
      content:
        "私の日記の記録が一部表示されます。テキストテキストテキストテキスト...",
    },
    {
      date: "2021.05.21",
      time: "23:25",
      content:
        "私の日記の記録が一部表示されます。テキストテキストテキストテキスト...",
    },
    {
      date: "2021.05.21",
      time: "23:25",
      content:
        "私の日記の記録が一部表示されます。テキストテキストテキストテキスト...",
    },
    {
      date: "2021.05.21",
      time: "23:25",
      content:
        "私の日記の記録が一部表示されます。テキストテキストテキストテキスト...",
    },
    {
      date: "2021.05.21",
      time: "23:25",
      content:
        "私の日記の記録が一部表示されます。テキストテキストテキストテキスト...",
    },
    {
      date: "2021.05.21",
      time: "23:25",
      content:
        "私の日記の記録が一部表示されます。テキストテキストテキストテキスト...",
    },
    {
      date: "2021.05.21",
      time: "23:25",
      content:
        "私の日記の記録が一部表示されます。テキストテキストテキストテキスト...",
    },
    {
      date: "2021.05.21",
      time: "23:25",
      content:
        "私の日記の記録が一部表示されます。テキストテキストテキストテキスト...",
    },
    {
      date: "2021.05.21",
      time: "23:25",
      content:
        "私の日記の記録が一部表示されます。テキストテキストテキストテキスト...",
    },
    {
      date: "2021.05.21",
      time: "23:25",
      content:
        "私の日記の記録が一部表示されます。テキストテキストテキストテキスト...",
    },
    {
      date: "2021.05.21",
      time: "23:25",
      content:
        "私の日記の記録が一部表示されます。テキストテキストテキストテキスト...",
    },
    {
      date: "2021.05.21",
      time: "23:25",
      content:
        "私の日記の記録が一部表示されます。テキストテキストテキストテキスト...",
    },
    {
      date: "2021.05.21",
      time: "23:25",
      content:
        "私の日記の記録が一部表示されます。テキストテキストテキストテキスト...",
    },
    {
      date: "2021.05.21",
      time: "23:25",
      content:
        "私の日記の記録が一部表示されます。テキストテキストテキストテキスト...",
    },
  ];

  const [visibleEntries, setVisibleEntries] = useState(8);

  const handleSeeMore = () => {
    setVisibleEntries((prevVisibleEntries) => prevVisibleEntries + 8);
  };

  return (
    <Box sx={{ padding: "16px" }}>
      <Typography
        sx={{
          textAlign: "left",
          color: "#414141",
          fontSize: "22px",
          fontWeight: 400,
        }}
      >
        MY DIARY
      </Typography>
      <Grid container spacing={2}>
        {diaryEntries.slice(0, visibleEntries).map((entry, index) => (
          <Grid item xs={3} key={index}>
            <DiaryCard
              date={entry.date}
              time={entry.time}
              content={entry.content}
            />
          </Grid>
        ))}
      </Grid>
      {visibleEntries < diaryEntries.length && (
        <Box sx={{ textAlign: "center", marginTop: "16px" }}>
          <Button
            variant="contained"
            onClick={handleSeeMore}
            sx={{
              mt: 2,
              background: "linear-gradient(90deg, #FFCC21, #FF963C)",
              color: "white",
              "&:hover": {
                background: "linear-gradient(90deg, #FFCC21, #FF963C)",
                opacity: 0.8,
              },
            }}
          >
            自分の日記をもっと見る
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default DiaryList;
