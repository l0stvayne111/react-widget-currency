import React from 'react';
import style from "./index.module.scss";
import Spacing from "../Spacing";
import {ICard} from "../../types/ICard";
import {isInteger} from '../../helpers';

const Card: React.FC<ICard> = ({label, value}) => {

    return (

        <div className={["Card", style.in].join(" ")}>

            <a className={style.source} target='_blank' href="https://cdn.cur.su">
                Cur.su
            </a>
            <Spacing size={'1.5rem'}/>
            <span className={style.label}>{label}</span>
            <Spacing size={'.05rem'}/>
            <div className={style.value}>
                ₽
                {
                    !isInteger(value) ? <React.Fragment>
                        {value.toString().split('.')[0]}
                        <small>.{value.toString().split('.')[1]}</small>
                    </React.Fragment> : <React.Fragment>{value}</React.Fragment>
                }
            </div>
            <div className={style.flag}/>
        </div>
    );
};

export default Card;