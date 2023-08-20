function esBisiesto(anio){ 
    if(anio%400==0 ||(anio==4)) return true; 
    else if (anio%100==0) return false;
}
export default esBisiesto;