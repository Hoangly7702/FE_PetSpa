import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import images from  '../../assets/images/service/vesinhtaiboss.webp'
// import { Image } from 'antd';

const CardComponent = () => {
    return (
        <div>
            
            <Card sx={{ maxWidth: 300 }}>
                <CardActionArea>
                    {/* <Image src={images} /> */}
                    <CardMedia
                        component="img"
                        height="140"
                        image={images}
                        alt="Picture"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                        <Typography style={{textAlign:"right"}}>
                            <a href="/appointment">Đặt hẹn</a>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
           

        </div>
    )
}

export default CardComponent