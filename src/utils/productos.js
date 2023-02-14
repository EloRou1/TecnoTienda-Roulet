 let productos =[
    
    {id:"1", nombre:"Smart TV Noblex",categoria:"television",precio:"$50000",descripcion:"Smart Tv 40 pulgadas full HD",foto:"https://http2.mlstatic.com/D_NQ_NP_2X_974663-MLA47846000904_102021-F.webp",},
    {id:"2", nombre:"Smart TV Samsung",categoria:"television",precio:"$130000",descripcion:"Smart Tv 50 pulgadas UHD",foto:"https://http2.mlstatic.com/D_NQ_NP_2X_787221-MLA48007684849_102021-F.webp",},
    {id:"3", nombre:"Cafetera Essenza Mini C Nesspreso",categoria:"hogar" ,precio:"$45000",descripcion:"Cafetera compacta perfecta el mejor café en tu propia casa",foto:"https://http2.mlstatic.com/D_NQ_NP_2X_894651-MLA40506772610_012020-F.webp",},
    {id:"4", nombre:"Microndas Quick Chef BGH",categoria:"hogar" ,precio:"$41000",descripcion:"Perfecto para los chefs sin tiempo",foto:"https://http2.mlstatic.com/D_NQ_NP_2X_868957-MLA51538271923_092022-F.webp",},
    {id:"5", nombre:"JBL Stage 2",categoria:"audioYVideo",precio:"$33000",descripcion:"Sistema de sonido perfecto para living o auto",foto:"https://http2.mlstatic.com/D_NQ_NP_2X_848387-MLA49189533083_022022-F.webp",},
    {id:"6", nombre:"Mini Proyector Gadnik",categoria:"audioYVideo",precio:"$52000",descripcion:"Proyector Full HD 2800 lumenes ",foto:"https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/PROJ041W/1000x1000-PROJ041W.jpg&w=1000&q=100",},
    {id:"7", nombre:"Logitech Prodigy G203 ",categoria:"perifericos",precio:"$10000",descripcion:"Mouse logitech perfecto para gaming y de alta sensibilidad",foto:"https://http2.mlstatic.com/D_NQ_NP_2X_941244-MLA44331789634_122020-F.webp",},
    {id:"8", nombre:"HyperX Cloud Flight",categoria:"perifericos",precio:"$30000",descripcion:"Headset HyperX sonido 7.1 ideal para partidas largas",foto:"https://http2.mlstatic.com/D_NQ_NP_2X_675916-MLA40762447172_022020-F.webp",},

]

 export const gFetch = (id)=>{
    return new Promise(( resolve, reject )=>{
        
        setTimeout(()=>{
            
            resolve(id ? productos.find(producto => producto.id === id ) :productos)
        }, 1000)
    })
} 

