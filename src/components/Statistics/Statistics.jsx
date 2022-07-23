import React from 'react';
import PropTypes from 'prop-types';
import style from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={style.statisticsList}>
      <li className={style.statisticsItem}>Good: {good}</li>
      <li className={style.statisticsItem}>Neutral: {neutral}</li>
      <li className={style.statisticsItem}>Bad: {bad}</li>
      <li className={style.statisticsItem}>Total: {total}</li>
      <li className={style.statisticsItem}>
        Positive feedback: {positivePercentage}%
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
