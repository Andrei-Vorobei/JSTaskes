import { useEffect, useMemo, useState } from "react";

type TimerArgs = {
  nextDate: number
}

type TimerReturn = [
    days: number | string,
    hours: number | string,
    minutes: number | string,
    seconds: number | string,
]

type UseTimer<A, R> = (args: A)=> R

export const useTimer: UseTimer<TimerArgs, TimerReturn> = ({
  nextDate
}) => {
  const [ dateNow, setDateNow ] = useState(Date.now());

  useEffect(() => {
    const timerId = setInterval(() => setDateNow(Date.now()), 1000);
    return () => clearInterval(timerId);
  }, []);

  const delta = useMemo(() => {
    return nextDate - dateNow;
  }, [dateNow]);

  // console.log('moment(nextDate): ', moment(nextDate).format('DD MMMM YYYY HH:mm:ss'));
  // console.log('moment(dateNow): ', moment(dateNow).format('DD MMMM YYYY HH:mm:ss'));
  // console.log('delta: ', delta);

  

  const format = (num: number): number | string => {
    if (num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  };

  const days = Math.floor(delta / (1000 * 60 * 60 * 24));
  const hours = Math.floor(delta / (1000 * 60 * 60) % 24);
  const minutes = Math.floor(delta / (1000 * 60) % 60);
  const seconds = Math.floor(delta / 1000 % 60);

  return [
    format(days),
    format(hours),
    format(minutes),
    format(seconds),
  ];
};