import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

const initialUserData = {
  email: '',
  name: '',
};

const UserInfo = () => {
  const [userData, setUserData] = useState(initialUserData);

  useEffect(() => {
    const email = sessionStorage.getItem('userEmail') || '';
    const name = email.substring(0, email.indexOf('@'));
    const nameCaseCorrected = name.charAt(0).toUpperCase() + name.slice(1);
    setUserData({ email, name: nameCaseCorrected });
  }, []);

  return (
    <Card>
      <Box sx={{ p: 2, display: 'flex' }}>
        <Avatar
          variant='rounded'
          src='avatar1.jpg'
          style={{ marginRight: '5px' }}
        />
        <Stack spacing={0.5}>
          <Typography fontWeight={700}>{userData.name}</Typography>
          <Typography fontWeight={700}>{userData.email}</Typography>
          <Typography variant='body2' color='text.secondary'></Typography>
        </Stack>
      </Box>
      <Divider />
      <Stack
        direction='row'
        alignItems='center'
        justifyContent='space-between'
        sx={{ px: 2, py: 1, bgcolor: 'background.default' }}
      ></Stack>
    </Card>
  );
};
export default UserInfo;
