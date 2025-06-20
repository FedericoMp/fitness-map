import { setPopupUI, setDetailsUI } from './placesUI.js'

// Places
export const placesDataEs = [
    {
        popup: setPopupUI(
                'Street Workout',
                'Parque de Street Workout frente a la playa situado en La Pineda.'),
        lat: 41.084533,
        lng: 1.188565,
        details: setDetailsUI(
            'La Pineda',
            ['Parque de Street Workout frente a la playa situado en La Pineda.',
            'Gran lugar para entrenar o practicar diferentes deportes.',
            'El lugar dispone de baños públicos.',
            'Gran variedad de chiringuitos / bares en la playa.'],
            'https://maps.app.goo.gl/RjTXVSxqEZJaSpDx6')
    },
    {
        popup: setPopupUI(
            'Fitness Park II',
            'Parque Fitness frente a la playa situado en La Pineda'),
        lat: 41.081896,
        lng: 1.186279,
        details: setDetailsUI(
            'La Pineda',
            ['Parque Fitness frente a la playa situado en La Pineda',
            'El lugar dispone de baños públicos.',
            'Gran variedad de chiringuitos / bares en la playa.'],
            'https://maps.app.goo.gl/Hdy67RfS8CDrwpQn7')
    },
    {
        popup: setPopupUI(
            'Fitness Park I',
            'Parque Fitness frente a la playa situado en La Pineda'),
        lat: 41.080732,
        lng: 1.185529,
        details: setDetailsUI(
            'La Pineda',
            ['Fitness park frente a la playa situado en La Pineda',
            'El lugar cuenta con baños públicos.',
            'Variedad de chiringuitos / bares en la playa.'],
            'https://maps.app.goo.gl/TSLxyvF42iDQ7nYz5')
    },
    {
        popup: setPopupUI(
            'Camino de Playa',
            'Camino asfaltado en la orilla situado en La Pineda'),
        lat: 41.077608,
        lng: 1.183383,
        details: setDetailsUI(
            'La Pineda',
            ['Camino asfaltado en la orilla situado en La Pineda',
            'Ideal para caminar, correr o patinar.',
            'Con baños públicos, gran variedad de bares en la playa.'],
            'https://maps.app.goo.gl/mRo1DomDdqEvECZF8')
    },
    {
        popup: setPopupUI(
            'Sendero de Acantilados y Bosque',
            'Cerca del Faro de Cap Salou hay un sendero por los acantilados y el bosque.'),
        lat: 41.060383,
        lng: 1.174059,
        details: setDetailsUI(
            'Cap Salou',
            ['Cerca del Faro de Cap Salou hay un sendero por los acantilados y el bosque.',
            'Genial para practicar senderismo o caminar.',
            'Preciosas vistas al bosque y a los acantilados.',
            'Con torre mirador en el bosque.'],
            'https://maps.app.goo.gl/vz742S88nr2Sa5BF8')
    },
    {
        popup: setPopupUI(
            'Camino de Bosque I',
            'Entre Cap Salou y La Pineda hay un pequeño camino de bosque.'),
        lat: 41.065213,
        lng: 1.171565,
        details: setDetailsUI(
            'Cap Salou',
            ['Entre Cap Salou y La Pineda hay un pequeño camino de bosque.',
            'Ideal para practicar trail running o senderismo.',
            'Hermosas vistas del bosque para pasar tiempo en la naturaleza.',
            'Cerca del centro de La Pineda.'],
            'https://maps.app.goo.gl/QJsD7xaZM3T9wuBW6')
    },
    {
        popup: setPopupUI(
            'Campo deportivo',
            'Situado en Cap Salou, hay un gran campo deportivo.'),
        lat: 41.064264,
        lng: 1.168951,
        details: setDetailsUI(
            'Cap Salou',
            ['Situado en Cap Salou, hay un gran campo deportivo.',
            'Con aros de baloncesto y porterías de fútbol.',
            'Ideal para practicar fútbol o baloncesto.',
            'Cuenta con superficie asfaltada.'],
            'https://maps.app.goo.gl/7FA1KANRqrqQGr719')
    },
    {
        popup: setPopupUI(
            'Camino de Bosque II',
            'Cercano al centro de Salou, hay un pequeño camino de bosque.'),
        lat: 41.071471,
        lng: 1.155893,
        details: setDetailsUI(
            'Salou',
            ['Cercano al centro de Salou, hay un pequeño camino de bosque.',
            'Ideal para practicar trail running, ciclismo o senderismo.',
            'Preciosas vistas al bosque para conectar con la naturaleza.'],
            'https://maps.app.goo.gl/atpoNkSmqezFcAik6')
    },
    {
        popup: setPopupUI(
            'Parque Deportivo',
            'Cerca de Cap Salou, parque deportivo frente a la playa.'),
        lat: 41.057416,
        lng: 1.167424,
        details: setDetailsUI(
            'Cap Salou',
            ['Cerca de Cap Salou, parque deportivo frente a la playa.',
            'Cerca de la playa de Cala Crancs.',
            'El lugar tiene baños públicos.',
            'Lugar ideal para jugar al baloncesto, también parque infantil.',
            'Cuenta con una mesa de ping pong.'],
            'https://maps.app.goo.gl/mEfe7Us1KRQpMJfPA')
    },
    {
        popup: setPopupUI(
            'El Faro',
            'En Cap Salou, impresionante sendero alrededor del faro.'),
        lat: 41.055589,
        lng: 1.171712,
        details: setDetailsUI(
            'Cap Salou',
            ['En Cap Salou, impresionante sendero alrededor del faro.',
            'Buen plan para pasear por la naturaleza.',
            'Preciosos miradores y sendero.'],
            'https://maps.app.goo.gl/N1EMU1tNtNeRFGS97')
    },
    {
        popup: setPopupUI(
            'Cala Crancs',
            'Hermoso lugar con playa y acantilado cerca de Cap Salou.'),
        lat: 41.056167,
        lng: 1.168473,
        details: setDetailsUI(
            'Cap Salou',
            ['Hermoso lugar con playa y acantilado cerca de Cap Salou.',
            'Ideal place to rest on the beach.',
            'Paseo por el bosque.',
            'El lugar tiene baños públicos.'],
            'https://maps.app.goo.gl/JRJxfxieRPWGdG2E6')
    },
    {
        popup: setPopupUI(
                'Parque de Calistenia',
                'Cerca del centro de Salou, parque de calistenia frente a la playa situado en Platja Larga.'),
        lat: 41.065973,
        lng: 1.154568,
        details: setDetailsUI(
            'Salou',
            ['Cerca del centro de Salou, parque de calistenia frente a la playa situado en Platja Larga.',
            'Gran lugar para entrenar y pasear por la playa.',
            'El lugar tiene baños públicos.',
            'Tiendas cercanas para comprar alimentos y bebidas.'],
            'https://maps.app.goo.gl/QaRgcLenB19QAzWD7')
    },
    {
        popup: setPopupUI(
            'Parque de Calistenia',
            'Parque de calistenia frente a la playa situado en el centro de Salou.'),
        lat: 41.074175,
        lng: 1.135281,
        details: setDetailsUI(
            'Salou',
            ['Parque de calistenia frente a la playa situado en el centro de Salou.',
            'El lugar cuenta con baños públicos y aparcamiento.',
            'Muchas tiendas para comprar lo que necesites.'],
            'https://maps.app.goo.gl/baQyade7psMsoJ3z9')
    },
];