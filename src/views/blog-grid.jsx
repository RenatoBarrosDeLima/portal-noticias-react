import React, { useState, useEffect } from "react";
import Cabecalho from '../componentes/Geral/cabecalho';
import Caminho from '../componentes/Blog/caminhoGrid';
import Titutlo from '../componentes/Blog/titulo';
import ListaPosts from '../componentes/Blog/listaPosts';
import Rodape from '../componentes/Geral/rodape';
import VoltaInicio from '../componentes/Geral/voltarInicio';

 
export default function Home() {

    useEffect(() => {
        const script = document.createElement("script");

        script.src = require("../assets/js/main.js");
        script.async = true;

        document.body.appendChild(script);
      }, [])


    return (
        <div className="content">

            <Cabecalho/>

            <Caminho/>

            <Titutlo/>

            <ListaPosts/>

            <Rodape/>

            <VoltaInicio/>

        </div>

    );
}
