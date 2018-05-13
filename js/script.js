
const data = {
    adminBtnVisible: false,
    cats: [{
        name: 'Jugueton',
        src: 'img/jugueton.jpg',
        clicksCount: 0
    },{
        name: 'Negrita',
        src: 'img/negrita.jpg',
        clicksCount: 0
    }, {
        name: 'Kitty',
        src: 'img/kitty.jpg',
        clicksCount: 0
    }, {
        name: 'Monita',
        src: 'img/monita.jpg',
        clicksCount: 0
    },{
        name: 'Peque',
        src: 'img/peque.jpg',
        clicksCount: 0
    }]
};

const octopus = {
    variables: () => {
        const list = document.querySelector('.list');
        let cats = octopus.getCats();
        const catImg = document.querySelector('#cat');
        const catName = document.querySelector('.cat-name');
        const clicks = document.querySelector('.clicks');
        const button = document.querySelector('.button');
        const admin = document.querySelector('.admin');
        return {
            list: list,
            cats: cats,
            catImg: catImg,
            catName: catName,
            clicks: clicks,
            button: button,
            admin: admin,
        }
    },
    init: () => {
        octopus.variables();
        catView.init();
        catView.render();
        catView.admin();
    },
    getCats: () => {
        return data.cats;
    },
    counter(add) {
        add.clicksCount++;
    },
    showAdmin: () => {
        return data.adminBtnVisible;
    }
};


const catView = {
    init: () => {
        const selector = octopus.variables();
        selector.cats.forEach(element => {
            // Create the cats list menu
            const li = document.createElement('li');
            /*li.innerText = element.name;*/
             li.innerHTML = "<div class='horizontal'><img src ='" + element.src+"' </div>";
            if(element.src ==! 'img/jugueton.jpg'){
                 li.innerHTML = "<div class='horizontal'><img src ='" + element.src+"' </div>";
             }else{
                 li.innerHTML = "<div class='big'><img src ='" + element.src+"' </div>";
             }
           

            selector.list.appendChild(li);

            // Change image on click
            li.addEventListener('click', () => {
                selector.catImg.src = element.src;
                selector.catImg.alt = element.src;
                selector.catName.innerText = element.name;
                selector.clicks.innerText = element.clicksCount;
            });
        });

    },

    render: () => {
        // Cat image event listener
        const selector = octopus.variables();
        selector.catImg.addEventListener('click', element => {
            for (let i = 0; i < selector.cats.length; i++) {
                if (element.target.getAttribute('src') === selector.cats[i].src) {
                    octopus.counter(selector.cats[i]);
                    selector.clicks.innerText = selector.cats[i].clicksCount;
                };
            };
        });
    },
    admin: () => {
        // Change the cat image, name and clicks from admin menu
        const selector = octopus.variables();
        const div = document.createElement('div');
        div.innerHTML = `
    <fieldset>
        <legend align="right">Admin</legend>
        <div class="center">
            <div class="input-label">
                <p><label for="name">Cat Name</label></p>
                <p> <label for="url">Img URL</label></p>
                <p><label for="clicks-count">Clicks</label></p>
            </div>
            <div class="input-text">
                <p> <input type="text" name="Cat Name" id="name" style="width: 100%"></p>
                <p> <input type="text" name="Img URL" id="url" style="width: 100%"></p>
                <p> <input type="number" name="Clicks" id="clicks-count" style="width: 100%"></p>
            </div>
        </div>
        <div class="sub"><button class="cancel">Cancel</button><button class="submit">Submit</button>
        </div>
    </fieldset>`;

        selector.button.addEventListener('click', () => {
            selector.admin.insertAdjacentElement('afterbegin', div);
            const cancel = document.querySelector('.cancel');
            cancel.addEventListener('click', () => {
                selector.admin.innerHTML = '';
            });

            const submit = document.querySelector('.submit');
            submit.addEventListener('click', () => {
                const inputName = document.getElementById('name').value;
                const inputUrl = document.getElementById('url').value;
                const inputClicks = document.getElementById('clicks-count').value;
                selector.cats.splice(999, 0, { 'name': inputName, 'src': inputUrl, 'clicksCount': inputClicks });
                selector.list.innerHTML = '';
                catView.init();
            })
        });
    },
}

octopus.init();


