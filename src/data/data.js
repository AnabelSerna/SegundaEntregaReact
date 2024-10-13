const products = [
    {
      id: "Grt223",
      name: "Iphone 13",
      description: "El Apple iPhone 13 representa una actualización menor del iPhone 12. Conservando la pantalla OLED de 6.1 pulgadas, el iPhone 13 cuenta con un procesador Apple A15 Bionic, con opciones de almacenamiento de 128GB. 256GB. o 512GB. La cámara principal del iPhone 13 es dual, con lentes wide y ultrawide de 12MP con IBIS y zoom óptico 2x, y la cámara frontal es de 12MP. El iPhone 13 tiene parlantes stereo, soporta carga rápida tanto por cable como inalámbrica, es resistente al polvo y agua, y soporta redes 5G.",
      price: 600,
      stock: 10,
      image: "/img/iphone13.png",
      category: "Iphone"
    },
    {
      id: "Grt224",
      name: "Iphone 14",
      description: "El Apple iPhone 14 llega este año con el mismo chip A15 Bionic del iPhone 13. Con una pantalla de 6.1 pulgadas, el iPhone 14 cuenta con una cámara dual con dos sensores de 12MP, siendo el principal estabilizado. La cámara selfie es de 12MP y suma PDAF y la batería puede cargarse en forma inalámbrica mediante MagSafe o por cable, logrando una carga de 50% en 30 minutos. El iPhone 14 también cuenta con parlantes stereo, Face ID, sistema de mensajería de emergencia vía satélite, y resiste el polvo y agua.",
      price: 700,
      stock: 4,
      image: "/img/iphone14.png",
      category: "Iphone"
    },
    {
      id: "Hff556",
      name: "Iphone 15",
      description: "El Apple iPhone 15 conserva el diseño de la generación anterior pero incorpora el Dynamic Island a su pantalla de 6.1 pulgadas. Potenciado por un procesador Apple A16 Bionic, el iPhone 15 cuenta con una cámara dual de 48MP + 12MP, y su cámara selfie es de 12 MP, sumando sensores para reconocimiento facial Face ID. El iPhone 15 admite carga inalámbrica para su batería que carga a la mitad en 30 minutos, cuenta con parlantes stereo, resistencia al agua, y corre iOS 17.",
      price: 900,
      stock: 5,
      image: "/img/iphone15.png",
      category: "Iphone"
    },
    {
      id: "Hff557",
      name: "Iphone 15 pro",
      description: "El iPhone 15 Pro se perfila como una de las joyas brillantes de la corona de Apple. Este modelo destaca por su pantalla OLED Super Retina XDR de 6,1 pulgadas con una resolución de 2556x1179 píxeles, que garantiza una visualización nítida y detallada. En su núcleo, está alimentado por el chip A17 Pro, que proporciona un rendimiento excepcional similar al de las otras variantes de la serie iPhone 15. La cámara, uno de los aspectos más destacados, ofrece una impresionante resolución de 48 megapíxeles, garantizando fotos y vídeos de calidad superior.",
      price: 1020,
      stock: 17,
      image: "/img/iphone15pro.png",
      category: "Iphone"
    },
    {
      id: "Wre442",
      name: "Watch Hermes",
      description: "Basándose en una base común de artesanía y belleza, la gama de Apple Watch Hermès se amplía con nuevos diseños icónicos. La última colección ofrece un viaje a territorio desconocido con tejidos de tonos intensos, materiales lujosos, detalles de inspiración náutica y el debut del elegante y duradero Apple Watch Hermès Ultra 2.",
      price: 500,
      stock: 2,
      image: "/img/watchhermes.jpeg",
      category: "Watch"
    },
    {
      id: "Wre443",
      name: "Watch S9",
      description: "La serie 9 del Apple Watch incorpora un nuevo chipset S9, prometiendo un incremento en la performance de GPU del 30 por ciento y sumando un NPU de cuatro núcleos, lo que se traduce en animaciones más rápidas, mejorando la autonomía de la batería.",
      price: 610,
      stock: 6,
      image: "/img/watchs9.jpeg",
      category: "Watch"
    },
    {
      id: "Wre444",
      name: "Macbook Air M2",
      description: "La nueva MacBook Air, rediseñada para aprovechar toda la potencia del revolucionario chip M2, combina una velocidad increíble y una gran eficiencia energética en una carcasa de aluminio resistente e increíblemente delgada. Es una laptop ultraportátil que te da el poder y la libertad de trabajar, jugar y crear donde quieras.",
      price: 1500,
      stock: 10,
      image: "/img/macbookairm2.png",
      category: "macbook"
    },
    {
      id: "Wre445",
      name: "MacBook M3",
      description: "Un rendimiento sin precedentes. Gráficos de última generación. Hasta 22 horas de batería.Y ahora también en negro espacial.",
      price: 1600,
      stock: 8,
      image: "/img/macbookm3.jpeg",
      category: "macbook"
    },
    {
      id: "Wre446",
      name: "MacBook Pro",
      description: "Llegó la MacBook Pro más poderosa de todas. De la mano de los ultrarrápidos chips M1 Pro y M1 Max, los primeros diseñados por Apple para profesionales, disfrutarás un rendimiento revolucionario con una duración excepcional de la batería. Además, tendrás una espectacular pantalla Liquid Retina XDR, la mejor cámara y el sistema de audio más avanzado en una notebook Mac, y todos los puertos que necesitas. La nueva MacBook Pro es mucho más que una notebook única en su clase: es una verdadera superpotencia.",
      price: 2000,
      stock: 7,
      image: "/img/macbookpro.png",
      category: "macbook"
    },
  ]

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products)
      }, 2000)
    })
  }
  
  const getProduct = (idProduct) => {
    return new Promise( (resolve)=> {
      setTimeout(()=> {
        const product = products.find( (product)=> product.id === idProduct )
        resolve(product)
      }, 2000)
    })
  }
  
  export { getProducts, getProduct }