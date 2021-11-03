<template>
    <div>
        <h1>Multiplicar</h1>
        <label>Introduzca un número:</label>
        <input type="number" v-model="numero" />
         <ul v-if="resultado.length != 0">
            <li v-for="resul in resultado" :key="resul">
                {{resul}}
            </li>
        </ul> 
        <button @click="multiplicar(numero)">
            Multiplicar
        </button>
    </div>
</template>

<script>
export default {
    name:"Multiplicar",
    methods: {
        multiplicar(num){
             for (var i = 1; i<=10; i++){
                 var result = num * i;
                 this.resultado.push(result);
                 console.log("entra aquí");
             }
            return this.resultado;
        }
    },
    data(){
        return{
            resultado:[],
            numero:0
        }
    }
}
</script>