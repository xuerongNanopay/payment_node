import { useParams } from "react-router-dom";

import css from './TransactionDetail.module.css'

const EXAMPLE_DATA = {
  id: '6b99ac9c3993e74e',
  transactionSummary: '$28.22 → 4,109.40 | John Doe → TTTT 3000099519 TTTT',
  sourceAccount: 'from...',
  destinationAccout: 'to...',
  sourceAmount: '11.11 CAD',
  destinationAmount: '4,109.40 PKR',
  status: 'Send',
  transactionFee: '205.47 CAD',
  amountToBeReceive: '205.47 PKR',
  amountToBeDebit: '$111119.22 CAD',
  createAt: new Date().toISOString()
}
const TransactionDetail = ({transaction=EXAMPLE_DATA}) => {
  const { transactionId } = useParams();
  return (
    <div>
      <h1>Transaction Detail: {transactionId}</h1>
      <div className={`${css.transactionDetailContainer} container`}>
        <div class="row row-cols-1 row-cols-sm-2">
          <div class="col">
            <h6>Transaction Id:</h6>
            <p>{transaction.id}</p>
          </div>
          <div class="col">
            <h6>Status:</h6>
            <p>{transaction.status}</p>
          </div>
          <div class="col">
            <h6>Source Account:</h6>
            <p>{transaction.sourceAccount}</p>
          </div>
          <div class="col">
            <h6>Source Amount:</h6>
            <p>{transaction.sourceAmount}</p>
          </div>
          <div class="col">
            <h6>Destination Account:</h6>
            <p>{transaction.destinationAccout}</p>
          </div>
          <div class="col">
            <h6>Destination Account:</h6>
            <p>{transaction.destinationAmount}</p>
          </div>
          <div class="col">
            <h6>Transaction Fee:</h6>
            <p>{transaction.transactionFee}</p>
          </div>
          <div class="col">
            <h6>Total Debit amount:</h6>
            <p>{transaction.amountToBeDebit}</p>
          </div>
          <div class="col">
            <h6>Transaction Date:</h6>
            <p>{transaction.createAt}</p>
          </div>
          <div class="col">
            <h6>Summary:</h6>
            <p>{transaction.transactionSummary}</p>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default TransactionDetail