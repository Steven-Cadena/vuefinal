<template>
    <div>
        <nav>
            <ul id="menu" class="navbar navbar-dark bg-dark " >
                <li class="nav-item active">
                    <router-link to="/home" class="nav-link text-light">Home</router-link>
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
}
</script>

<style scoped>
ul#menu li{
    display: inline;
}
</style>