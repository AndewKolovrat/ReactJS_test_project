import React from 'react';
import ReactDom from 'react-dom';

import MessageField from './components/MessageField.jsx';

const container = document.querySelector('#app');
let messages = ['Привет', 'Как дела?'];

const btnClick = () => {
    messages.push('норм...');
    // не нашел способ перерисовать приложение :(
    // предпологаю что в функциональных компонентах без "хуков" это или невозможно или ресурсоемко
};

const content = (
    <div>
        <MessageField messages={messages} />
        <button onClick={btnClick}>asd</button>
    </div>
);

ReactDom.render(content, container);