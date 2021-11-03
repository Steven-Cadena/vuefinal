<template>
    <div>
        <h1>Comunicación component Padre Hijo</h1>
        <h2 v-if="favorito">Su deporte favorito es 
          <span  style="color:red">
              {{favorito}}
          </span>  
        </h2>
        <ul>
            <li v-for="depor in deportes" :key="depor">
                <Deporte :deporte="depor" 
                v-on:seleccionarFavoritoParent="seleccionarFavoritoParent"/> 
                <!-- LOS PROPS HAY QUE ENVIARLOS CON EL (:) -->
            </li>
        </ul>
    </div>
</template>


<script>
import Deporte from './Deporte.vue'

export default {
    name:"Deportes",
    methods: {
        seleccionarFavoritoParent(deporte) {
            this.favorito=deporte;
        }
    },
    components: {
        Deporte,
    },
    data(){
        return{
            deportes:["Canicas","Padel","Fútbol","Baloncesto","Tenis","Surf"],
            favorito:null
        }
    }
}
</script>