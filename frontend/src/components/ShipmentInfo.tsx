import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import { DashboardStatus } from '../types';
import { infoMsgs } from '../constants';

type PropType = {
  dashboardStatus: DashboardStatus;
};
export default function ShipmentInfo(props: PropType) {
  const { title, msg } = infoMsgs[props.dashboardStatus];
  const severity =
    props.dashboardStatus === DashboardStatus.DELIVERED ? 'success' : 'info';
  return (
    <>
      {title && msg ? (
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert severity={severity}>
            <AlertTitle>
              <strong>{title}</strong>
            </AlertTitle>
            {msg}
          </Alert>
        </Stack>
      ) : null}
    </>
  );
}
