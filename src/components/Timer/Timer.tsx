import moment from 'moment';
import { Box, CSSProperties, Typography } from '@mui/material';
import { CoolDown } from "./CoolDown";
import { useTimer } from "./useTimer";
import { CreateTimer } from './CreateTimer';

export const Timer: React.FC = () => {

  const dateNow = moment();
  dateNow.locale('ru');

  const newYearNum = new Date().getFullYear();
  const neYearTimestamp = moment({
    year: newYearNum +1,
    month: 0,
    hours: 1,
    minutes: 1,
    seconds: 1,
  }).valueOf();

  const [
    daysNewYear,
    hoursNewYear,
    minutesNewYear,
    secondsNewYear,
  ] = useTimer({ nextDate: neYearTimestamp });

  const content: CSSProperties = {
    display: 'flex',
    paddingBottom: 2,
  };

  return (
    <Box>
      <Box sx={ content }>
        <Box>
          <Typography variant='h4'>
            До Нового Года осталось:
          </Typography>
          <Typography variant='h6'>
            Сейчас { dateNow.format('DD MMMM YYYY HH:mm:ss') }
          </Typography>
        </Box>
        <CoolDown
          days={daysNewYear}
          hours={hoursNewYear}
          minutes={minutesNewYear}
          seconds={secondsNewYear}
        />
      </Box>
      <CreateTimer />
    </Box>
  );
};
