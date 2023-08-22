class Year{
    constructor (year){
        this.year=year;
    }
    esBisiesto(){
        if(this.year%400==0) return true;
        return false;
    }
}
export default Year;