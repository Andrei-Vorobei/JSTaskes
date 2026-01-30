import { Box, Card, CSSProperties, Typography } from "@mui/material";

type CoolDownType = {
  days: number | string;
  hours: number | string;
  minutes: number | string;
  seconds: number | string;
}

export const CoolDown: React.FC<CoolDownType> = ({
    days,
    hours,
    minutes,
    seconds,
}) => {

  const cardStyle: CSSProperties = {
    padding: 1.5,
    flexBasis: 75,
  };

  const timer: CSSProperties = {
    display: 'flex',
    gap: 2.5,
    justifyContent: 'center',
    flexGrow: 1,
  };

  return (
    <Box sx={ timer }>
      <Card sx={ cardStyle } raised>
        <Typography variant="h6">
          { days }
        </Typography>
        <Typography variant="h6">
          days
        </Typography>
      </Card>
      <Card sx={ cardStyle } raised>
        <Typography variant="h6">
          { hours }
        </Typography>
        <Typography variant="h6">
          hours
        </Typography>
      </Card>
      <Card sx={ cardStyle } raised>
        <Typography variant="h6">
          { minutes }
        </Typography>
        <Typography variant="h6">
          min
        </Typography>
      </Card>
      <Card sx={ cardStyle } raised>
        <Typography variant="h6">
          { seconds }
        </Typography>
        <Typography variant="h6">
          sec
        </Typography>
      </Card>
    </Box>
  );
};