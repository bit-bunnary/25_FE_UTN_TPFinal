const contacts = [
    {
        id: 1,
        profile_pic: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2Fe2%2Fd4%2Ff9%2Fe2d4f9a91d646256402048d439ebf3e6.jpg&f=1&nofb=1&ipt=406ca856ab768c1620a0593130e44773d282feb23b53a9002a5fe58f218eff1d',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2Fe2%2Fd4%2Ff9%2Fe2d4f9a91d646256402048d439ebf3e6.jpg&f=1&nofb=1&ipt=406ca856ab768c1620a0593130e44773d282feb23b53a9002a5fe58f218eff1d',
        name: 'Rodrick H.',
        last_connection: '(Last seen 03:51)',
        description:'LOADED DIAPER BABY!!!🤟🏻🤑🧷',
        messages: [
            {
                id: 1,
                author: 'Yo',
                msg_content: 'Holiii! Cómo va todo?? (✿◡‿◡)',
                timestamp: '22:16',
            },
            {
                id: 2,
                author: 'Rodrick H.',
                msg_content: 'Hola!! Re bien con nervios',
                timestamp: '22:17',
            },
            {
                id: 3,
                author: 'Rodrick H.',
                msg_content: 'Che venís al concierto al final?',
                timestamp: '22:17',
            },
            {
                id: 4,
                author: 'Yo',
                msg_content: 'Qué es esa pregunta? OBVIO Q VOY! O(∩_∩)O',
                timestamp: '22:20',
            },
            {
                id: 5,
                author: 'Rodrick H.',
                msg_content: 'Joyaaaa 🙌🏻 porque te conseguí pase VIP 😎',
                timestamp: '22:21',
            }
        ]
    },
    {
        id: 2,
        profile_pic: '/EDOL.png',
        image: '/EDOL.png',
        name: 'Eden',
        description:'Chopping logs 🪓🪵',
        last_connection: '(Last seen 21:02)',
        messages: [
            {
                id: 1,
                author: 'Yo',
                msg_content: 'Querés que compre algo en el shopping?',
                timestamp: '10:00',
            },
            {
                id: 2,
                author: 'Eden',
                msg_content: 'Sí. Una radio.',
                timestamp: '10:22',
            },
            {
                id: 3,
                author: 'Yo',
                msg_content: 'Okiii~',
                timestamp: '10:30',
            },
            {
                id: 4,
                author: 'Eden',
                msg_content: 'Vas a trabajar hoy?.',
                timestamp: '16:00',
            },
            {
                id: 5,
                author: 'Yo',
                msg_content: 'Sip! Salgo a las 18hs',
                timestamp: '16:15',
            },
            {
                id: 6,
                author: 'Eden',
                msg_content: 'Te espero a las 21hs para cenar, no vengas tarde.',
                timestamp: '17:00',
            },
            {
                id: 7,
                author: 'Eden',
                msg_content: 'Estás llegando tarde.',
                timestamp: '21:01',
            }
        ]
    },
    {
        id: 3,
        profile_pic: '/Peter_And.jpg',
        image: '/Peter_And.jpg',
        name: 'Peter P.',
        description:'Fotógrafo freelance, genio en ciencias, superhéroe ocasional.',
        last_connection: '(Last seen 17:00)',
        messages: [
            {
                id: 1,
                author: 'Peter P.',
                msg_content: 'Ey! ¿Viste mi mochila por ahí? Creo que la dejé en tu casa 😅',
                timestamp: '09:45',
            },
            {
                id: 2,
                author: 'Yo',
                msg_content: 'Sip, está acá. Querés que te la lleve al Daily Bugle?',
                timestamp: '09:47',
            },
            {
                id: 3,
                author: 'Peter P.',
                msg_content: '¡Sería genial! Pero cuidado con Jameson... hoy está de mal humor',
                timestamp: '09:48',
            },
            {
                id: 4,
                author: 'Yo',
                msg_content: '¿Más de lo normal? ¿Qué hiciste ahora? 😂',
                timestamp: '09:49',
            },
            {
                id: 5,
                author: 'Peter P.',
                msg_content: 'Nada esta vez, lo juro. Solo publiqué una foto mía como Spider-Man colgado de una antena 🙄',
                timestamp: '09:50',
            }
        ]
    },
    {
        id: 4,
        profile_pic: '/Blade.jpg',
        image: '/Blade.jpg',
        name: 'Blade',
        description: 'No voy a hacerte inmortal.',
        last_connection: '(Last seen 03:33)',
        messages: [
            {
                id: 1,
                author: 'Blade',
                msg_content: 'Salí a cazar temprano. Encontré movimiento cerca del callejón en 5ta y Main.',
                timestamp: '02:14',
            },
            {
                id: 2,
                author: 'Yo',
                msg_content: '¿Otra vez vampiros? Ese lugar no descansa...',
                timestamp: '02:15',
            },
            {
                id: 3,
                author: 'Blade',
                msg_content: 'Esta vez eran neófitos. Desorganizados, pero agresivos.',
                timestamp: '02:17',
            },
            {
                id: 4,
                author: 'Yo',
                msg_content: '¿Todo bien? ¿Necesitás refuerzos o municiones?',
                timestamp: '02:18',
            },
            {
                id: 5,
                author: 'Blade',
                msg_content: 'Estoy bien. Pero me vendría bien más suero. El último frasco se rompió en el combate.',
                timestamp: '02:20',
            },
            {
                id: 6,
                author: 'Yo',
                msg_content: 'Ok, te lo dejo en tu punto habitual antes del amanecer',
                timestamp: '02:21',
            },
        ]
    },
    {

        id: 5,
        profile_pic: '/Silk.jpg',
        image: '/Silk.jpg',
        name: 'Cindy M.',
        description: 'Conectada por telarañas… y WiFi inestable 😵‍💫',
        last_connection: '(Last seen 20:45)',
        messages: [
            {
                id: 1,
                author: 'Cindy M.',
                msg_content: 'Amigaaa 🕷️ hoy me tiré de un rascacielos y CASI pierdo una zapatilla 😭',
                timestamp: '18:12',
            },
            {
                id: 2,
                author: 'Yo',
                msg_content: 'JAAJAJASJS cómo que casi?!? Tenés que ponerle velcro a esas botas, Cindy 😂✨',
                timestamp: '18:13',
            },
            {
                id: 3,
                author: 'Cindy M.',
                msg_content: 'Literal lo estoy considerando 😅 también pensé en tejerme unas nuevas con telaraña... pero pegajosas no, obvio jeje',
                timestamp: '18:14',
            },
            {
                id: 4,
                author: 'Yo',
                msg_content: 'Che, hablando de eso... ¿vamos por un cafecito más tarde o estás salvando el mundo otra vez? 👀',
                timestamp: '18:15',
            },
            {
                id: 5,
                author: 'Cindy M.',
                msg_content: '¡Estoy LIBRE esta noche! ✨ Solo tengo que entregar un informe en el Bugle y soy toda tuya ☕💕',
                timestamp: '18:16',
            },
            {
                id: 6,
                author: 'Yo',
                msg_content: 'Perfectooo~ Te paso a buscar tipo 19hs? Voy con ganas de convertirme en Martita la vieja chusma 😏',
                timestamp: '18:17',
            },
        ]
    },
    {
        id: 6,
        profile_pic: '/Raleigh_Becket.jpg',
        image: '/Raleigh_Becket.jpg',
        name: 'Raleigh B.',
        description: 'Gipsy Danger: Nuclear. Clásica. Imparable. Como yo.', 
        last_connection: '(Last seen 22:11)',
        messages: [
            {
                id: 1,
                author: 'Raleigh B.',
                msg_content: 'Hoy pasamos 6 horas dentro del Jaeger. Creo que mi espalda va a necesitar una tregua antes que la Tierra',
                timestamp: '20:03',
            },
            {
                id: 2,
                author: 'Yo',
                msg_content: 'Podés salvar al mundo mañana, hoy merecés un poco de descanso... y unos masajes',
                timestamp: '20:04',
            },
            {
                id: 3,
                author: 'Raleigh B.',
                msg_content: '¿Esa oferta incluye compañía silenciosa y té caliente?',
                timestamp: '20:06',
            },
            {
                id: 4,
                author: 'Yo',
                msg_content: 'Incluye eso... y una playlist para dormir si te olvidás cómo se hace',
                timestamp: '20:08',
            },
            {
                id: 5,
                author: 'Raleigh B.',
                msg_content: 'Sos la única persona que logra que baje la guardia sin pelear por ello...',
                timestamp: '20:09',
            },
            {
                id: 6,
                author: 'Yo',
                msg_content: 'Y vos sos el único que me hace esperar el fin del turno con una sonrisa~',
                timestamp: '20:11',
            },
        ]
    },
    {
        id: 7,
        profile_pic: '/Anna_Coleman.jpg',
        image: '/Anna_Coleman.jpg',
        name: 'Anna C.',
        description: 'Ugh! No es una fase, mamá 🙄🎸 ',
        last_connection: '(Last seen 19:02)',
        messages: [
            {
                id: 1,
                author: 'Anna C.',
                msg_content: 'Ok, acabo de pintar algo que parece un gato... pero terminó siendo una papa con bigotes 🙃',
                timestamp: '17:24',
            },
            {
                id: 2,
                author: 'Yo',
                msg_content: 'JAJAJ ¿eso va en la parte conceptual o lo mandamos a terapia directamente? 🤔✨',
                timestamp: '17:25',
            },
            {
                id: 3,
                author: 'Anna C.',
                msg_content: 'Seamos honestas: es arte moderno. Lo llamamos “Identidad Fragmentada” y listo 🤷‍♀️🎨',
                timestamp: '17:27',
            },
            {
                id: 4,
                author: 'Yo',
                msg_content: 'Perfecto. Yo ya imprimí las fotos que hicimos, pero una salió con mi cara tipo “me está por dar un ACV de estrés”',
                timestamp: '17:29',
            },
            {
                id: 5,
                author: 'Anna C.',
                msg_content: 'Ideal. Eso grita “realismo emocional del siglo XXI”. La pegamos fuerte con este proyecto 🖼️💥',
                timestamp: '17:30',
            },
            {
                id: 6,
                author: 'Yo',
                msg_content: 'Juro que si nos ponen un 10, te invito una pizza y hacemos noche de pelis 🎬🍕',
                timestamp: '17:32',
            },
        ]
    },
    {
        id: 8,
        profile_pic: '/Meteoro.jpg',
        image: '/Meteoro.jpg',
        name: 'Meteoro R.',
        description: 'Ready. Set. Go! 🏁',
        last_connection: '(Last seen 21:17)',
        messages: [
            {
                id: 1,
                author: 'Meteoro R.',
                msg_content: 'Tuve que salirme de la pista, Snake estaba saboteando la carrera otra vez 😡',
                timestamp: '20:42',
            },
            {
                id: 2,
                author: 'Yo',
                msg_content: '¿¡Otra vez ese loco!?  ¿Vos estás bien? 🥺✨',
                timestamp: '20:43',
            },
            {
                id: 3,
                author: 'Meteoro R.',
                msg_content: 'Estoy bien, pero el Mach 5 necesita una revisión. Salté un acantilado y aterrizamos en un campo de choclos... con una vaca 🐄🌽',
                timestamp: '20:44',
            },
            {
                id: 4,
                author: 'Yo',
                msg_content: '¿Saltaste con una vaca? Wow, que suerte tiene la vaca ¿Querés que lleve a Sparky?',
                timestamp: '20:45',
            },
            {
                id: 5,
                author: 'Meteoro R.',
                msg_content: 'Sí, por favor. Y traé el kit de herramientas. Pero no le digas a Papá... aún 😬',
                timestamp: '20:46',
            },
            {
                id: 6,
                author: 'Yo',
                msg_content: 'Ya salgo. Pero después me debés una carrera tranquila... sin nadie que intente matarte ni vacas. 🏁🖤',
                timestamp: '20:47',
            },
            {
                id: 7,
                author: 'Meteoro R.',
                msg_content: 'Trato hecho. Una vuelta por la costa... solo vos, yo y el Mach 5 💋',
                timestamp: '20:48',
            }
        ]
    }
]


export default contacts