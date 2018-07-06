var Child = {
    data: function () {
        return {
            visor :""
        };
    },
    template: `
        <input type="textfield" name="visor" v-model="visor">
    `,
    methods: {
        operate(element) {
            this.visor += element
        }, 
        calcular() {
            this.visor = eval(this.visor).toString()
        }, 
        clear() {
            this.visor = ""
        }
    },
    created: function() {
        this.$parent.$on('operar', this.operate)
        this.$parent.$on('calculate', this.calcular)
        this.$parent.$on('limpiar', this.clear)
    }
}
  
new Vue({
    el: '#app',
    components: {
        'display': Child
    }, 
    methods: {
        operate: function(element) {
            this.$emit('operar', element)
        },
        calcular: function() {
            this.$emit('calculate')
        },
        clear: function() {
            this.$emit('limpiar')
        }      
    }
})

