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
    },
    getRandomNumBetween: (...args) => {
        let argus = [...args];
        let smallest, largest;
        const getRandomFromMinMax = (min, max) => Math.random() * (max - min) + min; // the actual min max function
        if (Array.isArray(argus[0])){ // check if supplied parameter is an array
            let sorted = argus[0].sort((a, b) =>{
                return a - b;
            });
            smallest = sorted[0];
            largest = sorted[sorted.length-1];
            return getRandomFromMinMax(smallest, largest);
        } else if (argus.length >= 2){ // check if supplied parameters are two or more numbers
            let sorted = argus.sort((a, b) =>{
                return a - b;
            });
            smallest = sorted[0];
            largest = sorted[sorted.length-1];
        }
        return getRandomFromMinMax(smallest, largest);
    }
};

module.exports = functions;