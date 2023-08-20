import esBisiesto from "./esBisiesto";
describe("Anio Bisiesto",()=>{
    it("El 400 deberia ser considerado anio bisiesto",()=>{
        expect(esBisiesto(400)).toEqual(true);
    });
});