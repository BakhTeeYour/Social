import React from "react";
import s from './Content.module.css'
import MyPosts from "./Posts/MyPosts";

const Content = () => {
    return (
        <div>
            content
            <div>
                <img
                src="https://kuzovspec.ru/wp-content/uploads/2016/08/%D0%9C%D0%B5%D1%80%D1%81%D0%B5%D0%B4%D0%B5%D1%81-140_%D1%911.jpg"
                className={s.mb140}
                alt="MBW140"/>
            </div>
            <div>
                <img src="https://www.pngarts.com/files/5/Cartoon-Avatar-PNG-Photo.png" className={s.avatar}
                     alt="avatar"/>
            </div>
            <MyPosts/>
        </div>
    )
}

export default Content;