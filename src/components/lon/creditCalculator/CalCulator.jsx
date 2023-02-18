import React from "react";
import "./claculator.css";
import CalDataViewer from "../calDataViwer/CalDataViewer";
import { UseCalculate } from "../UseCalculete";
import NumericFormat from "react-number-format";
import { Input } from "antd";
import { Language } from "../../../lang/Languages";
import { useSelector } from "react-redux";

const CalCulator = () => {
  const {
    changeValue,
    everyMonthPayment,
    valeu,
    credit,
    creditRate,
    commonCredit,
    showModal,
    calculateRateOfMoney,
    commonRateOfMoney,
    isModalOpen,
    handleCancel,
  } = UseCalculate();
  const { lang } = useSelector((state) => state.lang);

  const { costCar, firstPayment, rateOfYear, loanPeriod, month } = Language;

  return (
    <div className="lonMain">
      <div className="calculator">
        <div className="calculator__item">
          <p>{costCar[lang]}</p>
          <div className="calculator__range-item">
            <NumericFormat
              value={valeu.cost}
              className="calculator__input"
              thousandSeparator=" "
              customInput={Input}
              onValueChange={(e) =>
                changeValue({
                  target: { name: "cost", value: e.value },
                })
              }
            />
            <input
              name="cost"
              type="range"
              defaultValue={0}
              value={valeu.cost}
              min="10000000"
              max="600000000"
              className="inputRange"
              onChange={changeValue}
            />
            {valeu.cost > 600000000 ? (
              <p className="error">Faqat 600 mlngacha bo`lishi kerak</p>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="calculator__info">
          <p>10mln</p>
          <p>600mln</p>
        </div>

        <div className="calculator__item">
          <p>{firstPayment[lang]}(%)</p>
          <div className="calculator__range-item">
            <input
              className="calculator__input"
              type="number"
              min="10"
              max="100"
              value={valeu.firstPayment}
              onChange={changeValue}
              name="firstPayment"
            />
            <input
              name="firstPayment"
              type="range"
              defaultValue={0}
              min={10}
              max={100}
              className="inputRange"
              onChange={changeValue}
              value={valeu.firstPayment}
            />
            {valeu.firstPayment > 100 ? (
              <p className="error">Maxsimal 100% to`lov qilinadi</p>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="calculator__info">
          <p>10%</p>
          <p>100%</p>
        </div>
        <div className="calculator__item">
          <p>{rateOfYear[lang]}(%)</p>
          <div className="calculator__range-item">
            <input
              className="calculator__input"
              type="number"
              min="18"
              max="30"
              value={valeu.rate}
              onChange={changeValue}
              name="rate"
            />
            <input
              name="rate"
              type="range"
              defaultValue={18}
              min="18"
              max="30"
              className="inputRange"
              onChange={changeValue}
              value={valeu.rate}
            />
            {valeu.rate > 30 ? <p className="error">Maxsimal 30% </p> : ""}
          </div>
        </div>
        <div className="calculator__info">
          <p>18%</p>
          <p>30%</p>
        </div>
        <div className="calculator__item">
          <p>
            {loanPeriod[lang]}({month[lang]})
          </p>
          <div className="calculator__range-item">
            <input
              className="calculator__input"
              type="number"
              min={6}
              max={84}
              defaultValue={6}
              value={valeu.month}
              onChange={changeValue}
              name="month"
              onInput={(e) => console.log(e)}
              maxLength="99"
            />
            <input
              name="month"
              type="range"
              defaultValue={6}
              min={6}
              max={84}
              className="inputRange"
              onChange={changeValue}
              value={valeu.month}
            />
            {valeu.month > 84 ? (
              <p className="error">Maxsimal 84 oyga beriladi </p>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="calculator__info">
          <p>6</p>
          <p>84</p>
        </div>
      </div>
      <div>
        <CalDataViewer
          data={valeu}
          everyMonthPayment={everyMonthPayment}
          credit={credit}
          creditRate={creditRate}
          commonCredit={commonCredit}
          showModal={showModal}
          calculateRateOfMoney={calculateRateOfMoney}
          commonRateOfMoney={commonRateOfMoney}
          isModalOpen={isModalOpen}
          handleCancel={handleCancel}
        />
      </div>
    </div>
  );
};

export default CalCulator;
