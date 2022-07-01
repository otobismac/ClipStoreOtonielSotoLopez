let products =[
    {id:"1", name:"Clip Plus 2", description:"Lector bluetooth con batería repotenciada para mas transacciones", price:"249", image: "./assets/images/item1.png"},
    {id:"2", name:"Clip Pro 2", description:"Terminal portatil con internet GRATIS, no requiere de un smartphone", price:"1,599", image: "./assets/images/item2.png"},
    {id:"3", name:"Clip Total", description:"Todo un punto de venta, con internet GRATIS e impresora de tickets físicos", price:"2,999", image: "./assets/images/item3.png"},
    {id:"4", name:"Clip Stand", description:"El punto de venta que tu negocio necesita!!", price:"2,999", image: "./assets/images/item4.png"}
];

const productsCall = new Promise((success, error)=>{
    let condition = true;
    if(condition){
        setTimeout(()=>{
            success(products) 
        }, 2000);
    } else {
        error("Hubo un error en la solicitud, favor de intentarlo mas tarde X.X")
    }
});

export default productsCall;