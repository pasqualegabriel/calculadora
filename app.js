const app = new Vue({
    el: '#app',
    data: {
        visor :""
    },
    methods: {
        operate(element){
            this.visor += element
        }, 
        calcular(){
            this.visor = eval(this.visor).toString()
        }, 
        clear(){
            this.visor = ""
        }
    }
})