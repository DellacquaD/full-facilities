import { FC } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import {Container} from "@mui/material";

// Define la interfaz de las props
interface CardInfo {
  title: string;
  text: string;
}

interface CardsProps {
  cardInfo: CardInfo[];
}

const Cards: FC<CardsProps> = ({ cardInfo }) => {
  return (
    <Container sx={{
      display: "grid",
      gridTemplateColumns: {
        sx: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)"
      },
      gridGap: "1rem",
      alignItems: 'center',
      justifyItems: 'center',
    }}>
      {cardInfo.map((info, index) => (
        <Card key={index} sx={{ maxWidth: 345, boxShadow: '0 0 20px 0 rgba(0,0,0,0.6)', borderRadius: '10px' }}>
          <CardActionArea>
            {/* Puedes reemplazar la imagen con una que corresponda */}
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {info.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {info.text}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Container>
  );
}

export default Cards;
