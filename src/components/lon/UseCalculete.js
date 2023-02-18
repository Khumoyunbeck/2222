import React, { useState, useRef } from "react";
import LoanJS from "loanjs";
import { useSelector } from "react-redux";
import { Language } from "../../lang/Languages";
import { useDispatch } from "react-redux";
import { setValue } from "../../store/credit/credit";
import JsPDF from "jspdf";

export const UseCalculate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const valeu = useSelector((store) => store.credit.credit);
  const dispatch = useDispatch();
  const componentRef = useRef();
  const { lang } = useSelector((state) => state.lang);

  const { month, paymenT, payT, paySection, payRemain } = Language;

  const carCost = Number(valeu.cost);
  const checkValeuFirstPayment =
    valeu.firstPayment === "" ||
    valeu.firstPayment > 100 ||
    valeu.firstPayment.length > 3
      ? 100
      : valeu.firstPayment;
  const creditRate = (Number(carCost) / 100) * checkValeuFirstPayment;
  const credit = Number(Math.ceil(Number(carCost) - creditRate));

  const loan = new LoanJS.Loan(
    credit === 0 || credit === "" ? 9000000 : credit,
    valeu.month === 0 || valeu.month === "" ? 6 : valeu.month,
    valeu.rate === 0 || valeu.rate === "" ? 18 : valeu.rate
  );
  const everyMonthPayment = Math.ceil(loan?.installments[0]?.installment);

  const loanData = loan?.installments;
  const commonRateOfMoney = loanData.reduce(
    (accumVariable, curValue) => (accumVariable += curValue.interest),
    0
  );

  const cahngeActive = () => {
    setIsActive(!isActive);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handlePrint = () => {
    const report = new JsPDF("landscape", "pt", "a4");
    report.html(document.querySelector("#report")).then(() => {
      report.setFontSize("10px");
      report.save("Raauto.pdf");
    });
  };

  const handleOk = () => {
    setIsModalOpen(false);
    handlePrint();
  };

  const changeValue = (event) => {
    const { name, value } = event.target;
    console.log({ [name]: value });
    dispatch(
      setValue({
        ...valeu,
        [name]: value,
      })
    );
  };
  const amountFormat = (amount) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "UZS",
    }).format(amount);

  const LoanTable = (
    <div className="loanTable" id="report">
      <table ref={componentRef}>
        <thead>
          <tr>
            <th>{month[lang]}</th>
            <th>{payRemain[lang]}</th>
            <th>{payT[lang]}</th>
            <th>{paySection[lang]}</th>
            <th>{paymenT[lang]}</th>
          </tr>
        </thead>
        <tbody>
          {loanData?.length &&
            loanData?.map((i, ind) => (
              <tr key={ind}>
                <td>{++ind}</td>
                <td>{amountFormat(i.remain)}</td>
                <td>{amountFormat(i.interest)}</td>
                <td>{amountFormat(i.capital)}</td>
                <td>{amountFormat(i.installment)}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );

  return {
    changeValue,
    everyMonthPayment,
    valeu,
    credit,
    creditRate,
    loanData,
    showModal,
    handleOk,
    handleCancel,
    LoanTable,
    handlePrint,
    isModalOpen,
    cahngeActive,
    isActive,
    commonRateOfMoney,
  };
};
