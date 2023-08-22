class Year{
    constructor (year){
        this.year=year;
    }
    esBisiesto(){
        if(this.year%400==0) return true;
        if(this.year%4==0 && this.year%100!=0) return true;
        return false;
    }
}
export default Year;