const products = [
    {
      id: "Grt223",
      name: "Iphone 13",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aut repellat cupiditate praesentium incidunt ipsum nostrum. Vitae tenetur libero iure! Culpa sapiente assumenda veniam aperiam fugiat excepturi! Facere, sequi illum.",
      price: 400,
      stock: 10,
      image: "/img/iphone13.png",
      category: "remeras"
    },
    {
      id: "Grt224",
      name: "Iphone 14",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aut repellat cupiditate praesentium incidunt ipsum nostrum. Vitae tenetur libero iure! Culpa sapiente assumenda veniam aperiam fugiat excepturi! Facere, sequi illum.",
      price: 420,
      stock: 4,
      image: "/img/iphone14.png",
      category: "remeras"
    },
    {
      id: "Hff556",
      name: "Iphone 15",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aut repellat cupiditate praesentium incidunt ipsum nostrum. Vitae tenetur libero iure! Culpa sapiente assumenda veniam aperiam fugiat excepturi! Facere, sequi illum.",
      price: 720,
      stock: 5,
      image: "/img/iphone15.png",
      category: "pantalones"
    },
    {
      id: "Hff557",
      name: "Iphone 15 pro",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aut repellat cupiditate praesentium incidunt ipsum nostrum. Vitae tenetur libero iure! Culpa sapiente assumenda veniam aperiam fugiat excepturi! Facere, sequi illum.",
      price: 620,
      stock: 17,
      image: "/img/iphone15pro.png",
      category: "pantalones"
    },
    {
      id: "Wre442",
      name: "Watch Hermes",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aut repellat cupiditate praesentium incidunt ipsum nostrum. Vitae tenetur libero iure! Culpa sapiente assumenda veniam aperiam fugiat excepturi! Facere, sequi illum.",
      price: 800,
      stock: 2,
      image: "/img/watchhermes.png",
      category: "zapatillas"
    },
    {
      id: "Wre443",
      name: "Watch S9",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aut repellat cupiditate praesentium incidunt ipsum nostrum. Vitae tenetur libero iure! Culpa sapiente assumenda veniam aperiam fugiat excepturi! Facere, sequi illum.",
      price: 820,
      stock: 6,
      image: "/img/watchs9.jpeg",
      category: "zapatillas"
    },
  ]

  //Obtener productos
  const getProducts = () => {
    return new Promise((resolve, reject) => {
      //Simulamos un retraso de red
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