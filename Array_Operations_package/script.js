// Extending the Array prototype with useful higher-order functions

Array.prototype.sum = function () {
    return this.reduce((acc, val) => acc + val, 0);
};

Array.prototype.average = function () {
    return this.length ? this.sum() / this.length : 0;
};

Array.prototype.unique = function () {
    return [...new Set(this)];
};

Array.prototype.maxValue = function () {
    return Math.max(...this);
};

Array.prototype.minValue = function () {
    return Math.min(...this);
};

Array.prototype.chunk = function (size) {
    let result = [];
    for (let i = 0; i < this.length; i += size) {
        result.push(this.slice(i, i + size));
    }
    return result;
};

Array.prototype.shuffle = function () {
    return this.sort(() => Math.random() - 0.5);
};

Array.prototype.compact = function () {
    return this.filter(Boolean);
};

Array.prototype.flatten = function () {
    return this.reduce((acc, val) => acc.concat(Array.isArray(val) ? val.flatten() : val), []);
};

Array.prototype.groupBy = function (callback) {
    return this.reduce((acc, val) => {
        const key = callback(val);
        acc[key] = acc[key] || [];
        acc[key].push(val);
        return acc;
    }, {});
};

// Export the module
module.exports = Array.prototype;
