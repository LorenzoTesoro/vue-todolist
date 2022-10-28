/* Milestone 1: Stampare all'interno di una lista, un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
- creo un ul nel markup in cui stampare gli items
- ciclo nel primo li con v-for per stampare i miei items
- nell'li stabilisco una condizione rispetto alla classe: se done è true, allora applica la classe "line_throught", altrimenti no
*/


const { createApp } = Vue

createApp({
    data(){
        return{
            tasks: [
                {
                    text:'Fare i compiti',
                    done: true
                },
                {
                    text:'Fare la spesa',
                    done: false
                },
                {
                    text:'Fare la lavatrice',
                    done: true
                },
                {
                    text:'Sistemare armadio',
                    done: false
                },
                {
                    text:'Prenotare vacanze',
                    done: true
                }
            ]
        }
    },
    methods:{

    }
}).mount('#app')