let products =[
    {id:"1", segment:"medianos", name:"Clip Plus 2", description:"Lector bluetooth con batería repotenciada para mas transacciones", price:"249", image: "./assets/images/item2.png", beneficios:["Recibe tu dinero todos los días", "Sin contrato, papeleo ni RFC", "Sin montos mínimos de facturación", "Sin comisión extra para American Express", "Actívalo en 5 minutos"]},
    {id:"2", segment:"medianos", name:"Clip Pro 2", description:"Terminal portatil con internet GRATIS, no requiere de un smartphone", price:"1,599", image: "./assets/images/item4.png", beneficios:["Internet GRATIS de por vida para tus transacciones", "Recibe tu dinero en 24 horas, los 365 días del año", "Sin contrato, papeleo ni RFC", "Sin montos mínimos de facturación", "Ofrece MSI en más de 19 bancos aliados"]},
    {id:"3", segment:"grandes", name:"Clip Total", description:"Todo un punto de venta, con internet GRATIS e impresora de tickets físicos", price:"2,999", image: "./assets/images/item1.png", beneficios:["Internet gratis en tus transacciones", "Recibe tu dinero todos los días", "Sin contrato, papeleo ni RFC", "Sin montos mínimos de facturación", "Sin comisión extra para American Express", "Ofrece MSI con más de 19 bancos aliados", "Sin rentas mensuales por utilizarla"]},
    {id:"4", segment:"grandes", name:"Clip Stand", description:"El punto de venta que tu negocio necesita!!", price:"2,999", image: "./assets/images/item3.png", beneficios:["Internet gratis para tus transacciones", "Recibe tu dinero en 24 horas los 365 días del año", "Administra tu inventario gratis con Catálogo Clip", "Sin contratos, sin papeleo ni RFC", "Sin montos mínimos de facturación", "Ofrece MSI con más de 19 bancos y aliados", "Comunícate con Customer Happiness y recibe atención personalizada"]}
];

const productsCall = new Promise((success, error)=>{
    let condition = true;
    if(condition){
        setTimeout(()=>{
            success(products) 
        }, Math.floor(Math.random() * (1500 - 500 + 1) + 500));
    } else {
        error("Hubo un error en la solicitud, favor de intentarlo mas tarde X.X")
    }
});

export default productsCall;