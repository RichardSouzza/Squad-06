import PropTypes from 'prop-types';
import './FloatCard.css';

export default function FloatCard({ className, content }) {
  return (
    <div className={`FloatCard ${className}`}>
      {content}
    </div>
  );
}

FloatCard.propTypes = {
  className: PropTypes.string,
  content: PropTypes.element
};
