import "./LoanCalculator.css";
import LoanJS from "loanjs";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Language } from "../../lang/Languages";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

export default function Lon() {
  const [values, setValues] = useState({
    "loan-amount": 0,
    "loan-term": 0,
    "interest-rate": 0,
  });
  const [installments, setInstallments] = useState([]);
  // console.log(installments[0].installment);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    calculate(
      values["loan-amount"],
      values["loan-term"],
      values["interest-rate"]
    );
  };

  const calculate = (amount: number, years: number, rate: number) => {
    const loan = new LoanJS.Loan(amount, years * 12, rate);

    setInstallments(loan.installments);
  };

  const amountFormat = (amount: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "UZS",
    }).format(amount);

  const { lang } = useSelector((state) => state.lang);

  const {
    colh1,
    colP,
    colPars,
    colYear,
    colColl,
    month,
    paymenT,
    payT,
    paySection,
    payRemain,
    pRint,
  } = Language;
  console.log(pRint);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="LoanApp">
      <div className="loan-calculator-container">
        <h1>{colh1[lang]}</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-item">
            <label htmlFor="loan-amount" className="lnDt">
              {colP[lang]}
            </label>
            <div className="form-input">
              1
              <input
                type="number"
                name="loan-amount"
                placeholder=""
                value={values["loan-amount"]}
                id="inpKr"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="form-item">
            <label htmlFor="interest-rate" className="lnDt">
              {colPars[lang]}
            </label>
            <div className="form-input">
              <input
                type="number"
                name="interest-rate"
                placeholder=""
                value={values["interest-rate"]}
                id="inpKr"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="form-item">
            <label htmlFor="loan-term" className="lnDt">
              {colYear[lang]}
            </label>
            <div className="form-input">
              <input
                type="number"
                name="loan-term"
                placeholder=""
                value={values["loan-term"]}
                id="inpKr"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="form-action">
            <input
              type="submit"
              value={colColl[lang]}
              className="calculate-button"
            />
            <button onClick={handlePrint} className="print__button">
              {pRint[lang]}
            </button>
          </div>
        </form>
        {!!installments?.length && (
          <table ref={componentRef}>
            <thead>
              <tr>
                <th>{month[lang]}</th>
                <th>{paymenT[lang]}</th>
                <th>{payT[lang]}</th>
                <th>{paySection[lang]}</th>
                <th>{payRemain[lang]}</th>
              </tr>
            </thead>
            <tbody>
              {installments.map((i: any, ind: number) => (
                <tr key={ind}>
                  <td>{ind}</td>
                  <td>{amountFormat(i.installment)}</td>
                  <td>{amountFormat(i.interest)}</td>
                  <td>{amountFormat(i.capital)}</td>
                  <td>{amountFormat(i.remain)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
