import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { strToDate } from '../../assets/scripts/contribuinteScripts';
import './DamTableRow.css';

export default function DamTableRow({ data, behaviors }) {
  const [borderColor, setBorderColor] = useState('');
  
  function handleBorderColor() {
    const today = new Date();
    let dueDate = strToDate(data.due_date);
    if (today.getDate() === dueDate.getDate()) {
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
      <td className="table-anchor" onClick={() => behaviors.handleBillingGenerator(data)}>{data.billing}</td>
      {
        data.installment ? (
        <td className="table-anchor" onClick={() => behaviors.handleBillingGenerator(data)}>Exibir</td>
        ) : (
          <td></td>
        )
      }
      <td className={`dam-border ${borderColor} left`}></td>
      <td className={`dam-border ${borderColor} right`}></td>
    </tr>
  );
}

DamTableRow.propTypes = {
  data: PropTypes.object,
  behaviors: PropTypes.object
};
