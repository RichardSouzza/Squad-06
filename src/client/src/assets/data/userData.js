import { dateToStr } from "../scripts/contribuinteScripts";

const initialData = [
  {
    tribute: 'ALUGUEL 2 - ALUGUEL(1.50%)',
    competence: 'Dezembro de 2023',
    due_date: '20/10/2023',
    amount: '17,00',
    billing: 'Gerar',
    installment: '',
  },
  {
    tribute: 'IPTU - IPTU GRAND(100.00%)',
    competence: 'Dezembro de 2023',
    due_date: dateToStr(new Date()),
    amount: '1.000,00',
    billing: 'Gerar',
    installment: 'Exibir',
  },
  {
    tribute: 'LIX - COLETA DE LIXO(1.00%)',
    competence: 'Dezembro de 2023',
    due_date: '30/12/2023',
    amount: '2,00',
    billing: 'Gerar',
    installment: '',
  }
];

const iterationsNumber = 5
let data = [];
for (let i = 0; i < iterationsNumber; i++) {
  data.push(...initialData);
}

export { data };