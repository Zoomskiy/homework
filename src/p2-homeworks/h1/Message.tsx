import React from "react";
import m from "./Message.module.css";


type MessageTypes = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageTypes) {
    return (
        <div>
            <div className={m.item}>
                <div className={m.message}>
                    <img src={props.avatar} alt=""/>
                    <div className={m.message__background}>
                        <p className={m.author}>{props.name}</p>
                        <div>
                            <p>{props.message}
                                <span className={m.time}>{props.time}</span>
                            </p>

                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Message;
