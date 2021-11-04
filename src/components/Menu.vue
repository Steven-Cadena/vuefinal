<template>
    <div>
        <nav>
            <ul id="menu" class="navbar navbar-dark bg-dark " >
                <li class="nav-item active">
                    <router-link to="/home" class="nav-link text-light">Home</router-link>
                </li>
                <!-- PARA PASAR NÚMEROS POR URL -->
                <li class="nav-item active" v-for="num in valores" :key="num">
                    <router-link :to="'/numerodoble/' + num" class="nav-link text-light">
                        Número doble {{num}}
                    </router-link>
                </li>

                <li class="nav-item active">
                    <router-link to="/numerodoble" class="nav-link text-light"> SIN Número doble</router-link>
                </li>
                <li>
                    <router-link to="/comic" class="nav-link text-light">Comic</router-link>
                </li>
                <li>
                    <router-link to="/multiplicar" class="nav-link text-light">Multiplicar</router-link>
                </li>
                <li>
                    <router-link to="/deportes" class="nav-link text-light">Deportes</router-link>
                </li>
                <li>
                    <router-link to="/numerospadre" class="nav-link text-light">Números Padre</router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {
    name:"Menu",
    data(){
        return{
            valores :[66,99,12],
        }
    }
}
</script>

<style scoped>
ul#menu li{
    display: inline;
}
</style>