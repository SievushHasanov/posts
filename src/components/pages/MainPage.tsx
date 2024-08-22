import { useEffect, useState } from 'react';
import { useGetPostsQuery } from '../../store/apiSlice';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import CardItem from '../ui/CardItem';
import Loader from '../HOCs/Loader';
import './MainPage.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export default function MainPage(): JSX.Element {
  const { data: posts = [] } = useGetPostsQuery();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { likedPosts, deletedPosts } = useSelector((state: RootState) => state.likedPosts);
  const [showLiked, setShowLiked] = useState(false);

  const filteredPosts = posts.filter(
    (post) => !deletedPosts.includes(post.id) && (!showLiked || likedPosts.includes(post.id)),
  );

  useEffect(() => {
    //! проверка лоудера
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Loader isLoading={isLoading}>
      <Container fixed>
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
          <Typography
            className="header-title"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Список постов
          </Typography>
          <Button
            style={{ margin: 20 }}
            variant="contained"
            onClick={() => setShowLiked((prev) => !prev)}
          >
            {showLiked ? 'Все посты' : 'Понравившиеся'}
          </Button>
        </Box>
        <Container maxWidth="md">
          <Grid container spacing={6}>
            {filteredPosts.map((post) => (
              <CardItem key={post.id} post={post} />
            ))}
          </Grid>
        </Container>
      </Container>
    </Loader>
  );
}
