export const validateName = name => {
    const textOnly = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/;

    if (textOnly.test(name)) {
        return true;
    }

    return false;
}


export const validateEmail = email => {
    const textOnly = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if (textOnly.test(email)) {
        return true;
    }

    return false;
}