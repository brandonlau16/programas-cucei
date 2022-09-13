import { useEffect, useState } from "react";
import {w3cwebsocket} from 'websocket';
import "./Chatbot.css"
import { AiOutlineClose,AiOutlineSend} from "react-icons/ai";
import React from "react";

const client = new w3cwebsocket('ws://AquivaIp:AquivaPuerto');
let primerRenderBoleano = false;


function ChatBot(){

  let mensajeId;
  let contenido;
  let historialPasado;
  let arrayHistorial = [];
  const claseChat = React.createRef();
  const finalChat = React.createRef();
  let [chatAbierto,setChatAbierto] = useState(false);


  const cambiarEstadoChat = (estado) =>{
    setChatAbierto(chatAbierto = !estado);
    if(chatAbierto === false){
      claseChat.current.value = "";
    }
    if(chatAbierto === true && primerRenderBoleano === false){
      primerRender();
    }
  };

  let [mensaje,setMensaje] = useState({});
  let [todosMensajes,setTodosMensajes] = useState([]); 

  async function primeraConexion (){
    await client.send("start");
  }; 

  function getHistorial(){
    return sessionStorage.getItem("Chat");
  }

  const primerRender = () =>{
    primerRenderBoleano = true;
    historialPasado = JSON.parse(getHistorial());
    historialPasado.forEach(element => {
      setTodosMensajes(todosMensajes = [...todosMensajes,element]); 

    });
    historialPasado = "";
  }

  if(client.readyState === 0 && sessionStorage.getItem("Chat")){
    client.onopen = (e) =>{
      primeraConexion();
    };
    mensajeId = parseInt(sessionStorage.getItem("mensajeId"));
  }else if(!sessionStorage.getItem('Chat') && client.readyState === 0){
    client.onopen = (e) =>{
      primeraConexion();
    };
    mensajeId = 0;
    mensajeId = sessionStorage.setItem("mensajeId",mensajeId)
    primerRenderBoleano = true;
  }

  const  mensajeNuevoEnviado = ()=>{
    contenido = claseChat.current.value;
    mensajeId = parseInt(sessionStorage.getItem('mensajeId'));
    setMensaje(mensaje = {"numeroMensaje" : mensajeId,
          "contenidoMensaje" : {contenido},
          "duenioMensaje" : "mensaje-persona"
        });
    claseChat.current.value = "";
    mensajeId+= 1;
    sessionStorage.setItem("mensajeId",mensajeId)
  }

  const enviarMensaje = async () =>{
    if(claseChat.current.value !== ""){
      mensajeNuevoEnviado();
      await client.send(mensaje.contenidoMensaje.contenido);
      if(sessionStorage.getItem("Chat")){
        historialPasado = JSON.parse(getHistorial());
        historialPasado.forEach(element => {
        arrayHistorial = arrayHistorial = ([...arrayHistorial,element]);      
      });
      }
      setTodosMensajes(todosMensajes = [...todosMensajes,mensaje]);
      arrayHistorial = arrayHistorial = ([...arrayHistorial,mensaje]);      
      sessionStorage.setItem("Chat",JSON.stringify(arrayHistorial));
      historialPasado = "";
      arrayHistorial = [];
    }

  };

  const mensajeDelBot = (data) =>{
    contenido = data;
    mensajeId = parseInt(sessionStorage.getItem('mensajeId'));
    if(mensajeId !== 0 && contenido === "Hola soy el asistente virtual si tienes algun problema estoy para servirte"){
    }else{
      setMensaje(mensaje = {"numeroMensaje" : mensajeId,
      "contenidoMensaje" : {contenido},
      "duenioMensaje" : "mensaje-bot"
  });
      mensajeId += 1;
      sessionStorage.setItem("mensajeId",mensajeId)
      if(sessionStorage.getItem("Chat")){
        historialPasado = JSON.parse(getHistorial());
        historialPasado.forEach(element => {
        arrayHistorial = arrayHistorial = ([...arrayHistorial,element]);      
      });
      }
      setTodosMensajes(todosMensajes = [...todosMensajes,mensaje]);
      arrayHistorial = arrayHistorial = ([...arrayHistorial,mensaje]);      
      sessionStorage.setItem("Chat",JSON.stringify(arrayHistorial));
      historialPasado = "";
      arrayHistorial = [];
    }
    
  }

  useEffect(() => {
    scrollDown()
      
    client.onmessage  = async e => {
      await mensajeDelBot(e.data)
    };
  },);

  const scrollDown = ()=>{
    finalChat.current.scrollIntoView({ behavior : "smooth"});
  };

  const manejarEnterChat = (e)=>{
    if(claseChat.current.value !== "" && e.key === "Enter"){
      enviarMensaje();
    }
      
  }

  return(
    <div className="ChatBot">
      <div className={chatAbierto ? "d-none" : "chat-cerrado"} onClick={() => cambiarEstadoChat(chatAbierto)}>
        <img src="https://www.oas.org/ext/Portals/14/EasyDNNnews/588/Image.png" alt="Burbuja de chat" />
      </div>
      <div className={chatAbierto ? "chat-abierto" : "d-none"} onKeyDown ={manejarEnterChat}>
        <div className="parte-superior-chat">
          <img src="https://www.ecured.cu/images/f/f5/Bot.jpg" alt="imagenBot" />
          <p className="nombre-bot">nombre del bot</p>
          <AiOutlineClose className="icono-x" onClick={() => cambiarEstadoChat(chatAbierto)}></AiOutlineClose>
        </div>
        <div className="parte-inferior-chat">
          <div className="historial">
             {todosMensajes.map((data) =>(
                <div key={data.numeroMensaje}>
                  <div className="d-flex">
                    <div className={data.duenioMensaje === "mensaje-persona" ? "mensaje-persona": "mensaje-bot"}>
                      <img className="mensaje-imagen" src={data.duenioMensaje === "mensaje-persona" ? "https://github.com/mdo.png": "https://www.ecured.cu/images/f/f5/Bot.jpg"} alt={data.duenioMensaje === "mensaje-persona" ? "imagenPerfil": "imagenBot"} />
                      <div className="mensaje-contenido">{data.contenidoMensaje.contenido}</div>
                    </div>
                  </div>
                </div>
             ))}
             <div ref={finalChat}/>
          </div>
          <div className="espacio-escritura">
            <input type="text" className="texto-chat" ref={claseChat}/>
            <div className="chatbot-enviar">
              <AiOutlineSend onClick={() => enviarMensaje()}></AiOutlineSend>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatBot;