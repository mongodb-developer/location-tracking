import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

import { IUser } from '../types';

const initialUserData: IUser = {
  _id: '',
  email: '',
  name: '',
  organization: '',
  roles: [],
};

const UserInfo = () => {
  const [userData, setUserData] = useState(initialUserData);

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     const userData = await getUserData();
  //     setUserData(userData.data);
  //   };
  //   fetchUserData();
  // }, []);

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
