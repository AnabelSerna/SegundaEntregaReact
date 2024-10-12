const products = [
    {
      id: "Grt223",
      name: "Iphone 13",
      description: "Iphone 13 de 256GB",
      price: 400,
      stock: 10,
      image: "/img/iphone13.png",
      category: "Iphone"
    },
    {
      id: "Grt224",
      name: "Iphone 14",
      description: "Iphone 14 256GB",
      price: 420,
      stock: 4,
      image: "/img/iphone14.png",
      category: "Iphone"
    },
    {
      id: "Hff556",
      name: "Iphone 15",
      description: "Iphone 15 512GB",
      price: 720,
      stock: 5,
      image: "/img/iphone15.png",
      category: "Iphone"
    },
    {
      id: "Hff557",
      name: "Iphone 15 pro",
      description: "Iphone 15 pro 1TB",
      price: 620,
      stock: 17,
      image: "/img/iphone15pro.png",
      category: "Iphone"
    },
    {
      id: "Wre442",
      name: "Watch Hermes",
      description: "Watch Hermes 32GB",
      price: 800,
      stock: 2,
      image: "/img/watchhermes.png",
      category: "Apple Watch"
    },
    {
      id: "Wre443",
      name: "Watch S9",
      description: "Watch S9 64GB",
      price: 820,
      stock: 6,
      image: "/img/watchs9.jpeg",
      category: "Apple Watch"
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