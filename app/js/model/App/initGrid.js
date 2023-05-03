import {Isotope} from '../../../libs/libs.js';

const initGrid = (elem, btns) => {
    const iso = new Isotope( elem, {
        // options
        itemSelector: '.works__item',
        layoutMode: 'fitRows'
    });


    function handleClick(btns, e){
        const filter = this.dataset.filter;
        btns.forEach(el => el.classList.remove('active'));
        this.classList.add('active');

        iso.arrange({
            filter
        });
    }


    btns.forEach(btn => {
        btn.addEventListener('click', handleClick.bind(btn, btns));
    })
}


export {
    initGrid
}