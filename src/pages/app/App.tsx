import React from 'react';
import s from './App.module.scss';
import shevDown from "../../img/chevron-down.svg"
import grid from "../../img/grid.svg"
import reply from "../../img/reply.svg"
import columns from "../../img/columns.svg"

function App() {
  return (
    <div className={s.app}>
        <div className={s.header + ' ' + s.borderWhite + ' ' + s.backgroundOne}>
          <img className={s.header__img} src={grid} alt="" />
          <img className={s.header__img} src={reply} alt="" />
          <div className={s.header__text + ' ' + s.header__text_active}>Просмотр</div>
          <div className={s.header__text}>Управление</div>
        </div>
        <div className={s.name + ' ' + s.borderWhite + ' ' + s.backgroundOne}>
          <div className={s.name__text}>
            Название проекта
          </div>
          <img src={shevDown} alt="" />
        </div>
        <div className={s.cap + ' ' + s.borderWhite + ' ' + s.backgroundOne}>
          <div className={s.cap__text}>
            Смета кофейни
          </div>
        </div>
        <div className={s.list + ' ' + s.borderWhite + ' ' + s.backgroundOne}>
          <div className={s.list__item}>
            <img src={columns} className={s.list__icon} />
            <div className={s.list__text}>
              ITEM1
            </div>
          </div>
          <div className={s.list__item}>
            <img src={columns} className={s.list__icon} />
            <div className={s.list__text}>
              ITEM2
            </div>
          </div>
          <div className={s.list__item}>
            <img src={columns} className={s.list__icon} />
            <div className={s.list__text}>
              ITEM3
            </div>
          </div>
          <div className={s.list__item + ' ' + s.list__item_active}>
            <img src={columns} className={s.list__icon} />
            <div className={s.list__text}>
              СК
            </div>
          </div>
          <div className={s.list__item}>
            <img src={columns} className={s.list__icon} />
            <div className={s.list__text}>
              ITEM4
            </div>
          </div>
          <div className={s.list__item}>
            <img src={columns} className={s.list__icon} />
            <div className={s.list__text}>
              ITEM5
            </div>
          </div>
          <div className={s.list__item}>
            <img src={columns} className={s.list__icon} />
            <div className={s.list__text}>
              ITEM6
            </div>
          </div>
        </div>
        <div className={s.tablo + ' ' + s.borderWhite + ' ' + s.backgroundTwo}>Tablo</div>
    </div>
  );
}

export default App;