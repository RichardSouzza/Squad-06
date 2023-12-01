import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import DamTableRow from '../DamTableRow/DamTableRow';
import FloatCard from '../FloatCard/FloatCard';
import { dateToStr, dateStrToDMY, dateToStrYMD, strToDate, months } from '../../assets/scripts/contribuinteScripts';
import '../../assets/styles/client.css';
import './BillingGenerator.css';

export default function BillingGenerator({ damData }) {
  const identification = localStorage.getItem('identification');
  const [data, setData] = useState(damData);
  const [issueDate, setIssueDate] = useState(dateToStr(new Date));
  const [dueDate, setDueDate] = useState(dateToStrYMD(new Date));
  const modeOptions = ['preview', 'generate'];
  const [mode, setMode] = useState(modeOptions[0]);
  const navigate = useNavigate();

  function handleIssueDateChange(event) {
    setIssueDate(event.target.value);
  }

  function handleDueDateChange(event) {
    setDueDate(event.target.value);
  }
  
  function generateData() {
    const newDam = { ...damData[0] };
    const issue = strToDate(issueDate);
    newDam['competence'] = `${months[issue.getMonth() + 1]} de ${issue.getFullYear()}`;
    newDam['due_date'] = dateStrToDMY(dueDate);
    setData([newDam, ...data]);
    setMode(modeOptions[0]);
  }

  function previewMode() {
    return (
      <>
        <button className="button" onClick={() => setMode(modeOptions[1])}>Nova Cobrança</button>
        <div className="responsive-table">
          <table>
            <tbody>
              {data.map((damData, index) => (
                <React.Fragment key={index}>
                  <DamTableRow
                    key={index}
                    data={damData}
                    behaviors={{'handleBillingGenerator': () => navigate('/client/dam')}}
                  />
                  <tr className="space" />
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }

  function generateMode() {
    return (
      <>
        <form id="form">
          <label htmlFor="issueDate">Data de Emissão</label>
          <input type="text" name="issueDate" value={dateToStr(new Date)} onChange={handleIssueDateChange} disabled />
          <label htmlFor="due_date_limit">Limite de Vencimento</label>
          <input type="text" name="due_date_limit" value={damData[0].due_date} disabled />
          <label htmlFor="due_date">Data de Vencimento:</label>
          <input type="date" name="due_date" min={dateToStrYMD(new Date)} onChange={handleDueDateChange} />
        </form>
        <p>Contribuinte: {identification}</p>
        <p>Tributo: {damData[0].tribute}</p>
        <p>A Pagar: <span className="bold">{damData[0].amount}</span></p>
        <div id="form-buttons">
          <button className="button" onClick={() => generateData()}>Salvar</button>
          <button className="button" onClick={() => setMode(modeOptions[0])}>Voltar</button>
        </div>
      </>
    );
  }

  return (
    <FloatCard className="BillingGenerator pop-up" content={
      <>
        {
          mode === modeOptions[1] 
            ? generateMode()
            : previewMode()
        }
      </>
    } />
  )
}

BillingGenerator.propTypes = {
  damData: PropTypes.array
};
