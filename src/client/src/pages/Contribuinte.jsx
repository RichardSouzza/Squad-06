import { useEffect } from 'react';
import ClientHeader from '../components/ClientHeader';
import Footer from '../components/Footer';
import Code from '../assets/images/code-01.svg'
import addRedBorders from '../assets/scripts/script';
import '../assets/styles/style.css'

export default function Contribuinte() {
  document.title = 'Portal do Contribuinte';
  useEffect(() => {
    setTimeout(function() {
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
                <td>1.000,00</td>
                <td className="text-blue cursor-pointer" onClick="window.location.href='client/dam'">Gerar</td>
                <td className="text-blue cursor-pointer" onClick="window.location.href='client/dam'">Exibir</td>
              </tr>
              <tr className="space"></tr>
              <tr className="dam-row">
                <td>ALUGUEL 2 - ALUGUEL(1.50%)</td>
                <td>Setembro de 2023</td>
                <td>15/09/2023</td>
                <td>17,00</td>
                <td className="text-blue cursor-pointer" onClick="window.location.href='client/dam'">Gerar</td>
                <td className="text-blue cursor-pointer"></td>
              </tr>
              <tr className="space"></tr>
              <tr className="dam-row">
                <td>LIX - COLETA DE LIXO(1.00%)</td>
                <td>Setembro de 2023</td>
                <td>15/09/2023</td>
                <td>2,00</td>
                <td className="text-blue cursor-pointer" onClick="window.location.href='client/dam'">Gerar</td>
                <td className="text-blue cursor-pointer"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </div>
  );
}

