class Year{
    constructor (year){
        this.year=year;
    }
    esBisiesto(){
        // si es ivisible por 400 refactorizamos porque queremos que el codiog se explique solo
        if(this.anioEsDivisiblePor(400)) return true;
        if(this.anioEsDivisiblePor(4) && this.anioNoEsDivisiblePor(100)) return true;
        return false;
    }
    anioEsDivisiblePor(numero){
        return this.year%numero==0;
    }
    anioNoEsDivisiblePor(numero){
        return this.year%numero!=0;
    }
}
export default Year;