/* Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa) */

/* Bonus 2
- @click sul text del task
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
            this.tasks.unshift(this.newTask)
            this.newTask = {}
        },
        changeStatus(index){
            console.log(this.tasks[index])
            if(this.tasks[index].done === true){
                this.tasks[index].done = false
            } else {
                this.tasks[index].done = true
            } 
        }
    }
}).mount('#app')