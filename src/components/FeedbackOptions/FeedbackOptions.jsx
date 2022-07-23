import React from 'react';
import PropTypes from 'prop-types';
import style from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <span className={style.btnContainer}>
      {options.map(name => {
        return (
          <button
            className={style.btn}
            kay={name}
            name={name}
            onClick={() => onLeaveFeedback(name)}
          >
            {name}
          </button>
        );
      })}
    </span>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
