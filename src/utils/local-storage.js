export const tokenExists = () => {
    return localStorage.getItem('birras-auth') !== null;
}

export const mailExists = () => {
    return localStorage.getItem('user-mail');
}

export default {
    tokenExists
}
