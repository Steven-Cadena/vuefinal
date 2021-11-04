<template>
    <div>
        <h1>Comic Padre</h1>
        <label>Titulo:</label>
        <input type="text" v-model="titulo" required/><br/>
        <label>Imagen:</label>
        <input type="text" v-model="imagen" required/><br/>
        <label>Descripción:</label>
        <input type="text" v-model="descripcion" required><br/><br/>
        <button class="btn btn-warning" @click="insertarComic">
            Nuevo Comic
        </button>
        <div v-if="favorito" style="backgroundColor:aqua">
            <h1>{{favorito.titulo}}</h1>
            <img :src="favorito.imagen" style="width:200px"/>
            <h1>{{favorito.descripcion}}</h1>
            
        </div>
        <hr/>
        <div v-for="(com, index) in comics" :key="index">
            <ComicHijo :comic="com"
            :posicion="index"
            v-on:modificarComicPadre="modificarComicPadre"
            v-on:eliminarComicPadre="eliminarComicPadre"
            v-on:seleccionarFavoritoPadre="seleccionarFavoritoPadre"/>
        </div>
    </div>
</template>

<script>

import ComicHijo from './ComicHijo.vue';
export default {
    name:"ComicPadre",
    components: {
        ComicHijo
    },
    methods: {
        insertarComic(){
            var comicNuevo = {
                titulo:this.titulo,
                imagen:this.imagen,
                descripcion:this.descripcion,
            };
            this.comics.push(comicNuevo);
        },
        seleccionarFavoritoPadre(comic){
            this.favorito = comic;
        },
        modificarComicPadre(posicion){
            this.comics[posicion].titulo = this.titulo;
            this.comics[posicion].imagen = this.imagen;
            this.comics[posicion].descripcion = this.descripcion
        },
        eliminarComicPadre(posicion){
            this.comics.splice(posicion,1);
        }
    },
    data(){
        return{
            comics: [
                {
                titulo: "Spiderman",
                imagen:
                    "https://3.bp.blogspot.com/-i70Zu_LAHwI/T290xxduu-I/AAAAAAAALq8/8bXDrdvW50o/s1600/spiderman1.jpg",
                descripcion: "Hombre araña"
                },
                {
                titulo: "Wolverine",
                imagen:
                    "https://images-na.ssl-images-amazon.com/images/I/51c1Q1IdUBL._SX259_BO1,204,203,200_.jpg",
                descripcion: "Lobezno"
                },
                {
                titulo: "Guardianes de la Galaxia",
                imagen:
                    "https://cdn.normacomics.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/g/u/guardianes_galaxia_guadianes_infinito.jpg",
                descripcion: "Yo soy Groot"
                },
                {
                titulo: "Avengers",
                imagen:
                    "https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg",
                descripcion: "Los Vengadores"
                },
                {
                titulo: "Spawn",
                imagen:
                    "https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png",
                descripcion: "Al Simmons"
                },
                {
                titulo: "Batman",
                imagen:
                    "https://www.comicverso.com/wp-content/uploads/2020/06/The-Killing-Joke-657x1024.jpg",
                descripcion: "Murcielago"
                }
            ],
            titulo:"",
            descripcion:"",
            imagen:"",
            favorito:null
        }
    }
}
</script>