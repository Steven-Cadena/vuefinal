<template>
    <div>
        <h1>Parámetros Routing</h1>
        <button @click="redirectToHome()">
            Ir a Home
        </button>
        <h2 style="color:fuchsia" v-if="mensaje">
            {{mensaje}}
        </h2>
        <div v-else>
            <h2 style="color:blue">
                El número recibido es : {{numero}}
            </h2>
            <h2 style="color:red">
                El número doble es : {{doble}}
            </h2>
        </div>
        
    </div>
</template>

<script>
export default {
    name:"NumeroDoble",
    mounted(){
        if (this.$route.params.numero == null){
            this.mensaje = "No se han enviado parámetros."
        }else{
            //AQUI CAMBIAMOS EL NUMERO 
            this.mostrarDoble();
        }
    // EL WATCH SIRVE PARA CAMBIAR VALORES DE UNA PAGINA QUE EL MOUNTED NO LA CAMBIA
    },watch: {
        '$route.params.numero'(nextVal, prevVal){
            if ( nextVal != prevVal){
                this.mostrarDoble();
            }
        }
    },
    methods:{
        redirectToHome(){
            this.$router.push("/home");
        }, mostrarDoble(){
            this.numero= this.$route.params.numero;
            this.doble = parseInt(this.numero) * 2;
        },
    },
    data() {
        return{
            mensaje:null,
            numero: 0,
            doble: 0,
        }
    }
}
</script>