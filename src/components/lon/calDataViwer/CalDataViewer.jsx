import React from "react";
import "./CalData.css";
import LoanModal from "../LoanModal/LoanModal";
import { Language } from "../../../lang/Languages";
import { useSelector } from "react-redux";

const CalDataViewer = ({
  everyMonthPayment,
  data,
  credit,
  commonRateOfMoney,
  showModal,
  isModalOpen,
  handleCancel,
}) => {
  const { lang } = useSelector((state) => state.lang);

  const {
    rateOfYear,
    loanAmount,
    monthlyPayment,
    calculateInsertAmount,
    commonPayment,
    firstCalculate,
    viewPayment,
    sumInput,
  } = Language;

  const creditInfo = new Intl.NumberFormat(["ban", "id"])
    .format(credit)
    .replace(".", " ")
    .replace(".", " ")
    .replace(".", " ")
    .replace(".", " ");
  const creditRateInfo = new Intl.NumberFormat(["ban", "id"])
    .format(Math.ceil(commonRateOfMoney))
    .replace(".", " ")
    .replace(".", " ")
    .replace(".", " ")
    .replace(".", " ");
  const commonCredit = new Intl.NumberFormat(["ban", "id"])
    .format(Math.ceil(credit + commonRateOfMoney))
    .replace(".", " ")
    .replace(".", " ")
    .replace(".", " ")
    .replace(".", " ");
  const monthly = new Intl.NumberFormat(["ban", "id"])
    .format(everyMonthPayment)
    .replace(".", " ")
    .replace(".", " ")
    .replace(".", " ")
    .replace(".", " ");

  return (
    <div className="calData">
      <div className="calData__item">
        <h1>
          {creditInfo} {sumInput[lang]}
        </h1>
        <span>{loanAmount[lang]}</span>
      </div>
      <div className="calData__item">
        <h1>
          {monthly} {sumInput[lang]}
        </h1>
        <span>{monthlyPayment[lang]}</span>
      </div>
      <div className="calData__item">
        <h1>{data.rate} %</h1>
        <span>{rateOfYear[lang]}</span>
      </div>
      <div className="calData__item">
        <h1>
          {creditRateInfo} {sumInput[lang]}
        </h1>
        <span>{calculateInsertAmount[lang]}</span>
      </div>
      <div className="calData__item">
        <h1>
          {commonCredit} {sumInput[lang]}
        </h1>
        <span>{commonPayment[lang]}</span>
      </div>
      <LoanModal isModalOpen={isModalOpen} handleCancel={handleCancel} />
      <button className="loanModal__button" onClick={showModal}>
        {viewPayment[lang]}
      </button>

      <p>*{firstCalculate[lang]}</p>
    </div>
  );
};
export default CalDataViewer;
