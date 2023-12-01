export const validName = name => {
    const exReg = /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/
    const mayorACinco = name.length > 5 ? true : false
    const res = mayorACinco ? exReg.test(name.trim()) : false
    return res
}