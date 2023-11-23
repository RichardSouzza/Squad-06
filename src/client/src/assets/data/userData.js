const initialData = [
  {
    tribute: 'IPTU - IPTU GRAND(100.00%)',
    competence: 'Setembro de 2023',
    due_date: '25/09/2023',
    amount: '1.000,00',
    billing: 'Gerar',
    installment: 'Exibir',
  },
  {
    tribute: 'ALUGUEL 2 - ALUGUEL(1.50%)',
    competence: 'Setembro de 2023',
    due_date: '15/09/2023',
    amount: '17,00',
    billing: 'Gerar',
    installment: '',
  },
  {
    tribute: 'LIX - COLETA DE LIXO(1.00%)',
    competence: 'Setembro de 2023',
    due_date: '15/09/2023',
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