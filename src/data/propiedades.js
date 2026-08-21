const properties = [
  {
    id: 1,
    slug: "casa-sitravi",
    tipo: "Casa",
    nombre: "TU PROPIO OASIS EN BARRIO SITRAVI",
    // Corregido: Usamos backticks (`) para permitir saltos de línea de forma segura
    descripcion: `TU PROPIO OASIS EN BARRIO SITRAVI 
Exclusividad, confort y calidad de vida en una propiedad diseñada para disfrutar cada momento. Inmobiliaria Díaz & Asociados CI 464 presenta una residencia excepcional ubicada en Barrio Sitravi, una de las zonas más buscadas por quienes desean combinar tranquilidad, amplitud y cercanía al centro de la ciudad.

Pensada para el disfrute familiar y el confort diario, esta propiedad se distingue por sus espacios generosos, su excelente distribución y detalles únicos que la convierten en una verdadera oportunidad.

Un entorno para vivir y disfrutar:
El corazón de la propiedad es un espectacular jardín central parquizado con cascada ornamental, un espacio que aporta armonía, privacidad y una conexión permanente con la naturaleza. En el sector recreativo encontrará una amplia piscina con sistema de autofiltrado, solárium y baño independiente, ideal para disfrutar durante todo el año.`,
    // Añadimos tus imágenes locales a la galería
    imagenes: [
      "/img/casa2.jpeg", 
      "/img/casa1-cocina.jpeg",
      "/img/casa1-comedor.jpeg",
      "/img/casa1-patio.jpeg",
      "/videos/casa1.mp4",
    ],
    zona: "Sitravi, Tucumán",
    imagen:"/img/casa1.jpeg",
    dormitorios: 4,
    banos: 3,
    cochera: 2,
    precio: "USD 80.000",
    badge: "En venta",
    mapaUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7123.980927471796!2d-65.23511438849187!3d-26.77657391168385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d99bc1cb2a1%3A0x411db14ac0294d0b!2sClub%20SiTraVi%20-%20Tucuman%20TK%20Hockey!5e0!3m2!1ses-419!2sar!4v1781095488052!5m2!1ses-419!2sar",
    whatsappSoporte: "5491123456789"
  },
  {
    id: 2,
    slug: "galpon-vespucio",
    tipo: "Galpón Comercial",
    nombre: "Galpón Comercial en Venta sobre Av. Américo Vespucio",
    descripcion: `Galpón Comercial en Venta sobre Av. Américo Vespucio
Una inversión estratégica para empresas que buscan ubicación, funcionalidad y potencial de crecimiento.
Inmobiliaria Díaz & Asociados CI 464 presenta una excelente oportunidad comercial sobre Av. Américo Vespucio 1720, una ubicación privilegiada para actividades logísticas, almacenamiento, distribución y operaciones empresariales que requieren accesibilidad y eficiencia.
Diseñado para responder a las exigencias del sector comercial e industrial, este galpón ofrece espacios amplios, infraestructura preparada para trabajo intensivo y condiciones ideales para comenzar a operar de manera inmediata.`,
imagenes: [      
      "/img/galpon1.jpeg",
      "/img/galpon1-parte2.jpeg",
      "/img/galpon1-parte3.jpeg",
      "/img/galpon1-parte4.jpeg",
    ],
    zona: "Av. Américo Vespucio, Tucumán",
    imagen:"/img/galpon1.jpeg",
    precio: "USD 100.000",
    badge: "En venta",
    mapaUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.550946144674!2d-65.23297452545937!3d-26.854231490761094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c82cc63e239%3A0x68b85259981a5939!2sAv.%20Am%C3%A9rico%20Vespucio%2C%20T4000%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1781095026081!5m2!1ses-419!2sar",
    whatsappSoporte: "5491123456789"
  },
  {
    id: 3,
    slug: "terreno-sanlo",
    tipo: "Terreno",
    nombre: "Terreno en Venta con Alto Potencial de Desarrollo",
    descripcion: `Terreno en Venta con Alto Potencial de Desarrollo
Una oportunidad estratégica para inversores y desarrolladores en una de las zonas comerciales más dinámicas de la ciudad.
Inmobiliaria Díaz & Asociados CI 464 presenta un excepcional terreno ubicado sobre Combate de San Lorenzo, primera cuadra, en un sector de permanente crecimiento y gran circulación comercial.
Gracias a sus dimensiones, ubicación privilegiada y versatilidad de uso, esta propiedad representa una excelente oportunidad para quienes buscan desarrollar proyectos con alta proyección de rentabilidad y valorización.
Ubicación Estratégica
Situado en una de las áreas con mayor actividad comercial de la ciudad, el inmueble ofrece una combinación ideal de visibilidad, accesibilidad y potencial de crecimiento, características altamente valoradas por inversores y desarrolladores.`,
    imagenes: [
      "/img/terreno1.jpeg",
      "/img/terreno1-parte2.jpeg",
    ],
    zona: "Combate de San Lorenzo, Tucumán",
    precio: "USD 150.000",
    imagen:"/img/terreno1.jpeg",
    badge: "En venta",
    mapaUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10070.351583957754!2d-65.23824451055845!3d-26.82700597424732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c67372d9527%3A0xf45e65f98f3ed1f1!2sCombate%20de%20San%20Lorenzo%2C%20T4000%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1781094830778!5m2!1ses-419!2sar",
    whatsappSoporte: "5491123456789"
  },
  {
  id: 4,
    slug: "lote-residencial-loma-alta",
    tipo: "Terreno",
    nombre: "LOTE RESIDENCIAL EN LOMA ALTA",
    descripcion: `InmuebleProyecto: Barrio Cerrado "Loma Alta San Andrés" - Etapa 1Identificación: Lote G27Ubicación: Ruta Nacional 9, San Andrés, Tucumán (A 15 minutos de San Miguel de Tucumán)Comercializa: Inmobiliaria Diaz y Asociados📐 Dimensiones y SuperficieSuperficie Total: 250 m²Medidas: 10 metros de frente × 25 metros de fondoUbicación interna: Terreno perimetral interno, situado a escasos metros de la portería de acceso⚖️ Situación Legal y FinancieraEstado dominial: Listo para transferir con EscrituraCondición de venta: Único dueñoPrecio de Lista: USD 15.000Negociación: Se evalúan propuestas y ofertas razonables🔌 Servicios e Infraestructura del BarrioSeguridad: Control de acceso, seguridad privada 24 hs y monitoreo con cámarasPerímetro: Cerca perimetral instalada en todo el complejoEnergía: Tendido eléctrico aéreo y alumbrado público con tecnología LEDAgua: Red interna de agua potable distribuida`,
    imagenes: [
      "/img/terreno2.jpeg",
      "/img/terreno2-parte2.jpeg",
    ],
    zona: "San Andrés, Tucumán",
    precio: "USD 15.000",
    imagen:"/img/terreno2.jpeg",
    badge: "En venta",
    mapaUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5031.721685753209!2d-65.160899536735!3d-26.904620940327348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225974d53b7287%3A0xaa7aad48cb836525!2sLoma%20Alta%20San%20Andres!5e0!3m2!1ses-419!2sar!4v1781094429410!5m2!1ses-419!2sar"
  },
  {
    id: 5,
    slug: "monoambiente-en-venta",
    tipo: "departamento",
    nombre: "MONOAMBIENTE EN VENTA | MORENO AL 300",
    // Corregido: Usamos backticks (`) para permitir saltos de línea de forma segura
    descripcion: `Unidad funcional de 32 m² totales, ubicada en una zona estratégica y de gran movimiento, ideal para quienes buscan una propiedad práctica, funcional y con excelente relación precio–ubicación.
El departamento ofrece un ambiente versátil, con muy buen aprovechamiento de los metros y posibilidades de adaptar los espacios según las necesidades del propietario.
Ideal para
Primera vivienda.
Inversión para renta.
Estudiantes o profesionales.
Inversores que buscan una unidad de bajo valor de entrada.
Puntos destacados
✨ Excelente oportunidad de inversión.
✨ Precio competitivo: USD 20.000.
✨ Expensas con todo incluido.
✨ 32 m² totales.
✨ Edificio de aproximadamente 10 años.
✨ Ubicación céntrica y práctica, con acceso a comercios y servicios.
Una alternativa accesible para ingresar al mercado inmobiliario con una propiedad lista para proyectar y aprovechar.
CONSULTANOS PARA MÁS INFORMACIÓN Y COORDINAR UNA VISITA..`,
    // Añadimos tus imágenes locales a la galería
    imagenes: [
      "/img/mono2-entrada.jpeg", 
      "/img/mono2-cocina.jpeg",
      "/img/mono2-comedor.jpeg",
      "/img/mono2-banio.jpeg",
      "/img/mono2-piesa.jpeg",
    ],
    zona: "Moreno al 300, Tucumán",
    imagen:"/img/mono2-entrada.jpeg",
    dormitorios: 1,
    banos: 1,
    cocina:1,
    precio: "USD 20.000",
    badge: "En venta",
    mapaUrl:"",
    whatsappSoporte: "5491123456789"
  },
  {
    id: 6,
    slug: "departamento-en-muñecas",
    tipo: "departamento",
    nombre: "EXCELENTE DEPARTAMENTO EN MUÑECAS – UBICACIÓN, LUZ Y VISTA",
    // Corregido: Usamos backticks (`) para permitir saltos de línea de forma segura
    descripcion: `Una ubicación privilegiada para quienes buscan comodidad y practicidad en el corazón de la ciudad.

Este departamento se encuentra en un 9.º piso, con vista abierta y excelente entrada de luz natural, ofreciendo ambientes agradables y funcionales.

Cuenta con:

✨ 2 dormitorios
🛋️ Amplio living-comedor
🍽️ Cocina independiente
🧺 Lavadero separado
🚿 Baño completo
☀️ Muy buena iluminación natural
🥩 Quincho en el edificio

Su ubicación en la primera cuadra de Muñecas permite tener a pocos pasos comercios, transporte, servicios y todo lo necesario para el día a día.

🏠 Ideal para vivienda propia o como inversión con excelente ubicación y gran demanda potencial.

🔄 Se acepta permuta.

📲 Una propiedad para quienes valoran estar cerca de todo y disfrutar de una vista abierta desde las alturas.`,
    // Añadimos tus imágenes locales a la galería
    imagenes: [
      "/img/mono1-entrada.jpeg", 
      "/img/mono1-cocina.jpeg",
      "/img/mono1-comedor.jpeg",
      "/img/mono1-banio.jpeg",
      "/img/mono1-piesa.jpeg",
      "/img/mono1.jpeg",
    ],
    zona: "Muñecas",
    imagen:"/img/mono1.jpeg",
    dormitorios: 2,
    banos: 1,
    cocina:1,
    precio: "USD 60.000",
    badge: "En venta",
    mapaUrl:"",
    whatsappSoporte: "5491123456789"
  },
  {
    id: 7,
    slug: "casa-en- Crisóstomo-Álvarez",
    tipo: "Casa",
    nombre: "UNA PROPIEDAD UNICA POR SU AMPLITUD Y VERSATILIDAD ! ✨",
    // Corregido: Usamos backticks (`) para permitir saltos de línea de forma segura
    descripcion: ` Ubicada sobre Crisóstomo Álvarez al 1500, esta destacada propiedad se desarrolla sobre dos terrenos, ofreciendo una superficie y un potencial realmente excepcionales.

🏡 Casa amplia, con ambientes cómodos y múltiples posibilidades de uso.
🏢 Consultorio independiente al frente, ideal para profesionales, emprendimientos o como espacio para generar una renta adicional.
📐 Dos terrenos, una característica que brinda gran amplitud y abre la puerta a diferentes proyectos e inversiones.

📍 Excelente ubicación
🏡 Amplios espacios
🏢 Consultorio al frente
📐 Dos terrenos
💰 Gran potencial residencial y comercial.

🏠 Características Generales:
* Desarrollada en 2 plantas.
* Construida sobre terreno de 20x60.
* Ambientes amplios, luminosos y con excelente distribución.
* Terminaciones de categoría.
* Escritura inmediata.
🛏️ Distribución
* 5 dormitorios.
* Escritorio privado.
* 3 baños completos.
* Living.
* Sala.
* Antesala.
* Comedor.
* Cocina amplia y funcional.
* Lavandería independiente.
* Dependencia de servicio.
🌿 Exterior
* Quincho con asador, ideal para reuniones.
* Jardín con paisajismo.
🚗 Cochera
* Cubierta para 2 vehículos.
🤝 Observaciones
* Se reciben departamentos en parte de pago más diferencia. 300.000 dolares.`,
    // Añadimos tus imágenes locales a la galería
    imagenes: [
      "/img/casa2-cocina.jpeg", 
      "/img/casa2-comedor.jpeg",
      "/img/casa2-piesa.jpeg",
      "/img/casa2-patio.jpeg",
      "/videos/casa2.mp4",
    ],
    zona: "Crisóstomo Álvarez, Tucumán",
    imagen:"/img/casa2-comedor.jpeg",
    dormitorios: 5,
    banos: 3,
    cochera: 1,
    cocina:1,
    precio: "USD 300.000",
    badge: "En venta",
    mapaUrl:"https://www.google.com/maps/embed?pb=!3m2!1ses-419!2sar!4v1787318606087!5m2!1ses-419!2sar!6m8!1m7!1smjqZuFlr6ZMzWQgomp-TWw!2m2!1d-26.8291139563323!2d-65.22067340594987!3f350.0429418397828!4f-6.924457956660149!5f0.7820865974627469",
    whatsappSoporte: "5491123456789"
  },
  {
    id: 8,
    slug: "lote-en-las-moritas-club-de-campo",
    tipo: "Terreno",
    nombre: "🌿✨ TU LUGAR EN LAS MORITAS TE ESTÁ ESPERANDO ✨🌿",
    descripcion: `Viví la tranquilidad del campo, disfrutá de la naturaleza y construí el proyecto que siempre soñaste.

En Las Moritas Club de Campo, una de las zonas más buscadas de Tafí Viejo, se ofrecen 2 espectaculares terrenos de 5.000 m² cada uno, con una amplitud excepcional y un entorno natural privilegiado.

📍 Ruta Provincial 305, Km 13 – Camino al Timbó Viejo
🚗 A solo 12 minutos de San Miguel de Tucumán

Cada lote cuenta con 50 metros de frente por 100 metros de fondo, brindando el espacio perfecto para diseñar una casa de categoría, una residencia de fin de semana o un proyecto de inversión.

🌄 Imaginá despertar cada mañana rodeado de naturaleza, con vistas a los cerros y la tranquilidad de un entorno exclusivo, sin resignar la cercanía con la ciudad.

Además, podés elegir entre comprar un solo lote o adquirir ambos, logrando una superficie total de 10.000 m² para desarrollar un proyecto aún más ambicioso.

🏡 Viví y disfrutá de Las Moritas

El club de campo ofrece:
🔐 Seguridad privada las 24 horas
🚪 Acceso controlado y portería
🏠 Club House
🏊 Piscina
🌳 Grandes espacios verdes
🌄 Naturaleza, tranquilidad y privacidad

💎 UNA OPORTUNIDAD PARA INVERTIR Y DISFRUTAR

Ideal para quienes buscan calidad de vida, amplitud y contacto con la naturaleza, ya sea para construir su hogar, tener una casa de descanso o realizar una inversión patrimonial.

💰 USD 80.000
🔄 Se recibe permuta

📞 Consultanos y descubrí todo el potencial de estos lotes en Las Moritas.`,
    imagenes: [
      "/img/terreno3-parte3.jpeg",
      "/img/terreno3-parte4.jpeg",
      "/img/terreno3-parte2.jpeg",
      "/img/terreno3.jpeg",
    ],
    zona: "Ruta Provincial 305, Tucumán",
    precio: "USD 80.000",
    imagen:"/img/terreno3.jpeg",
    badge: "En venta",
    mapaUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.7426641656166!2d-65.17918472546418!3d-26.752586886530683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225f6efac494e9%3A0x6ae02dd58613164a!2sClub%20de%20Campo%20Las%20Moritas.!5e0!3m2!1ses-419!2sar!4v1787320514073!5m2!1ses-419!2sar"
  },
  {
    id: 9,
    slug: "lote-en-las-moritas-club-de-campo",
    tipo: "Terreno",
    nombre: "🌿✨ TU LUGAR EN LAS MORITAS TE ESTÁ ESPERANDO ✨🌿",
    descripcion: `Viví la tranquilidad del campo, disfrutá de la naturaleza y construí el proyecto que siempre soñaste.

En Las Moritas Club de Campo, una de las zonas más buscadas de Tafí Viejo, se ofrecen 2 espectaculares terrenos de 5.000 m² cada uno, con una amplitud excepcional y un entorno natural privilegiado.

📍 Ruta Provincial 305, Km 13 – Camino al Timbó Viejo
🚗 A solo 12 minutos de San Miguel de Tucumán

Cada lote cuenta con 50 metros de frente por 100 metros de fondo, brindando el espacio perfecto para diseñar una casa de categoría, una residencia de fin de semana o un proyecto de inversión.

🌄 Imaginá despertar cada mañana rodeado de naturaleza, con vistas a los cerros y la tranquilidad de un entorno exclusivo, sin resignar la cercanía con la ciudad.

Además, podés elegir entre comprar un solo lote o adquirir ambos, logrando una superficie total de 10.000 m² para desarrollar un proyecto aún más ambicioso.

🏡 Viví y disfrutá de Las Moritas

El club de campo ofrece:
🔐 Seguridad privada las 24 horas
🚪 Acceso controlado y portería
🏠 Club House
🏊 Piscina
🌳 Grandes espacios verdes
🌄 Naturaleza, tranquilidad y privacidad

💎 UNA OPORTUNIDAD PARA INVERTIR Y DISFRUTAR

Ideal para quienes buscan calidad de vida, amplitud y contacto con la naturaleza, ya sea para construir su hogar, tener una casa de descanso o realizar una inversión patrimonial.

💰 USD 80.000
🔄 Se recibe permuta

📞 Consultanos y descubrí todo el potencial de estos lotes en Las Moritas.`,
    imagenes: [
      "/img/terreno4.jpeg",
      "/img/terreno3-parte2.jpeg",
      "/img/terreno3.jpeg",
    ],
    zona: "Ruta Provincial 305, Tucumán",
    precio: "USD 80.000",
    imagen:"/img/terreno4.jpeg",
    badge: "En venta",
    mapaUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.7426641656166!2d-65.17918472546418!3d-26.752586886530683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225f6efac494e9%3A0x6ae02dd58613164a!2sClub%20de%20Campo%20Las%20Moritas.!5e0!3m2!1ses-419!2sar!4v1787320514073!5m2!1ses-419!2sar"
  },
  {
    id: 10,
    slug: "oficina-en-torres-tribunales",
    tipo: "Oficina",
    nombre: "VENTA Oficina / Estudio Profesional",
    // Corregido: Usamos backticks (`) para permitir saltos de línea de forma segura
    descripcion: `Características:
✔️Recepción amplia y funcional.
✔️3 oficinas privadas.
✔️Cocina equipada.
✔️1 baño completo.
✔️Biblioteca propia.
✔️Circuito de seguridad instalado.
✔️Finas terminaciones y detalles en madera labrada.
✔️Muebles de madera de lujo
✔️Excelente estado de conservación.
Ideal para
Estudio jurídico.
Escribanía.
Estudio contable.
Consultoras.
Consultorios profesionales.
Empresas de servicios.
Ubicación
Frente del Palacio de Justicia en una de las zonas más estratégicas de San Miguel de Tucumán, con excelente conectividad y entorno profesional.
Destacados
Ubicación de alto prestigio.
Ambientes amplios y funcionales.
Excelente imagen institucional.
Espacios listos para comenzar a trabajar.
Precio amoblada: $112.000, sin muebles $95.000
Se escuchan ofertas
📲 Consultas y visitas: 3815475092
Inmobiliaria Díaz y Asociados
Encontramos el espacio ideal para el crecimiento de tu negocio.`,
    // Añadimos tus imágenes locales a la galería
    imagenes: [
      "/img/oficina.jpeg", 
      "/img/oficina2.jpeg",
      "/img/oficina3.jpeg",
      "/img/oficina4.jpeg",
      "/img/oficina5.jpeg",
      "/videos/oficina.mp4",
    ],
    zona: "Torre Tribunales , San Miguel de Tucumán",
    imagen:"/img/oficina.jpeg",
    banos: 1,
    cocina:1,
    precio: "USD 112.000",
    badge: "En venta",
    mapaUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.0762748604357!2d-65.2090545254601!3d-26.837526190064874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c0edb2afe5f%3A0xbab497149b1edbb3!2sTorre%20Tribunales!5e0!3m2!1ses-419!2sar!4v1787321696142!5m2!1ses-419!2sar",
    whatsappSoporte: "5491123456789"
  },
  {
    id: 11,
    slug: "local-comercial",
    tipo: "Local",
    nombre: "LOCAL COMERCIAL EN VENTA | PLENO CENTRO",
    // Corregido: Usamos backticks (`) para permitir saltos de línea de forma segura
    descripcion: `Excelente oportunidad para instalar o expandir tu negocio en una de las esquinas con mayor circulación peatonal y vehicular de la ciudad.
✨ Características principales:
102 m² de superficie.
Amplio salón comercial con vidriera al frente, ideal para una excelente exhibición de productos y máxima visibilidad.
Subsuelo de gran tamaño, perfecto para depósito, stock o múltiples usos.
Acceso por escalera.
Baño instalado.
Excelente iluminación y gran potencial para diversos rubros comerciales.
Ideal para:
✔️ Locales de indumentaria
✔️ Tecnología y electrónica
✔️ Showrooms
✔️ Oficinas comerciales
✔️ Franquicias
✔️ Centros de estética o cualquier emprendimiento que requiera una ubicación estratégica. 
💰 Valor de venta: $ 112.000
Se escuchan ofertas
📲 Consultas y visitas: 3815475092
Inmobiliaria Díaz y Asociados
Encontramos el espacio ideal para el crecimiento de tu negocio.`,
    // Añadimos tus imágenes locales a la galería
    imagenes: [
      "/img/local1.jpeg", 
      "/img/local1-parte1.jpeg",
      "/img/local1-parte2.jpeg",
      "/img/local1-parte3.jpeg",
      "/img/local1-parte4.jpeg",
      "/img/local1-parte5.jpeg",
      "/img/local1-parte6.jpeg",
    ],
    zona: "San Martín y Balcarce , San Miguel de Tucumán",
    imagen:"/img/local1.jpeg",
    banos: 1,
    precio: "USD 112.000",
    badge: "En venta",
    mapaUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.2866981483726!2d-65.20091652546049!3d-26.830832089785844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c1b362ead9f%3A0x20fa8d324466c480!2sGeneral%20Jos%C3%A9%20de%20San%20Mart%C3%ADn%20%26%20Balcarce%2C%20T4000%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1787322130611!5m2!1ses-419!2sar",
    whatsappSoporte: "5491123456789"
  },
];

export default properties;