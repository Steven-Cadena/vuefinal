<template>
    <div>
        <h1>Parámetros Routing Triple</h1>
        <h2 style="color:fuchsia" v-if="mensaje">
            {{mensaje}}
        </h2>
        <div v-else>
            <h2 style="color:blue">
                El número recibido es : {{numero}}
            </h2>
            <h2 style="color:red">
                El número triple es : {{triple}}
            </h2>
        </div>
    </div>
</template>

<script>
export default {
    name:"NumeroTriple",
    mounted(){
        if(this.$route.params.numero == null){
            this.mensaje = "No hemos recibido ningun parámetro."
        }else{
            this.mostrarTriple();
        }
    },watch: {
        '$route.params.numero'(nextVal, prevVal){
            if ( nextVal != prevVal){
                this.mostrarTriple();
            }
        }
    },methods:{
        mostrarTriple(){
            this.numero = this.$route.params.numero;
            this.triple = parseInt(this.numero) * 3;
        }
    },data(){
        return{
            mensaje:null,
            numero:0,
            triple:0
        }
    }
}
</script>