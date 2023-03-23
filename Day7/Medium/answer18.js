function userIdGenerator(len) {
    const char = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let id = '';
    for (let i = 0; i < len; ++i) {
        id += char.charAt(Math.floor(Math.random() * char.length));
    }
    return id;
}

console.log(userIdGenerator(7));