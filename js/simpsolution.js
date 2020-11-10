const anchors = document.querySelectorAll('a.scroll-to');
let burger = document.getElementById('burger');
let bMenu = document.getElementById('burgermenu');
let str;
let checkBurger = false;

for (let anchor of anchors) {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    })
}

burger.addEventListener('click', () => {
    bMenu.classList.toggle('show');
    burger.classList.toggle('header__burger-color');
    str = `
        <div class="burger" id="burger-items">
        <a class="burger__link scroll-to" href="#about" name="link">О курсе</a>
        <a class="burger__link scroll-to" href="#forwhom" name="link">Для кого</a>
        <a class="burger__link scroll-to" href="#program" name="link">Программа</a>
        <a class="burger__link scroll-to" href="#teacher" name="link">Ведущие</a>
        <a class="burger__link scroll-to" href="#work" name="link">Трудоустройство</a>
        </div>`;
    bMenu.insertAdjacentHTML('beforeend', str);
    if (!bMenu.classList.contains("show")) {
        bMenu.innerHTML = '';
    }

    document.getElementById('burger-items').addEventListener('click', (evt) => {
        let e = evt.target
        if (e.name === 'link') {
            bMenu.innerHTML = '';
            bMenu.classList.toggle('show');
            burger.classList.toggle('header__burger-color');
        }
    })
})


class simple {
    constructor() {
        this._init();
    }
    _init() {
        this.console();
        this.certClick();
        this.pagination();
    }

    certClick() {
        let cert_click = document.getElementById('certs-click');
        let certsmodal = document.getElementById('certsmodal');

        cert_click.addEventListener('click', evt => {

            let e_cert = evt.target.dataset.name;
            if (e_cert === 'certs') {
                certsmodal.classList.add("show");
                certsmodal.classList.add("bg-transparent");

                let str_certs = `
                    <div class="all-certs__modal" id="control">
                        <button class="all-certs__btn" name="control" data-step="-1">&larr;</button>
                        <div class="all-certs__gallery" id="gallery">
                            <div>
                                <img class="all-certs__img" id="main-pic">
                            </div>
                        </div>
                        <button class="all-certs__btn" name="control" data-step="1">&rarr;</button>
                        <div class="all-certs__close">
                        <a class="all-certs__cross" id="closemodal">&times;</a></div>
                    </div>`;
                certsmodal.insertAdjacentHTML('beforeend', str_certs);
                let lhref = location.href;
                let imgsArr = [
                    lhref + 'img/certs/cert_01.jpg',
                    lhref + 'img/certs/cert_02.jpg',
                    lhref + 'img/certs/cert_03.jpg',
                    lhref + 'img/certs/cert_04.jpg',
                    lhref + 'img/certs/cert_05.jpg',
                    lhref + 'img/certs/cert_06.jpg',
                    lhref + 'img/certs/cert_07.jpg',
                    lhref + 'img/certs/cert_08.jpg',
                    lhref + 'img/certs/cert_09.jpg',
                    lhref + 'img/certs/cert_10.jpg',
                ];

                let main_pic = document.getElementById('main-pic');
                let contr = document.getElementById('control');
                main_pic.src = imgsArr[evt.target.id];

                contr.addEventListener('click', evt => {
                    let e2 = evt.target //<button>
                    if (e2.name === 'control') {
                        let step = +e2.dataset.step;
                        let actual = imgsArr.indexOf(main_pic.src);

                        if ((actual === imgsArr.length - 1) && (step === 1)) actual = -1
                        if ((actual === 0) && (step === -1)) actual = imgsArr.length

                        main_pic.src = imgsArr[actual + step]
                    }
                });

                let closeModal = document.getElementById('closemodal');
                closeModal.addEventListener('click', () => {
                    certsmodal.classList.remove("show");
                    certsmodal.classList.remove("bg-transparent");
                    certsmodal.innerHTML = '';
                })

            }
        })
    }

    pagination() {
        let fotoArr = [{
                id: 1,
                url: 'img/litenko_v_1.jpg'
            },
            {
                id: 2,
                url: 'img/litenko_v_2.jpg'
            }
        ];
        let str_pag = '';
        let str_pag_class;

        const pagId = document.getElementById('pagination');
        const bgfotoId = document.getElementById('bgfoto');
        fotoArr.forEach((elem) => {
            if (elem.id == 1) {
                str_pag_class = `<div class="teacher__item teacher__item-active" data-name="fotopag" data-pag="${elem.id}" id="teacherfoto${elem.id}"></div>`
            } else if (elem.id > 1) {
                str_pag_class = `<div class="teacher__item" data-name="fotopag" data-pag="${elem.id}" id="teacherfoto${elem.id}"></div>`
            }
            str_pag = str_pag + str_pag_class;
        })
        pagId.insertAdjacentHTML('beforeend', str_pag);

        pagId.addEventListener('click', (evt) => {
            let efoto = evt.target.dataset.name;
            if (efoto === 'fotopag') {
                let fotoId = evt.target.dataset.pag;
                let imgSrc = fotoArr.find(foto => foto.id == fotoId).url

                bgfotoId.style.backgroundImage = `url(${imgSrc})`;
                document.querySelector('.teacher__item-active').classList.remove('teacher__item-active');
                document.getElementById(`teacherfoto${fotoId}`).classList.add('teacher__item-active');
            }
        });


    }

    console() {
        console.log(`

Сверстал tolkoxa`)
    }
}

let simpSolution = new simple();