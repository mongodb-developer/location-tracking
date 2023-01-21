import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Stack from '@mui/material/Stack';
import PersonIcon from '@mui/icons-material/Person';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

export default function Home() {
  const navigate = useNavigate();

  function CardButton({
    pageName,
    title,
    Icon,
  }: {
    pageName: string;
    title: string;
    Icon: any;
  }) {
    return (
      <Card>
        <CardActionArea onClick={() => navigate(`/${pageName}`)}>
          <CardContent>
            <Stack direction='row' alignItems='center' gap={1}>
              <Icon fontSize='large' />
              <Typography gutterBottom variant='h4' component='div'>
                {title}
              </Typography>
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-around',
          height: '60vh',
        }}
      >
        <div style={{ width: '100%' }}>
          <Typography style={{ textAlign: 'center' }} variant='h3'>
            Welcome to Delivery Service
          </Typography>
        </div>
        <div style={{ width: '70%' }}>
          <CardButton
            pageName={'user'}
            title={'User Login'}
            Icon={PersonIcon}
          />
        </div>
        <div style={{ width: '70%' }}>
          <CardButton
            pageName={'driver'}
            title={'Driver Login'}
            Icon={LocalShippingIcon}
          />
        </div>
      </div>
    </>
  );
}
