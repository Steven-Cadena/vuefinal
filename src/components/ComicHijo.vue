<template>
    <div>
        <h1 style="color:blue">{{comic.titulo}}</h1>
        <button>
            Seleccionar Favorito
        </button>
        <button class="btn btn-info">
            Modificar Comic
        </button>
        <button class="btn btn-danger">
            Eliminar Comic
        </button>
       <h2>{{comic.descripcion}}</h2>
       <img :src="comic.imagen" style="width:200px"/>
    </div>
</template>

<script>
export default {
    name:"ComicHijo",
    props:["comic"],
    mounted(){
        console.log(this.comic);
    }
}
</script>