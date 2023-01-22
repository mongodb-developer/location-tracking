import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const style = {
  display: 'flex',
  justifyContent: 'space-evenly',
};

type Props = {
  onAccept: any;
  onReject: any;
};
const ShipmentRequest = (props: Props) => {
  return (
    <div>
      <Card>
        <CardContent>
          <Typography gutterBottom variant='body1' component='div'>
            <strong>New Shipment Available</strong>
          </Typography>
          <div style={{ ...style, marginTop: '20px' }}>
            <Button
              variant='contained'
              color='success'
              size='medium'
              onClick={props.onAccept}
            >
              Accept
            </Button>
            <Button
              variant='contained'
              color='error'
              size='medium'
              onClick={props.onReject}
            >
              Reject
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default ShipmentRequest;
