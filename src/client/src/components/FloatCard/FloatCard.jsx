import PropTypes from 'prop-types';
import './FloatCard.css';

export default function FloatCard({ content }) {
  return (
    <div className="FloatCard">
      {content}
    </div>
  );
}

FloatCard.propTypes = {
  content: PropTypes.element
};
