import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import ShipmentRequest from './ShipmentRequest';
import { socketEvents } from '../constants';
import { IDeliveryAssociate, IShipment, ShipmentStatus } from '../types';
import { updateShipmentStatus, updateShipmentDeliveryAssociate } from '../api';

type Props = {
  socket: any;
  setShipmentData: any;
};

const DriverDashboard = (props: Props) => {
  // @ts-ignore
  const [newShipmentRequest, setNewShipmentRequest] = useState<IShipment>({});

  const email = sessionStorage.getItem('driverEmail') || '';
  const name = email.substring(0, email.indexOf('@'));
  const nameCaseCorrected = name.charAt(0).toUpperCase() + name.slice(1);

  useEffect(() => {
    props.socket.on(socketEvents.SHIPMENT_CREATED, (data: any) => {
      setNewShipmentRequest(data);
    });
  }, []);

  const onAccept = async () => {
    await updateShipmentStatus(
      newShipmentRequest?._id,
      ShipmentStatus.deliveryAssociateAssigned
    );
    const email = sessionStorage.getItem('driverEmail') || '';
    const shipmentData = await updateShipmentDeliveryAssociate(
      newShipmentRequest?._id,
      email
    );
    props.setShipmentData(shipmentData.data);
    // @ts-ignore
    setNewShipmentRequest({});
  };
  const onReject = () => {
    // @ts-ignore
    setNewShipmentRequest({});
  };
  return (
    <div
      style={{
        padding: '25px 40px',
      }}
    >
      <Card>
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Associate Details
          </Typography>
          <Box
            sx={{
              display: 'flex',
            }}
          >
            <Stack spacing={0.5}>
              <Typography variant='body2'>
                <strong>Email: </strong>
                {email}
              </Typography>
              <Typography variant='body2'>
                <strong>Name: </strong>
                {nameCaseCorrected}
              </Typography>
            </Stack>
          </Box>
        </CardContent>
      </Card>
      <div style={{ margin: '20px 0px' }}>
        {/* New Shipment Notification */}
        {newShipmentRequest._id ? (
          <ShipmentRequest onAccept={onAccept} onReject={onReject} />
        ) : null}
      </div>
    </div>
  );
};

export default DriverDashboard;
