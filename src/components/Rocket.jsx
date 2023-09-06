import React from "react";
import horizonte from "../assets/images/fondoSpaceAnimate.png";
import satelite from "../assets/images/satelite.png";
import cohete from "../assets/images/cohete.png";
import llamas from "../assets/images/llamas.png";
import fondoSpace from "../assets/images/earthSpaceFondo.jpg";
import estrellaFugaz from "../assets/images/estrellaFugaz.gif";

import "..//rocket.css";

export const Rocket = ({ altura }) => {
  if (altura >= 100) {
    altura = 100;
  }

  let coheteMove = altura - (80 * altura) / 100;
  coheteMove = altura - coheteMove;
  coheteMove = coheteMove + "%";

  let coheteMove2 = altura - (80 * altura) / 100;
  coheteMove2 = altura - coheteMove2;
  coheteMove2 = coheteMove2 + "%";

  let fondoMove = (altura * 1600) / 100;
  fondoMove = fondoMove - 1600;
  let fondoMove1700 = (altura * 1600) / 130;
  fondoMove1700 = fondoMove1700 - 1200;
  let fondoMove1600 = (altura * 1600) / 140;
  fondoMove1600 = fondoMove1600 - 1100;
  let fondoMove1500 = (altura * 1600) / 150;
  fondoMove1500 = fondoMove1500 - 1000;
  let fondoMove1400 = (altura * 1600) / 160;
  fondoMove1400 = fondoMove1400 - 800;
  let fondoMove1300 = (altura * 1600) / 170;
  fondoMove1300 = fondoMove1300 - 700;
  let fondoMove1200 = (altura * 1600) / 210;
  fondoMove1200 = fondoMove1200 - 550;
  let fondoMove1100 = (altura * 1600) / 250;
  fondoMove1100 = fondoMove1100 - 450;
  let fondoMove1000 = (altura * 1600) / 320;
  fondoMove1000 = fondoMove1000 - 350;
  let fondoMove900 = (altura * 1600) / 410;
  fondoMove900 = fondoMove900 - 250;

  let eightyMore = fondoMove + 80;
  fondoMove = fondoMove + "px";

  fondoMove1700 = fondoMove1700 + "px";
  fondoMove1600 = fondoMove1600 + "px";
  fondoMove1500 = fondoMove1500 + "px";
  fondoMove1400 = fondoMove1400 + "px";
  fondoMove1300 = fondoMove1300 + "px";
  fondoMove1200 = fondoMove1200 + "px";
  fondoMove1100 = fondoMove1100 + "px";
  fondoMove1000 = fondoMove1000 + "px";
  fondoMove900 = fondoMove900 + "px";

  eightyMore = eightyMore + "px";
  const widthWindow = window.innerWidth;

  if (widthWindow <= 821) {
    if (altura >= 100) {
      setTimeout(() => {
        const satelite = document.getElementById("satelite");
        satelite.classList.add("satelite__arrived");
        satelite.classList.remove("satelite__down");
        satelite.classList.remove("satelite__down__100");
      }, 0);
    }
  } else {
    setTimeout(() => {
      const rocketSpace = document.getElementById("rocketSpace");
      rocketSpace.classList.add("contenedor__cohete__arrived__done");
      rocketSpace.classList.remove("contenedor__cohete__arrived");
    }, 10000);

    if (altura >= 80 && altura <= 99) {
      setTimeout(() => {
        const satelite = document.getElementById("satelite");
        satelite.classList.add("satelite__arrived");
        satelite.classList.remove("satelite__down");
        satelite.classList.remove("satelite__down__100");
      }, 10000);
    }
    if (altura >= 100) {
      setTimeout(() => {
        const satelite = document.getElementById("satelite");
        satelite.classList.add("satelite__arrived");
        satelite.classList.remove("satelite__down__100");
      }, 4000);

      setTimeout(() => {
        const estrella = document.getElementById("addEstrellaClass");
        estrella.classList.add("estrella");
      }, 4000);
    }
  }

  return (
    <div>
      <div className="contenedor">
        <h1 id="porcentaje">{altura}%</h1>
        <div id="addEstrellaClass" className="">
          <img id="estrellaFugaz" src={estrellaFugaz} alt="" />
        </div>
        <img
          id={altura >= 100 ? "fondoSpace__winner" : "fondoSpace"}
          src={fondoSpace}
          alt=""
        />

        <img
          id="satelite"
          className={altura >= 100 ? "satelite__down__100" : "satelite__down"}
          src={satelite}
          alt=""
        />

        <div className="campo">
          <div className={altura >= 100 ? "imagenFondo2" : "imagenFondo"}>
            <img id="horizonte" src={horizonte} alt="" />
          </div>
        </div>
        <div
          className={
            altura >= 100 ? "contenedor__cohete__arrived" : "contenedor__cohete"
          }
          id={altura >= 100 ? "rocketSpace" : ""}
          style={
            altura >= 100
              ? {
                  bottom: coheteMove2,
                }
              : {
                  bottom: coheteMove,
                }
          }
        >
          <div id="box__cohete">
            <img id="cohete" src={cohete} />
            <div id={altura >= 100 ? "rocketCard2" : "rocketCard"}>
              <p>PRIMA EMITIDA</p>
              <h6>{altura}%</h6>
              <p>PRIMA CUOTA PAGADA</p>
              <h6>{altura}%</h6>
            </div>
          </div>
          <img id="llamas" src={llamas} />
        </div>
      </div>
      <style>
        {`
           
           @keyframes subir {
            0% {
              
              bottom: 5%;
            }
            100% {
              bottom: ${coheteMove};
              
            }
        }

        @keyframes subir2 {
          0%{
            transform: scale(0.2);
              bottom: 5%;
          }
            25% {
            transform: translateY(0) scale(0.7) rotate(43deg);
              bottom: ${coheteMove2};
            }
            50% {
                transform: translateY(-20px) scale(0.7) rotate(45deg);
                  bottom: ${coheteMove2};
                }
            100% {
            transform: translateY(0) scale(0.7) rotate(43deg);
              bottom: ${coheteMove2};
            }
        }

        @keyframes subir3 {
          0% {
          transform: translateY(0) scale(0.7) rotate(43deg);
            bottom: ${coheteMove2};
          }
          50% {
              transform: translateY(-20px) scale(0.7) rotate(45deg);
                bottom: ${coheteMove2};
              }
          100% {
          transform: translateY(0) scale(0.7) rotate(43deg);
            bottom: ${coheteMove2};
          }
      }

        .imagenFondo {
            width:100vw;
            animation: moverHorizonte 10s linear;
            transform: translateY(${fondoMove});
           
          }
          .imagenFondo2 {
            width:100vw;
            animation: moverHorizonte 4s linear;
            transform: translateY(${fondoMove});
           
          }

          @media(max-width:1700px){
            .imagenFondo {
              width:100vw;
              animation: moverHorizonte1700 10s linear;
              transform: translateY(${fondoMove1700});
             
            }
            .imagenFondo2 {
              width:100vw;
              animation: moverHorizonte1700 4s linear;
              transform: translateY(${fondoMove1700});
             
            }
          }
          @media(max-width:1600px){
            .imagenFondo {
              width:100vw;
              animation: moverHorizonte1600 10s linear;
              transform: translateY(${fondoMove1600});
             
            }
            .imagenFondo2 {
              width:100vw;
              animation: moverHorizonte1600 4s linear;
              transform: translateY(${fondoMove1600});
             
            }
          }
          @media(max-width:1500px){
            .imagenFondo {
              width:100vw;
              animation: moverHorizonte1500 10s linear;
              transform: translateY(${fondoMove1500});
             
            }
            .imagenFondo2 {
              width:100vw;
              animation: moverHorizonte1500 4s linear;
              transform: translateY(${fondoMove1500});
             
            }
          }
          @media(max-width:1400px){
            .imagenFondo {
              width:100vw;
              animation: moverHorizonte1400 10s linear;
              transform: translateY(${fondoMove1400});
             
            }
            .imagenFondo2 {
              width:100vw;
              animation: moverHorizonte1400 4s linear;
              transform: translateY(${fondoMove1400});
             
            }
          }
          @media(max-width:1300px){
            .imagenFondo {
              width:100vw;
              animation: moverHorizonte1300 10s linear;
              transform: translateY(${fondoMove1300});
             
            }
            .imagenFondo2 {
              width:100vw;
              animation: moverHorizonte1300 4s linear;
              transform: translateY(${fondoMove1300});
             
            }
          }
          @media(max-width:1200px){
            .imagenFondo {
              width:100vw;
              animation: moverHorizonte1200 10s linear;
              transform: translateY(${fondoMove1200});
             
            }
            .imagenFondo2 {
              width:100vw;
              animation: moverHorizonte1200 4s linear;
              transform: translateY(${fondoMove1200});
             
            }
          }
          @media(max-width:1100px){
            .imagenFondo {
              width:100vw;
              animation: moverHorizonte1100 10s linear;
              transform: translateY(${fondoMove1100});
             
            }
            .imagenFondo2 {
              width:100vw;
              animation: moverHorizonte1100 4s linear;
              transform: translateY(${fondoMove1100});
             
            }
          }
          @media(max-width:1000px){
            .imagenFondo {
              width:100vw;
              animation: moverHorizonte1000 10s linear;
              transform: translateY(${fondoMove1000});
             
            }
            .imagenFondo2 {
              width:100vw;
              animation: moverHorizonte1000 4s linear;
              transform: translateY(${fondoMove1000});
             
            }
          }
          @media(max-width:900px){
            .imagenFondo {
              width:100vw;
              animation: moverHorizonte900 10s linear;
              transform: translateY(${fondoMove900});
             
            }
            .imagenFondo2 {
              width:100vw;
              animation: moverHorizonte900 4s linear;
              transform: translateY(${fondoMove900});
             
            }
          }
          @media(max-width:821px){
            .imagenFondo {
              width:100vw;
              transform: translateY(0px) !important;
              transition-duration: 0 !important;
              margin-top:0;
            }
            .imagenFondo2 {
              width:100vw;
              transform: translateY(0px) !important;
              transition-duration: 0 !important;
              margin-top:0;
            }
            #cohete{
              transform:scale(0.7);
            }   
            #llamas{
             width:15%
            }
            #fondoSpace {
              width: 100vw;
              height: auto;
              transform:scaleY(200%);
              position: absolute;
              top: 5vh;
              left: 0;
            }
            #fondoSpace2 {
              display:block;
              width: 100vw;
              height: auto;
              transform:scaleY(200%);
              position: absolute;
              top:17vh;
              left: 0;
            }
            #horizonte {
              width: 100vw;
              height: 90vh !important;
              position: relative;
              right: 0;
          }
          .satelite__arrived {
            width: 20%;
            position: absolute;
            top: 15vh;
            right: 0;
            z-index: 1;
            transition-duration:1s;
            animation: flotar2 15s linear infinite;
          }
          .satelite__down__100 {
            width: 20%;
            position: absolute;
            top: 15vh;
            right: 0;
            z-index: 1;
            transition-duration:1s;
            animation: flotar2 15s linear infinite;
          }

          @keyframes flotar2 {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(80px);
            }
          }
          }

          #horizonte{
            width:100vw;
            height:auto;
            position:relative;
            right:0;
          }
          @keyframes moverHorizonte1700 {
            0% {
              transform: translateY(-1200px);
            }
            100% {
              transform: translateY(${fondoMove1700});
            }
          }
          @keyframes moverHorizonte1600 {
            0% {
              transform: translateY(-1200px);
            }
            100% {
              transform: translateY(${fondoMove1600});
            }
          }
          @keyframes moverHorizonte1500 {
            0% {
              transform: translateY(-1000px);
            }
            100% {
              transform: translateY(${fondoMove1500});
            }
          }
          @keyframes moverHorizonte1400 {
            0% {
              transform: translateY(-800px);
            }
            100% {
              transform: translateY(${fondoMove1400});
            }
          }
          @keyframes moverHorizonte1300 {
            0% {
              transform: translateY(-600px);
            }
            100% {
              transform: translateY(${fondoMove1300});
            }
          }
          @keyframes moverHorizonte1200 {
            0% {
              transform: translateY(-500px);
            }
            100% {
              transform: translateY(${fondoMove1200});
            }
          }
          @keyframes moverHorizonte1100 {
            0% {
              transform: translateY(-400px);
            }
            100% {
              transform: translateY(${fondoMove1100});
            }
          }
          @keyframes moverHorizonte1000 {
            0% {
              transform: translateY(-300px);
            }
            100% {
              transform: translateY(${fondoMove1000});
            }
          }
          @keyframes moverHorizonte900 {
            0% {
              transform: translateY(-200px);
            }
            100% {
              transform: translateY(${fondoMove900});
            }
          }
        @keyframes moverHorizonte {
            0% {
              transform: translateY(-1600px);
            }
            100% {
              transform: translateY(${fondoMove});
            }
          }


          .satelite__down {
            width: 20%;
            position: absolute;
            top: 15vh;
            right: 0;
            z-index: 1;
            transition-duration:1s;
            animation: moverSatelite 10s linear;
            transform: translateY(${fondoMove});
          }

         

          .satelite__arrived {
            width: 20%;
            position: absolute;
            top: 15vh;
            right: 0;
            z-index: 1;
            transition-duration:1s;
            animation: flotar 15s linear infinite;
            transform: translateY(${fondoMove});
          }

          .satelite__down__100 {
            width: 20%;
            position: absolute;
            top: 15vh;
            right: 0;
            z-index: 1;
            transition-duration:1s;
            animation: moverSatelite 4s linear infinite;
            transform: translateY(${fondoMove});

          }

          @keyframes moverSatelite {
            0% {
              transform: translateY(-1600px);
            }
            100% {
              transform: translateY(${fondoMove});
            }
          }

          @keyframes flotar {
            0%,
            100% {
              transform: translateY(${fondoMove});
            }
            50% {
              transform: translateY(${eightyMore});
            }
          }

           
           `}
      </style>
    </div>
  );
};
