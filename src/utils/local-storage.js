export const tokenExists = () => {
    return localStorage.getItem('birras-auth') !== null;
}

export default {
    tokenExists
}
