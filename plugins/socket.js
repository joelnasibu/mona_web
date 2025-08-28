// import {
//   defineNuxtPlugin
// } from "#app";
import {
  io
} from 'socket.io-client'


export default defineNuxtPlugin((nuxtApp) => {

  const URL = "https://agp-api.acces-global.com"
  let socket
  // if (process.client) {
  // let socket = io(URL, {
  //   transports: ['polling', 'websocket']
  // })
  // {
  //   transports: ["polling"], // Ensure WebSocket is used
  // })
  nuxtApp.provide("socket", socket)
  // }
})