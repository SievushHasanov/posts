import { useParams, NavLink } from 'react-router-dom';
import { useGetPostsQuery } from '../../store/apiSlice';
import { Button, Container, Paper, Typography } from '@mui/material';

export default function CardDetails(): JSX.Element {
  const { data: posts = [] } = useGetPostsQuery();
  const { id } = useParams<{ id: string }>();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return <Typography>Пост не найден</Typography>;
  }

  return (
    <>
      <NavLink to="/posts">
        <Button variant="outlined">Назад к списку постов</Button>
      </NavLink>
      <Container>
        <Paper elevation={6} style={{ padding: 50 }}>
          <Typography align="center" variant="h2" color="textPrimary" gutterBottom>
            {post.title}
          </Typography>
          <Typography variant="body1">{post.body}</Typography>
          <br />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis mollitia illo
            laudantium placeat. Quaerat perspiciatis, officiis perferendis voluptatem nobis
            sapiente! Vel tenetur facere dolor eos enim perspiciatis amet reiciendis laborum maxime
            repellat voluptates voluptate neque impedit officia repudiandae eum at alias, non fuga?
            Possimus quo ea eius corrupti at pariatur ducimus esse odio fugiat aspernatur molestias
            totam, deleniti hic numquam natus aut debitis animi sit! Temporibus, atque vel odio ipsa
            doloremque ullam consequatur ducimus modi voluptatem, voluptatum sint autem aperiam quam
            odit quis vero porro, nam nobis. Repellendus porro culpa libero ab, provident aut
            architecto pariatur ex! Quos velit a sunt recusandae ducimus aspernatur beatae veniam,
            numquam distinctio. Voluptatibus, iure. Delectus molestiae corrupti architecto hic iusto
            illo fugit? Autem libero repellendus, at ullam optio, omnis distinctio ipsa repellat
            nulla voluptas atque inventore dolores cum incidunt laborum, aliquam eos a deleniti quas
            saepe veniam vitae numquam delectus eum? Libero provident illum impedit sunt deleniti
            vero corrupti animi ad perspiciatis ipsa quibusdam pariatur reiciendis ullam iste
            deserunt ex reprehenderit ducimus, consequuntur totam facilis rem esse nemo.
            Perspiciatis omnis culpa velit recusandae modi error incidunt quibusdam! Libero ullam
            esse explicabo corporis asperiores autem aliquam cum qui labore? Cumque fuga tenetur
            quas doloribus dolores.
          </p>
        </Paper>
      </Container>
    </>
  );
}
