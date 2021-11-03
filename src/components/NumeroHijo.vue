<template>
    <div>
        <h1 style="color:blue">Numero hijo :{{numero}}</h1>
        <button class="btn btn-success" value='numero' @click="sumarNumeros(numero)">
            Sumar {{numero}} 
        </button>
    </div>
</template>

<script>
export default {
    name:"NumeroHijo",
    props:["numero"],
    methods:{
        sumarNumeros(numero){
            this.$emit("sumarNumerosPadre", numero);
        }
    },
}
</script>