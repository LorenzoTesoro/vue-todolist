/* Milestone 1: Stampare all'interno di una lista, un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
- creo un ul nel markup in cui stampare gli items
- ciclo nel primo li con v-for per stampare i miei items
- nell'li stabilisco una condizione rispetto alla classe: se done è true, allora applica la classe "line_throught", altrimenti no
*/

/* Milestone 2:  Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
 - icona vicino ad ogni item 
 - @click sull'icona: il todo sparisce
*/

/* MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

- markup: input + button
- @click sul button che mi richiama una funzione 
- funzione: cosa deve fare? pushare il nuovo todo all'inizio dell'array
*/


const { createApp } = Vue

createApp({
    data(){
        return{
            newTask:{
                text:'',
                done:false
            },
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
        isDone(index){
            this.tasks.splice(index,1)
        },
        addNewTask(){
            console.log(this.newTask)
            this.tasks.push(this.newTask)
            // this.tasks.push(this.newTask)
            //console.log(this.tasks.push(this.newTask.text))
            //this.tasks.push(this.newTask)
        }
    }
}).mount('#app')