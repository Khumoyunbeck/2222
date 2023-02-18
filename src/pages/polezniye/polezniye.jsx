import { useSelector } from "react-redux";
import { Language } from "../../lang/Languages";
import "../../components/style.css";

function Polezniy() {
  const { lang } = useSelector((state) => state.lang);

  const {
    foydali,
    polez1,
    polez2,
    polez3,
    polez4,
    polez5,
    polez6,
    polez7,
    polez8,
    polez9,
    polez10,
    polez11,
    polez12,
    polez13,
    polez14,
    polez15,
    polez16,
    polez17,
    polez18,
    polez19,
    polez20,
    polez21,
    polez22,
    polez23,
    polez24,
    polez25,
    polez26,
    polez27,
    polez28,
    polez29,
    polez30,
    polez31,
    polez32,
    polez33,
    polez34,
    polez35,
    polez36,
    polez37,
    polez38,
    polez39,
    polez40,
    polez41,
  } = Language;

  return (
    <main>
      <div className="social__title">
        <span></span>
        <h2>{foydali[lang]}</h2>
        <span></span>
      </div>
      <div className="pages-container">
        <div className="komissia-wrap useful-wrap">
          <h3>{polez2[lang]}</h3>
          <h3>{polez1[lang]}</h3>
          <span class="material-symbols-rounded">1</span>
          <h3>{polez3[lang]}</h3>
          <p>{polez4[lang]}</p>
          <p>{polez5[lang]}</p>
          <p>{polez6[lang]}</p>
          <span class="material-symbols-rounded">2</span>
          <h3>{polez7[lang]}</h3>
          <p>{polez8[lang]}</p>
          <span class="material-symbols-rounded">3</span>
          <h3>{polez9[lang]}</h3>
          <p>{polez10[lang]}</p>
          <span class="material-symbols-rounded">4</span>
          <h3>{polez11[lang]}</h3>
          <p>{polez12[lang]}</p>
          <span class="material-symbols-rounded">5</span>
          <h3>{polez13[lang]}</h3>
          <p>{polez14[lang]}</p>
          <p>{polez15[lang]}</p>
          <span class="material-symbols-rounded">6</span>
          <h3>{polez16[lang]}</h3>
          <p>{polez17[lang]}</p>
          <p>{polez18[lang]}</p>
          <span class="material-symbols-rounded">7</span>
          <h3>{polez19[lang]}</h3>
          <p>{polez20[lang]}</p>
          <span class="material-symbols-rounded">8</span>
          <h3>{polez21[lang]}</h3>
          <p>{polez22[lang]}</p>
          <span class="material-symbols-rounded">9</span>
          <h3>{polez23[lang]}</h3>
          <p>{polez24[lang]}</p>
          <span class="material-symbols-rounded">10</span>
          <h3>{polez25[lang]}</h3>
          <p>{polez26[lang]}</p>
          <p>{polez27[lang]}</p>
          <span class="material-symbols-rounded">11</span>
          <h3>{polez28[lang]}</h3>
          <p>{polez29[lang]}</p>
          <span class="material-symbols-rounded">12</span>
          <h3>{polez30[lang]}</h3>
          <p>{polez31[lang]}</p>
          <span class="material-symbols-rounded">13</span>
          <h3>{polez32[lang]}</h3>
          <p>{polez33[lang]}</p>
          <span class="material-symbols-rounded">14</span>
          <h3>{polez34[lang]}</h3>
          <p>{polez35[lang]}</p>
          <span class="material-symbols-rounded">15</span>
          <h3>{polez36[lang]}</h3>
          <p>{polez37[lang]}</p>
          <span class="material-symbols-rounded">16</span>
          <h3>{polez38[lang]}</h3>
          <p>{polez39[lang]}</p>
          <span class="material-symbols-rounded">17</span>
          <h3>{polez40[lang]}</h3>
          <p>{polez41[lang]}</p>
        </div>
      </div>
    </main>
  );
}

export default Polezniy;
