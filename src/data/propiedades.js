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
  }
];

export default properties;