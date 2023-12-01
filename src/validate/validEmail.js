export const validEmail = email => {
    const exReg = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const res = exReg.test(email) ? true : false
    return res
}