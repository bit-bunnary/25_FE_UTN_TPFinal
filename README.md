## Mini ReadMe ##

Para realizar la app (clon de WhatsApp, pero con estilos propios) utilicé:

    ~ React (Vrs. 19.2.0)
    ~ Enturamientos hechos con React-Router (Vrs. 7.9.1)
    ~ Paquete de íconos de React Icons
    ~ Utilicé Bootstrap (Vrs. 5.3.8) en un comienzo para hacer un CSS básico, el cuál descarté una vez empecé a trabajar con los estilos

## Features ##

+ Los botones funcionales son: 

    ~ Chats (carta abierta) [se usó useNavigate]
    ~ Configuración (engranaje) [se usó useState]
    ~ Bonus (estampilla, "Easter Egg") [se usó useState]
    ~ Info. del Contacto (foto de perfil) [se usó useState]
    ~ Botón para enviar mensaje

+ Todos los Loaders que aparecen fueron hechos 100% por mí

+ Hay mínimas animaciones implementadas como:
    - Cuando se envía un mensaje el corazón roto "palpita"
    - Cuando se hace hover sobre el botón "Bloquear", este se sacude (para que no lo hagas)

+ Los chats tienen mensajes diferentes, al igual que las descripciones de cada personaje

+ Se pueden enviar mensajes los cuales se guardan en un estado (no van a ser respondidos...de momento)





## Info Extra ##

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
