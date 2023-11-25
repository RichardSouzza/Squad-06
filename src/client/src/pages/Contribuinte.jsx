import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import ClientHeader from '../components/ClientHeader/ClientHeader';
import DamTableRow from '../components/DamTableRow/DamTableRow';
import Footer from '../components/Footer/Footer';
import Code from '../assets/images/code-01.svg'
import { data } from '../assets/data/userData';
import { addRedirects, filterByNearDueDate, filterByExpired, sortByAmount, sortByDate, sortByName
} from '../assets/scripts/contribuinteScripts';
import '../assets/styles/client.css';

export default function Contribuinte() {
  document.title = 'Portal do Contribuinte';
  const [totalItemsNumber, setTotalItemsNumber] = useState(0);
  const [dueDateItemsNumber, setDueDateItemsNumber] = useState(0);
  const [expiredItemsNumber, setExpiredItemsNumber] = useState(0);
  const itemsNumber = [totalItemsNumber, dueDateItemsNumber, expiredItemsNumber];
  const orderOptions = ['asc', 'desc'];
  const [tributeOrder, setTributeOrder] = useState(0);
  const [competenceOrder, setCompetenceOrder] = useState(0);
  const [dueDateOrder, setDueDateOrder] = useState(0);
  const [amountOrder, setAmountOrder] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [items, setItems] = useState(data);
  const itemsPerPage = 10;
  const pageCount = Math.ceil(items.length / itemsPerPage);
  
  function disableFilter() {
    setItems(data);
  }
  
  function filterByNear() {
    setItems(filterByNearDueDate(data));
  }
  
  function filterByExpr() {
    setItems(filterByExpired(data));
  }

  function calcOrder(key) {
    return (key + 1) % 2;
  }

  function handleTributeOrder() {
    setTributeOrder(calcOrder(tributeOrder));
    sortByName(items, 'tribute', orderOptions[tributeOrder]);
  }
  
  function handleCompetenceOrder() {
    setCompetenceOrder(calcOrder(competenceOrder));
    sortByName(items, 'competence', orderOptions[competenceOrder]);
  }
  
  function handleDueDataOrder() {
    setDueDateOrder(calcOrder(dueDateOrder));
    sortByDate(items, 'due_date', orderOptions[dueDateOrder]);
  }
  
  function handleAmountOrder() {
    setAmountOrder(calcOrder(amountOrder));
    sortByAmount(items, 'amount', orderOptions[amountOrder]);
  }

  function handlePageClick({ selected }) {
    setCurrentPage(selected);
  }

  const displayedItems = items.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  useEffect(() => {
    addRedirects();
    setTotalItemsNumber(data.length);
    setDueDateItemsNumber(filterByNearDueDate(data).length);
    setExpiredItemsNumber(filterByExpired(data).length);
    handleDueDataOrder();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="body">
      <ClientHeader headerBehaviors={{
        'itemsNumber': itemsNumber,
        'disableFilter': disableFilter,
        'filterByNearDueDate': filterByNear,
        'filterByExpired': filterByExpr}}
      />
      <main>
        <div className="responsive-table">
          <table>
            <thead>
              <tr>
                <th onClick={handleTributeOrder}><div><p>Tributo</p><img src={Code} /></div></th>
                <th onClick={handleCompetenceOrder}><div><p>Competência</p><img src={Code} /></div></th>
                <th onClick={handleDueDataOrder}><div><p>Vencimento</p><img src={Code} /></div></th>
                <th onClick={handleAmountOrder}><div><p>Valor</p><img src={Code} /></div></th>
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
