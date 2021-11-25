# 1. Creaciòn de LOGIN

## a. Creaciòn de vista LOGIN

## b. Crear la ruta GET de LOGIN

## c. Crear la ruta POST de LOGIN

  
   
   -Creaciòn de archivo "sesiòn" (session.js)
     - express-session
     - mongoconnnect
   - integrarlo en index.js
   - Integrarlo directamente en la ruta de POST
   - Verificar sesiòn en navegador (creaciòn de cookie) y MongoDB (session)

## d. Cerrar Sesión
  - Arreglos en el Header del proyecto y su <nav>
  - Ruteo de POST para cerrar sesión

## e. Patrón de autorización (Áreas privadas de la plataforma)
   - Determinación de roles (visitantes (no registrados) y usuarios (registrados) )
   - Route-guard (isLoggedIn vs isLoggedOut)
   - Verificar que en el Header se muestre un "Hola ${Usuario}"

   <!-- {"cookie":
   {"originalMaxAge":86400000,"expires":"2021-11-26T17:19:57.713Z",
   "httpOnly":true,
   "path":"/"},
   "currentUser":{
       "_id":"619fb52893569f7c4a041659","username":"Sinuhe jardinez",
       "email":"sinuhe.jh@gmail.com",
       "mensaje":"LO LOGRAMOS CARAJO XD"}
   } -->