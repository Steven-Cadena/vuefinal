<template>
    <div>
        <nav>
            <ul id="menu" class="navbar navbar-dark bg-dark " >
                <li v-for="(num,index) in numeros" :key="index">
                    <router-link :to="'/numerotriple/' + num" class="nav-link text-light">
                        Número Triple {{num}}
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name:"NumerosAleatorios",
    methods:{
        generarNumeros(){
            for(var i = 1; i<=10; i++){
                var aleatorio = Math.floor(Math.random() * (10 - 1)) + 1;
                this.numeros.push(aleatorio);
            }
        }
    },
    mounted(){
        this.generarNumeros();
    },data(){
        return{
            numeros:[],
        }
    }
}
</script>

<style scoped>
ul#menu li{
    display: inline;
}
</style>