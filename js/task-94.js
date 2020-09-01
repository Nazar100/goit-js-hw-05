class StringBuilder {
    constructor(value) {
        this._value = value.split('');
    }

    get value() {
        return this._value.join('');
    }
    append(str) {
        return this._value.push(str);
    }

    prepend(str) {
        this._value.unshift(str);
        return this._value.join('');
    }

    pad(str) {
        this._value.push(str);
        this._value.unshift(str);
    }
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
