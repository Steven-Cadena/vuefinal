<template>
    <div>
        <h1 style="color:blue">{{comic.titulo}}</h1>
        <button @click="seleccionarFavorito(comic)" class="btn btn-success">
            Seleccionar Favorito
        </button>
        <button class="btn btn-primary" @click="modificarComic(posicion)">
            Modificar Comic
        </button>
        <button class="btn btn-danger" @click="eliminarComic(posicion)">
            Eliminar Comic
        </button>
       <h2>{{comic.descripcion}}</h2>
       <img :src="comic.imagen" style="width:200px"/>
    </div>
</template>

<script>
export default {
    name:"ComicHijo",
    props:["comic", "posicion"],
    mounted(){
        console.log(this.comic);
    },
    methods:{
        eliminarComic(posicion){
            this.$emit("eliminarComicPadre", posicion);
        },modificarComic(posicion){
            this.$emit("modificarComicPadre", posicion);
        },seleccionarFavorito(comic){
            this.$emit("seleccionarFavoritoPadre", comic);
        }
    }
}
</script>