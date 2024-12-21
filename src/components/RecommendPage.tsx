import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import RecommendedCard from "./RecommendedCard";
import ArticleList from "./ArticleList";

const RecommendPage: React.FC = () => {
  return (
    <Box sx={{ color: "white", padding: "16px" }}>
      <Grid container spacing={2} sx={{ marginBottom: "16px" }}>
        <Grid item xs={3}>
          <RecommendedCard title="RECOMMENDED COLUMN" subtitle="オススメ" />
        </Grid>
        <Grid item xs={3}>
          <RecommendedCard title="RECOMMENDED DIET" subtitle="ダイエット" />
        </Grid>
        <Grid item xs={3}>
          <RecommendedCard
            title="RECOMMENDED
BEAUTY"
            subtitle="美容"
          />
        </Grid>
        <Grid item xs={3}>
          <RecommendedCard
            title="RECOMMENDED
HEALTH"
            subtitle="健康  "
          />
        </Grid>
      </Grid>

      <ArticleList />
    </Box>
  );
};

export default RecommendPage;
