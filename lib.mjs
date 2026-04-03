export const MASCULINO = 1
export const FEMENINO = 2
export const NO_DEFINIDO = 3

export function saludar(nombre, sexo) {
    if(sexo === MASCULINO) {
        console.log(`hola señor ${nombre}`)

        return 
    }

    if (sexo === FEMENINO) {
        console.log(`hola señora ${nombre}`)

        return
    }

    if( sexo === NO_DEFINIDO) {
        console.log(`hola ${nombre}`)
        return 
    }

    throw new Error("el sexo es obligatorio para la funcion saludar")
}