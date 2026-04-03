import { MASCULINO, FEMENINO, NO_DEFINIDO, saludar } from "./lib.mjs"

function main() {
    const personas = [
        {nombre: "camilo", sexo: MASCULINO, nota: 10},
        {nombre: "luis", sexo: MASCULINO, nota: 10},
        {nombre: "esmeralda", sexo: FEMENINO, nota: 10}
    ]
    
    for(let persona of personas) {
        saludar(persona.nombre, persona.sexo)   
    }
}

main()