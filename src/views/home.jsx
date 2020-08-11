import React, { useState, useEffect } from "react";
import Cabecalho from '../componentes/Geral/cabecalho';
import NoticiasAgora from '../componentes/Home/noticiasAgora';
import NoticiasDestaque from '../componentes/Home/noticiasDestaque';
import OutrasNoticias from '../componentes/Home/outrasNoticias';
import Patrocinador1 from '../componentes/Home/patroninador1';
import Artigos from '../componentes/Home/artigos';
import Rodape from '../componentes/Geral/rodape';
import VoltarInicio from '../componentes/Geral/voltarInicio';
 
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

            <NoticiasAgora/>

            <NoticiasDestaque/>
        
            <OutrasNoticias/>

            <Patrocinador1/>

            <Artigos/>

            <Rodape/>

            <VoltarInicio/>

        </div>

    );
}
