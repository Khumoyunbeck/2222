import React from "react";
import { UseCalculate } from "../UseCalculete";
import { Modal } from "antd";
import "./LoanModal.css";
import { Language } from "../../../lang/Languages";
import { useSelector } from "react-redux";

const LoanModal = ({ isModalOpen, handleCancel }) => {
  // eslint-disable-next-line no-unused-vars
  const { showModal, handleOk, LoanTable } = UseCalculate();
  const { lang } = useSelector((state) => state.lang);

  const { orderPayment, printInfo } = Language;
  return (
    <div className="loanModal">
      {/* <button className="loanModal__button" onClick={showModal}>
        {viewPayment[lang]}
      </button> */}
      <Modal
        title=<div className="modal__header">
          <p>{orderPayment[lang]}</p>
          <button onClick={handleOk}>{printInfo[lang]}</button>
        </div>
        cancelButtonProps={{ hidden: true }}
        okButtonProps={{ hidden: true }}
        open={isModalOpen}
        onCancel={handleCancel}
        className="loanModal__modal"
        style={{ with: "100%" }}
      >
        <div>{LoanTable}</div>
      </Modal>
    </div>
  );
};

export default LoanModal;
