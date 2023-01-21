import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function MainAppBar() {
  const navigate = useNavigate();
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1 }}
            onClick={() => {
              navigate('/');
            }}
            style={{
              cursor: 'pointer',
              maxWidth: 'fit-content',
            }}
          >
            Delivery Service
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}
