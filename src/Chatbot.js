import { useEffect, useState} from "react";
import {w3cwebsocket} from 'websocket';
import "./Chatbot.css"
import { AiOutlineClose,AiOutlineSend} from "react-icons/ai";
import React from "react";
//investigar hacer uso de useConext

function ChatBot(){

  const claseChat = React.createRef();
  const finalChat = React.createRef();
  const [chatAbierto,setChatAbierto] = useState(false);


  const cambiarEstadoChat = (estado) =>{
    setChatAbierto(!estado);
    if(chatAbierto === false){
      claseChat.current.value = "";
    }
  };

  const [todosMensajes,setTodosMensajes] = useState([]); 
  const [client,setClient] = useState();

  function getHistorial(){
    return sessionStorage.getItem("Chat");
  }

  const  mensajeNuevoEnviado = ()=>{
    const contenido = claseChat.current.value;
    let mensajeId = parseInt(sessionStorage.getItem('mensajeId'));
    const mensajePorEnviar = {"numeroMensaje" : mensajeId,
    "contenidoMensaje" : {contenido},
    "duenioMensaje" : "mensaje-persona"
  }
    claseChat.current.value = "";
    mensajeId+= 1;
    sessionStorage.setItem("mensajeId",mensajeId);
    return mensajePorEnviar;
  }

  const obtenerHistorialDelChat = () =>{
    let historial = []
      if(sessionStorage.getItem("Chat")){
        historial = JSON.parse(getHistorial());
      }
    return historial;
  };

  const enviarMensaje = async () =>{
    if(claseChat.current.value !== ""){
      const mensajeFinal =  mensajeNuevoEnviado();
      await client.send(mensajeFinal.contenidoMensaje.contenido);
      const historial = obtenerHistorialDelChat();
      setTodosMensajes([...historial,mensajeFinal]);
      sessionStorage.setItem("Chat",JSON.stringify([...historial,mensajeFinal]));
    }

  };

  const guardarMensajeDelBot = (data) =>{
    const contenido = data;
    let mensajeId = parseInt(sessionStorage.getItem('mensajeId'));
    const mensajePorEnviar = {"numeroMensaje" : mensajeId,
    "contenidoMensaje" : {contenido},
    "duenioMensaje" : "mensaje-bot"
};
    
      mensajeId += 1;
      sessionStorage.setItem("mensajeId",mensajeId)
      const historial = obtenerHistorialDelChat();
      setTodosMensajes([...historial,mensajePorEnviar]);
      sessionStorage.setItem("Chat",JSON.stringify([...historial,mensajePorEnviar]));
    
    
  }

  useEffect(() => {     
    const wsClient = new w3cwebsocket('ws://IP:Puerto');
    setClient(wsClient);

    wsClient.onmessage  = async e => {
      await guardarMensajeDelBot(e.data)
    };

    const historialPasado = JSON.parse(getHistorial());
    if(historialPasado){
      setTodosMensajes(historialPasado);
    }

  if(!sessionStorage.getItem('Chat') && wsClient.readyState === 0){
      wsClient.onopen = async () =>{
        await wsClient.send("start");
      };
      
      sessionStorage.setItem("mensajeId",0)
    }

  },[]);

  useEffect(() => {
    if(chatAbierto){
      scrollDown()
    }else{
      scrollDown(true)
    }
  },[todosMensajes,chatAbierto])

  const scrollDown = (isSmooth)=>{
    finalChat.current.scrollIntoView(isSmooth && { behavior : "smooth"});
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
             {todosMensajes.map((data) =>{
              if(data?.contenidoMensaje?.contenido){
                return <div key={data.numeroMensaje}>
                  <div className="d-flex">
                    <div className={data.duenioMensaje === "mensaje-persona" ? "mensaje-persona": "mensaje-bot"}>
                      <img className="mensaje-imagen" src={data.duenioMensaje === "mensaje-persona" ? "https://github.com/mdo.png": "https://www.ecured.cu/images/f/f5/Bot.jpg"} alt={data.duenioMensaje === "mensaje-persona" ? "imagenPerfil": "imagenBot"} />
                      <div className="mensaje-contenido">{data.contenidoMensaje.contenido}</div>
                    </div>
                  </div>
                </div>
              }
              })}
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
