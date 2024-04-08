"use client";
import { useEffect } from 'react';

import axios from 'axios';
import React from 'react';

export default function AxiosPage() {
    useEffect(() => {
        connectToApi();
    }, []);

    async function connectToApi() {
        try {
            type TestResponse = {
                message: string;
            }

            const response = await axios.post<TestResponse>(`${process.env.NEXT_PUBLIC_API_REST_URL}/test`, {
                message: "Hello, World!"
            }, {
                headers: {
                    "Content-Type": "application/json",
                }
            });

            console.log({ response });
        } catch (error) {
            console.log({ error });
        }
    }

    
        return (
            <div style={{ backgroundColor: 'black', height: '200vh', color: 'white'  }}>
            <h1 style={{ color: 'lightgreen', fontSize: '70px', textAlign: 'center' }}>Sistema de riego automatico.</h1>
            <img src="https://png.pngtree.com/png-clipart/20230419/original/pngtree-plant-in-pot-pixel-art-png-image_9066899.png" alt="Descripción de la imagen" style={{  justifyContent: 'center', width: '200px' }}/>
             <img src="https://image.freepik.com/vector-gratis/planta-maceta-estilo-pixel-art_475147-1119.jpg" alt="Descripción de la imagen" style={{ justifyContent: 'center', width: '200px' }}/>
            <h2 style={{ color: 'green', fontSize: '50px', textAlign: 'center' }}>Ecology code masters</h2>
            <p style={{ color: 'lightgreen', fontSize: '35px', textAlign: 'justify' }}>Quienes somos?</p>
            <p style={{ color: 'white', fontSize: '25px', textAlign: 'justify' }}>
                Somos una microempresa emergente, dedicada a la innovación en el
                sector agrícola.</p>
            <p style={{ color: 'lightgreen', fontSize: '35px', textAlign: 'justify' }}>Misión</p>
            <p style={{ color: 'white', fontSize: '25px', textAlign: 'justify' }}>
                Proporcionar soluciones de riego eficientes y sostenibles que satisfagan las
                necesidades de los agricultores modernos.</p>
            <p style={{ color: 'lightgreen', fontSize: '35px', textAlign: 'justify' }}>Visión</p>
            <p style={{ color: 'white', fontSize: '25px', textAlign: 'justify' }}>
                Ser líderes en la industria agrícola, proporcionando sistemas de riego
                automáticos innovadores y eficientes.</p>
            <p style={{ color: 'lightgreen', fontSize: '35px', textAlign: 'justify' }}>Nuestro producto</p>
            <p style={{ color: 'white', fontSize: '25px', textAlign: 'justify' }}>
                Un sistema de riego automático basado en la humedad del
                suelo puede ofrecer numerosos beneficios en el ámbito</p>
            <p style={{ color: 'white', fontSize: '25px', textAlign: 'justify' }}>
                agrícola, especialmente en términos de eficiencia del agua,
                ahorro de tiempo y mejora de la productividad.</p>
            <p style={{ color: 'green', fontSize: '30px', textAlign: 'justify' }}>Descarga nuestra app</p>
            <a href="https://github.com/manue1666/dashb-arduino" download>
             <button style={{ backgroundColor: 'green', color: 'white', padding: '10px', borderRadius: '5px' }}>Descargar</button></a>
             


          </div>
          
        );
      };
      
     
