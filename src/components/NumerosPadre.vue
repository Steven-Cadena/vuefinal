<template>
    <div>
        <h1>Numeros Padre</h1>
        <h2 v-if="total != 0">La suma es:
          <span  style="color:red">
              {{total}}
          </span>  
        </h2>
        <button @click="nuevoNumero()" class="btn btn-danger">
            Nuevo Número
        </button>
        <div v-for="(num, index) in numeros" :key="index">
            <NumeroHijo :numero="num"
            v-on:sumarNumerosPadre="sumarNumerosPadre"/>
        </div>
    </div>
</template>
    
<script>
import NumeroHijo from './NumeroHijo.vue';

export default {
    name:"NumeroPadre",
    components: {
        NumeroHijo
    }, methods: {
        nuevoNumero(){
            var num = Math.floor(Math.random() * (50 - 0)) + 0;
            this.numeros.push(num);
        },
        sumarNumerosPadre(num){
            this.total = this.total + num;
        }
    },
    data(){
        return{
            numeros:[5,8,9],
            total:0
        }
    }
}
</script>