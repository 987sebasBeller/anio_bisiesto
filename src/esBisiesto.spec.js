import esBisiesto from "./esBisiesto";
describe("Anio Bisiesto",()=>{
    it("El 400 deberia ser considerado anio bisiesto",()=>{
        expect(esBisiesto(400)).toEqual(true);
    });
    it("El 2000  deberia ser considerado anio bisiesto",()=>{
        expect(esBisiesto(2000)).toEqual(true);
    });
    it("El 100 no deberia ser considerado anio bisiesto",()=>{
        expect(esBisiesto(100)).toEqual(false);
    });
    it("El 1700 no deberia ser considerado anio bisiesto",()=>{
        expect(esBisiesto(1700)).toEqual(false);
    });
    it("El 1800 no deberia ser considerado anio bisiesto",()=>{
        expect(esBisiesto(1800)).toEqual(false);
    });
    it("El 1900 no deberia ser considerado anio bisiesto",()=>{
        expect(esBisiesto(1900)).toEqual(false);
    });
    it("El 2100 no deberia ser considerado anio bisiesto",()=>{
        expect(esBisiesto(2100)).toEqual(false);
    });
    it("El 4 deberia ser considerado anio bisiesto",()=>{
        expect(esBisiesto(4)).toEqual(true);
    });
    it("El 2008 deberia ser considerado anio bisiesto",()=>{
        expect(esBisiesto(2008)).toEqual(true);
    });
    it("El 2012 deberia ser considerado anio bisiesto",()=>{
        expect(esBisiesto(2012)).toEqual(true);
    });
        it("El 2012 deberia ser considerado anio bisiesto",()=>{
        expect(esBisiesto(2012)).toEqual(true);
    });
    it("El 2016 deberia ser considerado anio bisiesto",()=>{
        expect(esBisiesto(2016)).toEqual(true);
    });
    it("El 2017 no deberia ser considerado anio bisiesto",()=>{
        expect(esBisiesto(2017)).toEqual(false);
    });
});