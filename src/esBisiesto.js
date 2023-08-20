function esBisiesto(anio){ 
    if(anio%400==0) return true; 
    else if ([100,1700,1800].includes(anio)) return false;
}
export default esBisiesto;