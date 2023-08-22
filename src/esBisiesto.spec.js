//.spec y .test son alternativas da igual cual usar
//import esBisiesto from "./esBisiesto";
import Year from "./year";
describe("Anio Bisiesto",()=>{
    it("es bisiesto si es divisible por 400",()=>{
        //const year=new Year(2000);
        expect(anioBisiesto(2000)).toEqual(true);
    });
    it("no es bisiesto si no es divisible por 400",()=>{
        // // arrange -> configurar
        // const year=new Year(2001);// arrange configurar
        // const bisiesto=year.esBisiesto();//act ejecutar
        // expect(bisiesto).toEqual(false);// assert verificar

        expect(anioBisiesto(2001)).toEqual(false);
    });
    //como ya cumple gracias a  la anterior lo dejamos (IMPORTANTE PONER UN BUEN MENSAJE EN EL IT)
    it("no es bisiesto si  es divisible por 100 pero no por 400",()=>{//en el it ponermos la regla del negocio si o si 
        expect(anioBisiesto(1700)).toEqual(false);
    });

    it(" es bisiesto si  es divisible por 4 pero no por 100",()=>{//en el it ponermos la regla del negocio si o si 
        expect(anioBisiesto(2008)).toEqual(true);
    });



    function anioBisiesto(anio){
        return new Year(anio).esBisiesto();

    }
    
});
