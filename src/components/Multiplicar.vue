<template>
    <div>
        <h1>Multiplicar</h1>
        <!-- SOLUCION CON TABLA -->
        <label>Introduzca un número:</label>
        <input type="number" v-model="numero" />
        <button @click="mostrarTabla()">
            tabla multiplicar
        </button>
        <table border="1">
            <thead>
                <tr>
                    <th>Operación</th>
                    <th>Resultado</th>
                </tr>
            </thead>
            <tbody v-html="tabla">{{tabla}}</tbody>
        </table>
        <!--SOLUCION SIN TABLA
          <ul v-if="resultado.length != 0">
            <li v-for="resul in resultado" :key="resul">
                {{resul}}
            </li>
        </ul> 
        <button @click="multiplicar(numero)">
            Multiplicar
        </button>
        <hr/> -->
    </div>
</template>

<script>
export default {
    name:"Multiplicar",
    // SOLUCION CON TABLA
    methods: {
        mostrarTabla (){
            this.tabla='';
            for (var i = 1; i<=10; i++){
                var op = parseInt(this.numero) * i;
                this.tabla += "<tr>";
                this.tabla += "<td>" + this.numero + "*" + i + "</td>";
                this.tabla += "<td>" + op + "</td>";
                this.tabla += "</tr>";
            }
        }
    },
    data(){
        return{
            numero:0,
            tabla:""
        }
    }
    //SOLUCION SIN TABLA
    // methods: {
    //     multiplicar(num){
    //          for (var i = 1; i<=10; i++){
    //              var result = num * i;
    //              this.resultado.push(result);
    //              console.log("entra aquí");
    //          }
    //         return this.resultado;
    //     }
    // },
    // data(){
    //     return{
    //         resultado:[],
    //         numero:0,
    //     }
    // }
}
</script>