import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { strToDate } from '../../assets/scripts/contribuinteScripts';
import './DamTableRow.css';

export default function DamTableRow({ data }) {
  const [borderColor, setBorderColor] = useState('');
  
  function handleBorderColor() {
    const today = new Date().getDate();
    let dueDate = strToDate(data.due_date).getDate();
    if (today === dueDate) {
      setBorderColor('orange');
    } else if (today > dueDate) {
      setBorderColor('red');
    } else {
      setBorderColor('green');
    }
  }

  useEffect(() => handleBorderColor());

  return (
    <tr className="dam-row">
      <td>{data.tribute}</td>
      <td>{data.competence}</td>
      <td>{data.due_date}</td>
      <td className="align-right">{data.amount}</td>
      <td className="table-anchor">{data.billing}</td>
      <td className="table-anchor">{data.installment}</td>
      <td className={`dam-border ${borderColor} left`}></td>
      <td className={`dam-border ${borderColor} right`}></td>
    </tr>
  );
}

DamTableRow.propTypes = {
  data: PropTypes.object
};
