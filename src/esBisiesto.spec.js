//.spec y .test son alternativas da igual cual usar
//import esBisiesto from "./esBisiesto";
import Year from "./year";
describe("Anio Bisiesto",()=>{
    it("es bisiesto si es divisible por 400",()=>{
        const year=new Year(2000);
        expect(year.esBisiesto()).toEqual(true);
    });
    it("no es bisiesto si no es divisible por 400",()=>{
        const year=new Year(2001);
        expect(year.esBisiesto()).toEqual(false);
    });
    // it("El 400 deberia ser considerado anio bisiesto",()=>{
    //     expect(esBisiesto(400)).toEqual(true);
    // });
    // it("El 2000  deberia ser considerado anio bisiesto",()=>{
    //     expect(esBisiesto(2000)).toEqual(true);
    // });
    // it("El 100 no deberia ser considerado anio bisiesto",()=>{
    //     expect(esBisiesto(100)).toEqual(false);
    // });
    // it("El 1700 no deberia ser considerado anio bisiesto",()=>{
    //     expect(esBisiesto(1700)).toEqual(false);
    // });
    // it("El 1800 no deberia ser considerado anio bisiesto",()=>{
    //     expect(esBisiesto(1800)).toEqual(false);
    // });
    // it("El 1900 no deberia ser considerado anio bisiesto",()=>{
    //     expect(esBisiesto(1900)).toEqual(false);
    // });
    // it("El 2100 no deberia ser considerado anio bisiesto",()=>{
    //     expect(esBisiesto(2100)).toEqual(false);
    // });
    // it("El 4 deberia ser considerado anio bisiesto",()=>{
    //     expect(esBisiesto(4)).toEqual(true);
    // });
    // it("El 2008 deberia ser considerado anio bisiesto",()=>{
    //     expect(esBisiesto(2008)).toEqual(true);
    // });
    // it("El 2012 deberia ser considerado anio bisiesto",()=>{
    //     expect(esBisiesto(2012)).toEqual(true);
    // });
    //     it("El 2012 deberia ser considerado anio bisiesto",()=>{
    //     expect(esBisiesto(2012)).toEqual(true);
    // });
    // it("El 2016 deberia ser considerado anio bisiesto",()=>{
    //     expect(esBisiesto(2016)).toEqual(true);
    // });
    // it("El 2017 no deberia ser considerado anio bisiesto",()=>{
    //     expect(esBisiesto(2017)).toEqual(false);
    // });
    // it("El 2018 no deberia ser considerado anio bisiesto",()=>{
    //     expect(esBisiesto(2018)).toEqual(false);
    // });
    // it("El 2019 no deberia ser considerado anio bisiesto",()=>{
    //     expect(esBisiesto(2019)).toEqual(false);
    // });
    
});
