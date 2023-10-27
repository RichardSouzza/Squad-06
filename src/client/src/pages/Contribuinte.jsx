import { useEffect } from 'react';
import ClientHeader from '../components/ClientHeader/ClientHeader';
import Footer from '../components/Footer/Footer';
import Code from '../assets/images/code-01.svg'
import { addRedBorders, addRedirects } from '../assets/scripts/contribuinteScripts';
import '../assets/styles/client.css';

export default function Contribuinte() {
  document.title = 'Portal do Contribuinte';
  useEffect(() => {
    addRedirects();
    setTimeout(() => {
      addRedBorders();
    }, 2000);
  });
  
  return (
    <div className="body">
      <ClientHeader />
      <main>
        <div className="responsive-table">
          <table id="dam-table">
            <thead>
              <tr>
                <th><div><p>Tributo</p><img src={Code} /></div></th>
                <th><div><p>Competência</p><img src={Code} /></div></th>
                <th><div><p>Vencimento</p><img src={Code} /></div></th>
                <th><div><p>Valor</p><img src={Code} /></div></th>
                <th><div><p>Cobrança</p><img src={Code} /></div></th>
                <th><div><p>Parcela</p><img src={Code} /></div></th>
              </tr>
            </thead>
            <tbody>
              <tr className="dam-row">
                <td>IPTU - IPTU GRAND(100.00%)</td>
                <td>Setembro de 2023</td>
                <td>25/09/2023</td>
                <td className="align-right">1.000,00</td>
                <td className="table-anchor">Gerar</td>
                <td className="table-anchor">Exibir</td>
              </tr>
              <tr className="space"></tr>
              <tr className="dam-row">
                <td>ALUGUEL 2 - ALUGUEL(1.50%)</td>
                <td>Setembro de 2023</td>
                <td>15/09/2023</td>
                <td className="align-right">17,00</td>
                <td className="table-anchor">Gerar</td>
                <td className="table-anchor"></td>
              </tr>
              <tr className="space"></tr>
              <tr className="dam-row">
                <td>LIX - COLETA DE LIXO(1.00%)</td>
                <td>Setembro de 2023</td>
                <td>15/09/2023</td>
                <td className="align-right">2,00</td>
                <td className="table-anchor">Gerar</td>
                <td className="table-anchor"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </div>
  );
}

