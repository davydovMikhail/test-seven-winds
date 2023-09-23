import { useState } from 'react';
import s from './section.module.scss';
import file from "../../img/file.svg"
import trash from "../../img/trash.svg"
import clsx from "clsx";
import { useDetectClickOutside } from "react-detect-click-outside";

function Section() {
    const clickOutside = () => {
        if (editMode) {
            setEditMode(false);
        }
        
    }

    const ref = useDetectClickOutside({ onTriggered: clickOutside });
    const [hover, setHover] = useState(false);
    const [editMode, setEditMode] = useState(false);

    



    return (
        <>
            <div className={s.section} 
                ref={ref}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onDoubleClick={() => setEditMode(true)}
            >
                <div className={s.section__item + " " + s.section__level}>
                    <div 
                       className={clsx(s.section__icon, {
                        [s.section__icon_hover]: hover,
                      })}
                    >
                        <img src={file} alt="file" />
                    </div>
                    {hover &&
                        <div className={s.section__icon + " " + s.section__icon_hover}>
                            <img src={trash} alt="trash" />
                        </div>
                    }
                </div>
                {editMode
                    ? <input className={s.section__input} type="number" />
                    : <div className={s.section__item}>
                        Южная строительная работа
                      </div>
                }
                {editMode
                    ? <input className={s.section__input} type="number" />
                    : <div className={s.section__item}>
                        20348
                      </div>
                }
                {editMode
                    ? <input className={s.section__input} type="number" />
                    : <div className={s.section__item}>
                        1750
                      </div>
                }
                {editMode
                    ? <input className={s.section__input} type="number" />
                    : <div className={s.section__item}>
                        108
                      </div>
                }
                {editMode
                    ? <input className={s.section__input} type="number" />
                    : <div className={s.section__item}>
                        1209123
                      </div>
                }
            </div>
        {/* <Section /> */}
        </>
        
    ) 
    
  }

export default Section;