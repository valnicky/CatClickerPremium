
var data = {
    currentCat: null,
    cats: [
        {
            clickCount: 0,
            name: 'Negrita',
            url: "img/negrita.jpg"
        },
        {
            clickCount: 0,
            name: 'Kitty',
            url: "img/kitty.jpg"
        },
        {
            clickCount: 0,
            name: 'Jugueton',
            url: "img/jugueton.jpg"
        },
        {
            clickCount: 0,
            name: 'Monita',
            url: "img/monita.jpg"
        },
        {
            clickCount: 0,
            name: 'Peque',
            url: 'img/peque.jpg'
        }

    ],

    addCat: function(name, url) {
        this.cats.push({name: name, url: url});
    },

    click: function(elem) {
        var catInfo = document.querySelector("#info");
        var catName = document.querySelector("#cat-name");
        var catClicks = document.querySelector('#cat-clicks');
        var cuadro = document.querySelector('.cuadro');

        cuadro.innerHTML = `<a class="catItem"><img src="${elem.url}" alt="${elem.name}"></a>`;
        
        elem.catClicks = 0;
        elem.catClicks ++;
        catClicks.innerText = `Clicks:  ${elem.clicks}`;
    }

}

// clear the screen for testing
//document.body.innerHTML = '';

//var nums = [1,2,3];

// Let's loop over the cats in our array
for (var i = 0; i < data.cats.length; i++) {

    // This is the cat we're on...
    var numCat = data.cats[i];

    // We're creating a DOM element for the cat
    var elem = document.createElement('div');
    elem.textContent = numCat;
   
    // ... and when we click, alert the value of `numCat`
    elem.addEventListener('click', (function(num) {
        return function() {
            alert(num);
            console.log(numCat);
        };
    })(numCat));


function bindBtnToCat(idCat) {
    $('imgCat'+ idCat).click(function(){
        //hideAllCats();
        $('imgCat'+ idCat).show();
    });

}
function bindCounterToCat(idCat){
    var cat = "#cat" +idNumber;
    $(cat).click(function(){
        var count = $(cat+" > .counter").text();
        count = parseInt(count) + 1;
        $(cat + "> .counter").text(count);
    })
}


for(var i=1; i<= imgCatbtns.length; i++){
    bindButtonToCat(i);
}

for(var i=1; i<= cats.length; i++){
    bindCounterToCat(i);
}


 
    document.body.appendChild(elem);
};


var catView = {
    init: function() {
        this.catNameElem = document.getElementById('cat-name');
        this.catImageElem = document.getElementById('cat-img');
        this.countElem = document.getElementById('cat-count');
    
        this.catImageElem.addEventListener('click', function(e){
            octopus.incrementCounter();
        });
        this.render();

    },

    render: function() {
        var currentCat = octopus.getCurrentCat();
        this.countElem.textContent = currentCat.clickCount;
        this.catNameElem.textContent = currentCat.name;
        this.catImageElem.src = currentCat.imgSrc;

    }
}


var catListView = {
    init: function() {
        this.catListElem = document.getElementById('cat-list');
        this.render();
    },
    render: function() {
        var cats = octopus.getCats();
        this.catListElem.innerHTML = '';
   for (var i = 0; i < cats.length; i++) {
    var cat = cats[i];

    var elem = document.createElement('li');
   elem.textContent = cat.name;

   elem.addEventListener('click', (function(cat){
    return function () {
        octopus.setCurrentCat(cat);
        catView.render();
    };
   })(cat));
   this.catListElem.appendChild(elem);
   }

    }
}

var octopus = {
    init: function() {
        model.currentCat = model.cats[0];
        catListView.init();
        catView.init();
    },
    getCurrentCat: function() {
        return model.getCurrentCat;
    }
}

octopus.init();

