import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    let link = "/dialogs/" + props.id
    return (
        <div><NavLink to={link}>{props.name}</NavLink></div>
    )
}

const Messages = (props) => {
    return (
        <div className={s.message}> {props.messages}</div>
    )
}

const Dialogs = (props) => {
    let dialogData = [
        {id: 1, name: "Bakha"},
        {id: 2, name: "Firdavs"},
        {id: 3, name: "Farrukh"},
        {id: 4, name: "Selim"},
        {id: 5, name: "Parviz"},
    ]
    let dialogsElement = dialogData.map(d => <Dialog name={d.name} id={d.id}/>)


    let messagesData = [
        {id: 1, message: "Hello, This is my first project"},
        {id: 2, message: "Hey! WHat's up man?"},
        {id: 3, message: "Yo, You're alright?"},
    ]
    let messagesElement = messagesData.map(m => <Messages messages={m.message} id={m.id}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog}>
                    {dialogsElement}
                </div>
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    )
}

export default Dialogs;