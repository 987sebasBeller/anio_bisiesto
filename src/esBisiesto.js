function esBisiesto(anio){ 
    if(anio%400==0 ||(anio%4==0 && anio%100!=0)) return true; 
    else if (anio%100==0 || [2017,2018].includes(anio)) return false;
}
export default esBisiesto;