import { useState, useEffect } from 'react';

export const useTimer = (fixtureStartingDate, fixtureStatus) => {
  const [minutes, setMinutes] = useState(null);
  const [seconds, setSeconds] = useState(null);
  const [hours, setHours] = useState(null);
  const [runTimer, setRunTimer] = useState(false);
  //   const [time, setTime] = useState(fixtureTimeMinute);

  const updateFixture = () => {
    const remainingTime =
      (new Date(fixtureStartingDate).getTime() - new Date().getTime()) /
      1000 /
      60 /
      60;
    // remainingTime = -1;
    if (remainingTime < 0) {
      // dispatch(updateFixtureDetails(fixtureSlug));
      setHours('---');
    } else {
      const hours = remainingTime.toString().split('.')[0];
      const remainingMinutesSeconds = (remainingTime - +hours) * 60;
      const minutes = remainingMinutesSeconds.toString().split('.')[0];
      let seconds = (remainingMinutesSeconds - +minutes) * 60;

      setHours(+hours);
      setMinutes(+minutes);
      setSeconds(+seconds.toFixed(0) + 15);
      setRunTimer(true);
    }
  };

  useEffect(() => {
    if (fixtureStatus === 'NS') {
      updateFixture();
    } else if (fixtureStatus === 'LIVE' || fixtureStatus === 'HT') {
      //   dispatch(updateFixtureDetails(fixtureSlug));
    }
  }, [fixtureStatus]);

  useEffect(() => {
    if (runTimer && (hours > 0 || seconds > 0 || minutes > 0)) {
      let myInterval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            if (hours === 0) {
              clearInterval(myInterval);
            } else {
              setMinutes(59);
              setSeconds(59);
              setHours(hours - 1);
            }
          } else {
            setSeconds(59);
            setMinutes(minutes - 1);
          }
        }
      }, 1000);
      return () => {
        clearInterval(myInterval);
      };
    }
  }, [runTimer, hours, seconds, minutes]);

  return { hours, minutes, seconds };
};
