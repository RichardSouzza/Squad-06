import PropTypes from 'prop-types';
import './DamTableRow.css';

export default function DamTableRow({ data }) {
  return (
    <tr className="dam-row">
      <td>{data.tribute}</td>
      <td>{data.competence}</td>
      <td>{data.due_date}</td>
      <td className="align-right">{data.amount}</td>
      <td className="table-anchor">{data.billing}</td>
      <td className="table-anchor">{data.installment}</td>
      <div className="red-border left"></div>
      <div className="red-border right"></div>
    </tr>
  );
}

DamTableRow.propTypes = {
  data: PropTypes.object
};
