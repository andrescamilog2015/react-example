import { MASCULINO, FEMENINO, NO_DEFINIDO, saludar } from "./lib.mjs"

function main() {
    const personas = [
        {nombre: "camilo", sexo: MASCULINO},
        {nombre: "luis", sexo: MASCULINO}
    ]
    
    for(let persona of personas) {
        saludar(persona.nombre, persona.sexo)
    }
}

main()