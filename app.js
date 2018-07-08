var DisplayComponent = {
    props: [
        'displayvalue'
    ],
    template: `
        <input type="textfield" :value="displayvalue" @input="changeValue">
    `,
    methods: {
        changeValue(event) {
            this.$emit('changedisplayvalue', event.target.value)
        }
    }
}

var SimpleButtonComponent = {
    props: [
        'buttonValue'
    ],
    template: `
        <input type="button" :value="buttonValue" @click="operate">
    `,
    methods: {
        operate(event) {
            this.$emit('changevalue', event.target.value)
        }
    }
}

var ButtonComponent = {
    template: `
        <div>

            <br>

            <boton buttonValue="1" @changevalue="operate"></boton>
            <boton buttonValue="2" @changevalue="operate"></boton>
            <boton buttonValue="3" @changevalue="operate"></boton>
            <boton buttonValue="+" @changevalue="operate"></boton>

            <br>

            <boton buttonValue="4" @changevalue="operate"></boton>
            <boton buttonValue="5" @changevalue="operate"></boton>
            <boton buttonValue="6" @changevalue="operate"></boton>
            <boton buttonValue="-" @changevalue="operate"></boton>

            <br>

            <boton buttonValue="7" @changevalue="operate"></boton>
            <boton buttonValue="8" @changevalue="operate"></boton>
            <boton buttonValue="9" @changevalue="operate"></boton>
            <boton buttonValue="*" @changevalue="operate"></boton>

            <br>

            <boton buttonValue="0" @changevalue="operate"></boton>
            <input type="reset"  value="c" @click="clear">
            <boton buttonValue="." @changevalue="operate"></boton>
            <boton buttonValue="/" @changevalue="operate"></boton>

            <br>

            <input type="button" style='width: 91%' value="=" @click="calculate">
        
        </div>
    `,
    components: {
        'boton': SimpleButtonComponent
    },
    methods: {
        operate(element) {
            this.$emit('operatevalue', element)
        }, 
        calculate() {
            this.$emit('calculatevalue')
        }, 
        clear() {
            this.$emit('clearvalue')
        }
    }
}
  
new Vue({
    el: '#app',
    data:{
        displayValue: ""
    },
    components: {
        'display': DisplayComponent,
        'buttons': ButtonComponent
    }, 
    methods: {
        operate(element) {
            this.displayValue += element
        }, 
        calculate() {
            this.displayValue = eval(this.displayValue).toString()
        }, 
        clear() {
            this.displayValue = ""
        }    
    }
})

