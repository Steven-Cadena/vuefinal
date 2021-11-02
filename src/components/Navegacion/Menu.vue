<template>
    <div>
        <nav>
            <ul id="menu">
                <li>
                    <router-link to="/home">Home</router-link>
                </li>
                <li>
                    <router-link to="/multiplicar">Multiplicar</router-link>
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
    padding: 10px;
}
</style>