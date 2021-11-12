const containerQuestions = document.querySelector('.questions');

function closeAllQuestions() {
    containerQuestions
        .querySelectorAll('.questions__body')
        .forEach(qBody => {
            qBody.style.cssText = ``;
            qBody
                .querySelector('.questions__btn')
                .classList
                .remove('questions__btn_close');
        });
}

containerQuestions
    .querySelectorAll('.questions__body')
    .forEach(qBody => {
        qBody
            .querySelector('.questions__title')
            .addEventListener('click', event => {
                let isOnlyClose = event
                                    .target
                                    .classList
                                    .contains('questions__btn_close');

                closeAllQuestions();

                if (isOnlyClose) return;

                const questionsBtn = qBody.querySelector('.questions__btn');
                const h = qBody
                            .querySelector('.questions__text')
                            .clientHeight + 100;

                qBody.style.cssText = `height: ${h}px;`;
            
                questionsBtn
                    .classList
                    .add('questions__btn_close');
             });
    });