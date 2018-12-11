const functions = {
    sum:  (a, b) => {
    return a + b;
    },
    getNull:  () => {
        return null;
    },
    getValue:  (x) => {
        return x;
    },
    createUser:  (lastName) => {
        const user = {firstName: 'Brad'};
        user.lastName = lastName;
        return user;
    },
    getArrayFrom:  (string) => {
        return string.split(',');
    }
};

module.exports = functions;