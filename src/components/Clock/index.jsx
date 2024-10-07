import React, { useState, useEffect } from 'react';
import { formatDateTime} from '@/utils/dateUtils'

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <span>
      {formatDateTime(time)}
    </span>
  );
}

export default Clock;