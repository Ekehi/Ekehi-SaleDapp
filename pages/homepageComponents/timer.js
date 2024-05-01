
import React, { useState, useEffect } from 'react';

const CountDownTimer = ({ deadline }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const leadingZero = num => num < 10 ? `0${num}` : num;

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const targetDate = new Date(deadline).getTime();
      const difference = targetDate - now;

      // Calculate remaining time in milliseconds
      setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
      setHours(Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      setMinutes(Math.floor(difference % (1000 * 60 * 60) / (1000 * 60)));
      setSeconds(Math.floor(difference % (1000 * 60) / 1000));

      // Clear interval when countdown reaches zero
      if (difference <= 0) {
        clearInterval(intervalId);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [deadline]);

  return React.createElement(
    'div',
    { className: 'countdown-timer' },
    React.createElement(
      'div',
      { className: 't' },
      React.createElement(
        'div',
        { className: 'time-segment' },
        React.createElement(
          'span',
          { className: 'time-value' },
          leadingZero(days)
        ),
        React.createElement(
          'span',
          { className: 'time-label' },
          'Days'
        )
      ),
      React.createElement(
        'div',
        { className: 'time-segment' },
        React.createElement(
          'span',
          { className: 'time-value' },
          leadingZero(hours)
        ),
        React.createElement(
          'span',
          { className: 'time-label' },
          'Hours'
        )
      ),
      React.createElement(
        'div',
        { className: 'time-segment' },
        React.createElement(
          'span',
          { className: 'time-value' },
          leadingZero(minutes)
        ),
        React.createElement(
          'span',
          { className: 'time-label' },
          'Mins'
        )
      ),
      React.createElement(
        'div',
        { className: 'time-segment' },
        React.createElement(
          'span',
          { className: 'time-value' },
          leadingZero(seconds)
        ),
        React.createElement(
          'span',
          { className: 'time-label' },
          'Secs'
        )
      )
    )
  );
};

export default function IcoLandingPage() {
  const deadline = '2024-05-31T23:59:59'; // Replace with your actual deadline

  return React.createElement(
    'div',
    { className: 'tcontainer' },
    React.createElement(
      'div',
      { className: 'row', style: { justifyContent: "center" } },
      React.createElement(CountDownTimer, { deadline: deadline })
    )
  );
}

