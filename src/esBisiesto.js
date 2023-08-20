function esBisiesto(anio){ 
    if(anio%400==0 ||([4,2008].includes(anio))) return true; 
    else if (anio%100==0) return false;
}
export default esBisiesto;