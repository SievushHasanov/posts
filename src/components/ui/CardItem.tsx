import { Box, Button, Card, CardContent, Grid, IconButton, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import { PostType } from '../../types/postsTypes';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal/Modal';
import { useState } from 'react';
import './CardItem.css';
import { useDispatch, useSelector } from 'react-redux'; 
import { deletePost, toggleLike } from '../../store/likedPostsSlice';
import { RootState } from '../../store/store';

interface CardItemProps {
  post: PostType;
}

export default function CardItem({ post }: CardItemProps): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const likedPosts = useSelector((state: RootState) => state.likedPosts.likedPosts);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);

  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Card className="card-item" style={{ marginBottom: '16px', cursor: 'pointer' }}>
          <CardContent onClick={() => navigate(`/posts/${post.id}`)}>
            <Typography variant="h6">{post.title.substring(0, 10)}...</Typography>
            <Typography variant="body2">{post.body.substring(0, 50)}...</Typography>
          </CardContent>
          <IconButton onClick={() => dispatch(toggleLike(post.id))}>
            <FavoriteIcon color={likedPosts.includes(post.id) ? 'error' : 'inherit'} />
          </IconButton>
          <IconButton onClick={() => setDeleteModal(true)}>
            <DeleteIcon />
          </IconButton>
        </Card>
      </Grid>

      <Modal active={deleteModal} setActive={setDeleteModal}>
        <Typography variant="h2" align="center">
          Вы действительно хотите удалить? <br />
          <b>{post.title}</b>
        </Typography>
        <Box marginTop={2} display="flex" gap={10} justifyContent="center">
          <Button variant="contained" onClick={() => dispatch(deletePost(post.id))}>
            Да
          </Button>
          <Button variant="contained" color="error" onClick={() => setDeleteModal(false)}>
            Нет
          </Button>
        </Box>
      </Modal>
    </>
  );
}
