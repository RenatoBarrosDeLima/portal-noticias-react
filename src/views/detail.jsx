import React, { useState, useEffect } from "react";

import Cabecalho from '../componentes/Geral/cabecalho';
import Caminho from '../componentes/Noticia/caminho';
import Descricao from '../componentes/Noticia/descricao';
import Rodape from '../componentes/Geral/rodape';
import VoltaInicio from '../componentes/Geral/voltarInicio';

 
export default function ListagemEscolas() {

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

            <Descricao/>

            <Rodape/>

            <VoltaInicio/>

        </div>

    );
}

