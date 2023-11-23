import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import ClientHeader from '../components/ClientHeader/ClientHeader';
import DamTableRow from '../components/DamTableRow/DamTableRow';
import Footer from '../components/Footer/Footer';
import Code from '../assets/images/code-01.svg'
import { addRedirects } from '../assets/scripts/contribuinteScripts';
import { data } from '../assets/data/userData';
import '../assets/styles/client.css';

export default function Contribuinte() {
  document.title = 'Portal do Contribuinte';
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(0);
  const items = data;
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const displayedItems = items.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  useEffect(() => {addRedirects()});

  return (
    <div className="body">
      <ClientHeader />
      <main>
        <div className="responsive-table">
          <table>
            <thead>
              <tr>
                <th><div><p>Tributo</p><img src={Code} /></div></th>
                <th><div><p>Competência</p><img src={Code} /></div></th>
                <th><div><p>Vencimento</p><img src={Code} /></div></th>
                <th><div><p>Valor</p><img src={Code} /></div></th>
                <th><div><p>Cobrança</p></div></th>
                <th><div><p>Parcela</p></div></th>
              </tr>
            </thead>
            <tbody>
              {displayedItems.map((itemData, index) => (
                <React.Fragment key={index}>
                  <DamTableRow key={index} data={itemData} />
                  <tr className="space" />
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
        <ReactPaginate
          nextLabel="Próxima >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="< Anterior"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </main>
      <Footer />
    </div>
  );
}
