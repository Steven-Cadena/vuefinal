<template>
    <div>
        <h1>Comunicación component Padre Hijo</h1>
        <ul>
            <li v-for="depor in deportes" :key="depor">
                {{depor}}
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    name:"Deportes",
    data(){
        return{
            deportes:["Canicas","Padel","Fútbol","Baloncesto","Tenis","Surf"]
        }
    }
}
</script>