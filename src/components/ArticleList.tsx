import React, { useState } from "react";
import { Box, Grid, Button } from "@mui/material";
import ArticleCard from "./ArticleCard";

const ArticleList: React.FC = () => {
  const articles = [
    {
      date: "2021.05.21 23:25",
      title:
        "私の日記の記録が一部表示されます。テキストテキストテキストテキスト...",
      hashtags: ["魚料理", "和食", "DHA"],
      image: "https://as1.ftcdn.net/jpg/05/00/96/52/1024W_F_500965224_dWfIzvozPd8peQq3HW46vICIQav2hyCH_NW1.jpg",
    },
    {
      date: "2021.05.21 23:25",
      title:
        "私の日記の記録が一部表示されます。テキストテキストテキストテキスト...",
      hashtags: ["魚料理", "和食", "DHA"],
      image: "https://as1.ftcdn.net/jpg/05/00/96/52/1024W_F_500965224_dWfIzvozPd8peQq3HW46vICIQav2hyCH_NW1.jpg",
    },
    {
      date: "2021.05.21 23:25",
      title:
        "私の日記の記録が一部表示されます。テキストテキストテキストテキスト...",
      hashtags: ["魚料理", "和食", "DHA"],
      image: "https://as1.ftcdn.net/jpg/05/00/96/52/1024W_F_500965224_dWfIzvozPd8peQq3HW46vICIQav2hyCH_NW1.jpg",
    },
    {
      date: "2021.05.21 23:25",
      title:
        "私の日記の記録が一部表示されます。テキストテキストテキストテキスト...",
      hashtags: ["魚料理", "和食", "DHA"],
      image: "https://as1.ftcdn.net/jpg/05/00/96/52/1024W_F_500965224_dWfIzvozPd8peQq3HW46vICIQav2hyCH_NW1.jpg",
    },
    {
      date: "2021.05.21 23:25",
      title:
        "私の日記の記録が一部表示されます。テキストテキストテキストテキスト...",
      hashtags: ["魚料理", "和食", "DHA"],
      image: "https://as1.ftcdn.net/jpg/05/00/96/52/1024W_F_500965224_dWfIzvozPd8peQq3HW46vICIQav2hyCH_NW1.jpg",
    },
    {
      date: "2021.05.21 23:25",
      title:
        "私の日記の記録が一部表示されます。テキストテキストテキストテキスト...",
      hashtags: ["魚料理", "和食", "DHA"],
      image: "https://as1.ftcdn.net/jpg/05/00/96/52/1024W_F_500965224_dWfIzvozPd8peQq3HW46vICIQav2hyCH_NW1.jpg",
    },
    {
      date: "2021.05.21 23:25",
      title:
        "私の日記の記録が一部表示されます。テキストテキストテキストテキスト...",
      hashtags: ["魚料理", "和食", "DHA"],
      image: "https://as1.ftcdn.net/jpg/05/00/96/52/1024W_F_500965224_dWfIzvozPd8peQq3HW46vICIQav2hyCH_NW1.jpg",
    },
    {
      date: "2021.05.21 23:25",
      title:
        "私の日記の記録が一部表示されます。テキストテキストテキストテキスト...",
      hashtags: ["魚料理", "和食", "DHA"],
      image: "https://as1.ftcdn.net/jpg/05/00/96/52/1024W_F_500965224_dWfIzvozPd8peQq3HW46vICIQav2hyCH_NW1.jpg",
    },
  ];

  const [visibleArticles, setVisibleArticles] = useState(4);

  const handleSeeMore = () => {
    setVisibleArticles((prevVisibleArticles) => prevVisibleArticles + 4);
  };

  return (
    <Box sx={{ padding: "16px" }}>
      <Grid container spacing={2}>
        {articles.slice(0, visibleArticles).map((article, index) => (
          <Grid item xs={3} key={index}>
            <ArticleCard
              date={article.date}
              title={article.title}
              hashtags={article.hashtags}
              image={article.image}
            />
          </Grid>
        ))}
      </Grid>
      {visibleArticles < articles.length && (
        <Box sx={{ textAlign: "center", marginTop: "16px" }}>
          <Button
            variant="contained"
            sx={{
              mt: 2,
              background: 'linear-gradient(90deg, #FFCC21, #FF963C)',
              color: 'white',
              '&:hover': {
                background: 'linear-gradient(90deg, #FFCC21, #FF963C)',
                opacity: 0.8,
              },
            }}
            onClick={handleSeeMore}
          >
            コラムをもっと見る
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default ArticleList;
