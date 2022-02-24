// Vue JS
const container = new Vue({
    el: ".container",
    data: {
        // Array oggetti
        arrayItems: [
        {
            immagine: "img/01.jpg",
            titolo: "Svezia",
            testo: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
        },
    
        {
            immagine: "img/02.jpg",
            titolo: "Svizzera",
            testo: "Lorem ipsum",
        },
    
        {
            immagine: "img/03.jpg",
            titolo: "Gran Bretagna",
            testo: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        },
    
        {
            immagine: "img/04.jpg",
            titolo: "Germania",
            testo: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,",
        },
    
        {
            immagine: "img/05.jpg",
            titolo: "Paradise",
            testo: "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,",
        }],

        // Indice corrente immagine
        imgCurrent: 0,
    },

    created: function(){
        this.autoPlay();
    },

    methods: {
        // Funzione arrowUp
        arrowUp: function(){
            if (this.imgCurrent > 0 ){
                this.imgCurrent --;
            } else if (this.imgCurrent == 0){
                this.imgCurrent = 4;
            }
        },

        // Funzione arrowDown
        arrowDown: function(){
            if (this.imgCurrent < 4){
                this.imgCurrent ++;
            } else if (this.imgCurrent == 4){
                this.imgCurrent = 0;
            }
        },

        // Autoplay
        autoPlay: function(){
            this.intervallo = setInterval(this.arrowDown, 1680);
        },

        // Stop Autoplay
        stopPlay: function(){
            clearInterval(this.intervallo);
        }
    }
})
console.log(container);





