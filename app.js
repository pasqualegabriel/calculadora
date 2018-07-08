var ComponenteVisor = {
    props: [
        'visor'
    ],
    template: `
        <input type="textfield" name="visor" :value="visor" @input="changeValue">
    `,
    methods: {
        changeValue(event) {
            this.$emit('changevisorvalue', event.target.value)
        }
    }
}

var ComponenteBotones = {
    template: `
        <div>
        
        <br>

        <input type="button" value="1" @click="operate(1)">
                
        <input type="button" value="2" @click="operate(2)">

        <input type="button" value="3" @click="operate(3)">

        <input type="button" value="+" @click="operate('+')">

        <br>

        <input type="button" value="4" @click="operate(4)">

        <input type="button" value="5" @click="operate(5)">

        <input type="button" value="6" @click="operate(6)">

        <input type="button" value="-" @click="operate('-')">

        <br>

        <input type="button" value="7" @click="operate(7)">

        <input type="button" value="8" @click="operate(8)">

        <input type="button" value="9" @click="operate(9)">

        <input type="button" value="*" @click="operate('*')">

        <br>

        <input type="button" value="0" @click="operate(0)">

        <input type="reset"  value="c" @click="clear()">

        <input type="button" value="." @click="operate('.')">

        <input type="button" value="/" @click="operate('/')">

        <br>

        <input type="button" style='width: 91%' value="=" @click="calcular()">
        
        </div>
    `,
    methods: {
        operate(element) {
            this.$emit('operatepressed', element)
        }, 
        calcular() {
            this.$emit('calcularpressed')
        }, 
        clear() {
            this.$emit('clearpressed')
        }
    }
}
  
new Vue({
    el: '#app',
    data:{
        visorValue: ""
    },
    components: {
        'display': ComponenteVisor,
        'botones': ComponenteBotones
    }, 
    methods: {
        operate(element) {
            this.visorValue += element
        }, 
        calcular() {
            this.visorValue = eval(this.visorValue).toString()
        }, 
        clear() {
            this.visorValue = ""
        }    
    }
})

