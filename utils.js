'use strict';
/**
 * @fileOverview Библиотека вспомогательных функций для JavaScript-а.
 */

/**
 * Библиотека вспомогательных функций для JavaScript-а.
 * @namespace utils
 * @type {Object}
 */
var utils = module.exports;

/**
 * Значение undefined
 * @constant
 * @default undefined
 * @type {undefined}
 */
utils.undefined = void 0;

/**
 * Имя конструктора String
 * @constant
 * @default 'String'
 * @type {String}
 */
utils.STRING = 'String';

/**
 * Имя конструктора Number
 * @constant
 * @default 'Number'
 * @type {String}
 */
utils.NUMBER = 'Number';

/**
 * Имя конструктора Boolean
 * @constant
 * @default 'Boolean'
 * @type {String}
 */
utils.BOOLEAN = 'Boolean';

/**
 * Имя конструктора Array
 * @constant
 * @default 'Array'
 * @type {String}
 */
utils.ARRAY = 'Array';

/**
 * Имя объекта Arguments
 * @constant
 * @default 'Arguments'
 * @type {String}
 */
utils.ARGUMENTS = 'Arguments';

/**
 * Имя конструктора RegExp
 * @constant
 * @default 'RegExp'
 * @type {String}
 */
utils.REGEXP = 'RegExp';

/**
 * Имя конструктора Date
 * @constant
 * @default 'Date'
 * @type {String}
 */
utils.DATE = 'Date';

/**
 * Имя конструктора Error
 * @constant
 * @default 'Error'
 * @type {String}
 */
utils.ERROR = 'Error';

/**
 * Имя конструктора Object
 * @constant
 * @default 'Object'
 * @type {String}
 */
utils.OBJECT = 'Object';

/**
 * Имя конструктора Function
 * @constant
 * @default 'Function'
 * @type {String}
 */
utils.FUNCTION = 'Function';

/**
 * Имя типа Null
 * @constant
 * @default 'Null'
 * @type {String}
 */
utils.NULL = 'Null';

/**
 * Значение типа string
 * @constant
 * @default 'string'
 * @type {String}
 */
utils.TYPE_STRING = 'string';

/**
 * Значение типа number
 * @constant
 * @default 'number'
 * @type {String}
 */
utils.TYPE_NUMBER = 'number';

/**
 * Значение типа boolean
 * @constant
 * @default 'boolean'
 * @type {String}
 */
utils.TYPE_BOOLEAN = 'boolean';

/**
 * Значение типа object
 * @constant
 * @default 'object'
 * @type {String}
 */
utils.TYPE_OBJECT = 'object';

/**
 * Значение типа function
 * @constant
 * @default 'function'
 * @type {String}
 */
utils.TYPE_FUNCTION = 'function';

/**
 * Значение типа undefined
 * @constant
 * @default 'undefined'
 * @type {String}
 */
utils.TYPE_UNDEFINED = 'undefined';

/**
 * Проверяет, является ли значение непустой строкой, либо экземпляром String.
 * @name utils.isString
 * @function
 * @param {*} value Проверяемое значение.
 * @returns {Boolean}
 */
function isString(value) {
    return ((typeof value === utils.TYPE_STRING) || is(value, utils.STRING)) && value != '';
}

/**
 * Проверяет, является ли значение числом,
 * либо строкой, представляющей из себя корректное число.
 * @name utils.isNumber
 * @function
 * @param {*} value Проверяемое значение.
 * @returns {Boolean}
 */
function isNumber(value) {
    return value != null && value !== '' && !isNaN(value);
}

/**
 * Проверяет, является ли значение целым числом,
 * либо строкой, представляющей из себя целое число.
 * @name utils.isInteger
 * @function
 * @param {*} value Проверяемое значение.
 * @returns {Boolean}
 */
function isInteger(value) {
    return isNumber(value) && (value % 1 === 0);
}

/**
 * Проверяет, является ли значение числом с плавающей точкой,
 * либо строкой, представляющей из себя число с плавающей точкой.
 * @name utils.isInteger
 * @function
 * @param {*} value Проверяемое значение.
 * @returns {Boolean}
 */
function isFloat(value) {
    return isNumber(value) && (value % 1 !== 0);
}

/**
 * Проверяет, является ли тип значения булевым.
 * @name utils.isBoolean
 * @function
 * @param {*} value Проверяемое значение.
 * @returns {Boolean}
 */
function isBoolean(value) {
    return typeof value === utils.TYPE_BOOLEAN || is(value, utils.BOOLEAN);
}

/**
 * Проверяет, является ли значение массивом.
 * @name utils.isArray
 * @function
 * @param {*} value Проверяемое значение.
 * @returns {Boolean}
 */
function isArray(value) {
    return value != null && is(value, utils.ARRAY);
}

/**
 * Проверяет, является ли значение объектом Arguments.
 * @name utils.isArguments
 * @function
 * @param {*} value Проверяемое значение.
 * @returns {Boolean}
 */
function isArguments(value) {
    return value != null && is(value, utils.ARGUMENTS);
}

/**
 * Проверяет, является ли значение регулярным выражением.
 * @name utils.isRegExp
 * @function
 * @param {*} value Проверяемое значение.
 * @returns {Boolean}
 */
function isRegExp(value) {
    return value != null && is(value, utils.REGEXP);
}

/**
 * Проверяет, является ли значение датой.
 * @name utils.isDate
 * @function
 * @param {*} value Проверяемое значение.
 * @returns {Boolean}
 */
function isDate(value) {
    return value != null && is(value, utils.DATE);
}

/**
 * Проверяет, является ли значение объектом ошибки.
 * @name utils.isError
 * @function
 * @param {*} value Проверяемое значение.
 * @returns {Boolean}
 */
function isError(value) {
    return value != null && is(value, utils.ERROR);
}

/**
 * Проверяет, является ли значение экземпляром Object.
 * @name utils.isObject
 * @function
 * @param {*} value Проверяемое значение.
 * @returns {Boolean}
 */
function isObject(value) {
    return value instanceof Object;
}

/**
 * Проверяет, является ли значение функцией.
 * @name utils.isFunction
 * @function
 * @param {*} value Проверяемое значение.
 * @returns {Boolean}
 */
function isFunction(value) {
    return typeof value === utils.TYPE_FUNCTION;
}

/**
 * Проверяет, имеет ли значение тип undefined.
 * @name utils.isUndefined
 * @function
 * @param {*} value Проверяемое значение.
 * @returns {Boolean}
 */
function isUndefined(value) {
    return typeof value === 'undefined';
}

/**
 * Проверяет, имеет ли значение тип null.
 * @name utils.isNull
 * @function
 * @param {*} value Проверяемое значение.
 * @returns {Boolean}
 */
function isNull(value) {
    return value === null;
}

/**
 * Проверяет, имеет ли значение тип undefined или null.
 * @name utils.isUndefinedOrNull
 * @function
 * @param {*} value Проверяемое значение.
 * @returns {Boolean}
 */
function isUndefinedOrNull(value) {
    return value == null;
}

/**
 * Если первый параметр проходит проверку на {@link utils.isString}, будет возвращено его примитивное значение.
 * Иначе будет возвращено знаение параметра defaultValue.
 * @name utils.toString
 * @function
 * @param {*} value Проверяемое значение.
 * @param {String} [defaultValue=undefined] Значение по-умолчанию.
 * @returns {String|undefined}
 */
function toString(value, defaultValue) {
    return isString(value) ? String(value) : defaultValue;
}

/**
 * Если первый параметр проходит проверку на {@link utils.isNumber}, будет возвращено его примитивное значение.
 * Иначе будет возвращено знаение параметра defaultValue.
 * @name utils.toNumber
 * @function
 * @param {*} value Проверяемое значение.
 * @param {Number} [defaultValue=undefined] Значение по-умолчанию.
 * @returns {Number|undefined}
 */
function toNumber(value, defaultValue) {
    return isNumber(value) ? Number(value) : defaultValue;
}

/**
 * Если первый параметр проходит проверку на {@link utils.isBoolean}, будет возвращено его примитивное значение.
 * Иначе будет возвращено знаение параметра defaultValue.
 * @name utils.toBoolean
 * @function
 * @param {*} value Проверяемое значение.
 * @param {Boolean} [defaultValue=undefined] Значение по-умолчанию.
 * @returns {Boolean|undefined}
 */
function toBoolean(value, defaultValue) {
    return isBoolean(value) ? value.valueOf() : defaultValue;
}

/**
 * Если первый параметр проходит проверку на {@link utils.isObject}, оно будет возвращено.
 * Иначе будет возвращено знаение параметра defaultValue либо пустой объект.
 * @name utils.toObject
 * @function
 * @param {*} value Проверяемое значение.
 * @param {Object} [defaultValue={}] Значение по-умолчанию.
 * @returns {Object}
 */
function toObject(value, defaultValue) {
    return isObject(value) ? value : arguments.length === 1 ? {} : defaultValue;
}

/**
 * Если первый параметр проходит проверку на {@link utils.isArray}, оно будет возвращено.
 * Иначе будет возвращено знаение параметра defaultValue либо пустой массив.
 * @name utils.toArray
 * @function
 * @param {*} value Проверяемое значение.
 * @param {Array} [defaultValue=[]] Значение по-умолчанию.
 * @returns {Array}
 */
function toArray(value, defaultValue) {
    if (value) {
        return [];
    }

    if (isArray(value)) {
        return value;
    }

    if (isArguments(value)) {
        var index = 0;
        var length = value.length;
        var array = new Array(length);

        while (index < length) {
            array[index] = value[index++];
        }

        return array;
    }

    if (arguments.length === 1) {
        return [];
    }

    return defaultValue;
}

/**
 * Если первый параметр проходит проверку на {@link utils.isRegExp}, оно будет возвращено.
 * Иначе будет возвращено знаение параметра defaultValue либо объект RegExp, созданный с использованием значения value.
 * @name utils.toRegExp
 * @function
 * @param {*} value Проверяемое значение.
 * @param {RegExp} [defaultValue=new RegExp(value)] Значение по-умолчанию.
 * @returns {RegExp}
 */
function toRegExp(value, defaultValue) {
    return isRegExp(value) ? value : arguments.length === 1 ? new RegExp(value) : defaultValue;
}

/**
 * Если первый параметр проходит проверку на {@link utils.isDate}, оно будет возвращено.
 * Иначе будет возвращено знаение параметра defaultValue либо объект Date, созданный с использованием значения value.
 * @name utils.toDate
 * @function
 * @param {*} value Проверяемое значение.
 * @param {Date} [defaultValue=new Date(value)] Значение по-умолчанию.
 * @returns {Date}
 */
function toDate(value, defaultValue) {
    return isDate(value) ? value : arguments.length === 1 ? new Date(value) : defaultValue;
}

/**
 * Если первый параметр проходит проверку на {@link utils.isError}, оно будет возвращено.
 * Иначе будет возвращено знаение параметра defaultValue либо объект Error, созданный с использованием значения value.
 * @name utils.toError
 * @function
 * @param {*} value Проверяемое значение.
 * @param {Error} [defaultValue=new Error(value)] Значение по-умолчанию.
 * @returns {Error}
 */
function toError(value, defaultValue) {
    return isError(value) ? value : arguments.length === 1 ? new Error(value) : defaultValue;
}

/**
 * Если первый параметр проходит проверку на {@link utils.isFunction}, оно будет возвращено.
 * Иначе будет возвращено знаение параметра defaultValue либо объект Function, созданный с использованием значения value.
 * @name utils.toFunction
 * @function
 * @param {*} value Проверяемое значение.
 * @param {Function} [defaultValue=new Function(value)] Значение по-умолчанию.
 * @returns {Function}
 */
function toFunction(value, defaultValue) {
    return isFunction(value) ? value : arguments.length === 1 ? new Function(value) : defaultValue;
}

/**
 * Если первый параметр не проходит проверку на {@link utils.isUndefined}, оно будет возвращено.
 * Иначе будет возвращено знаение параметра defaultValue либо undefined.
 * @name utils.toSomething
 * @function
 * @param {*} value Проверяемое значение.
 * @param {*} [defaultValue=undefined] Значение по-умолчанию.
 * @returns {*}
 */
function toSomething(value, defaultValue) {
    return isUndefined(value) ? (arguments.length === 1 ? value : defaultValue) : value;
}

/**
 * Проверяет, соответствует ли тип значения параметра object типу type.
 * @name utils.is
 * @function
 * @param {*} object Проверяемый объект.
 * @param {String} type Имя нативного конструктора с заглавной буквы (включая Null).
 * @returns {Boolean}
 */
function is(object, type) {
    return getType(object) === type;
}

/**
 * Приводит параметр object к типу type с использованием значения по-умолчению.
 * Если тип не соответствует ни одному имени нативного конструктора, будет возвращено значение object.
 * @name utils.toType
 * @function
 * @param {String} type Имя нативного конструктора с заглавной буквы (исключая Null).
 * @param {*} object
 * @param {*} [defaultValue]
 * @returns {*}
 * @example
 * // Выражение
 * utils.toType(utils.ARRAY, 123, null);
 * // аналогично выражению
 * utils.toArray(123, null);
 */
function toType(type, object, defaultValue) {
    if (type === utils.STRING ||
        type === utils.NUMBER ||
        type === utils.BOOLEAN ||
        type === utils.OBJECT ||
        type === utils.ARRAY ||
        type === utils.REGEXP ||
        type === utils.DATE ||
        type === utils.ERROR ||
        type === utils.FUNCTION
        ) {
        return utils['to' + type](object, defaultValue);
    } else {
        return object;
    }
}

/**
 * Возвращает имя конструктора с заглавной буквы (включая Null), в соответствии с типом объекта object.
 * @name utils.toType
 * @function
 * @param {*} object Инспектируемый объект.
 * @returns {String}
 */
function getType(object) {
    return object === null ? utils.NULL : Object.prototype.toString.call(object).slice(8, -1);
}

/**
 * Создает наследование экземпляров функции constructor от экземпляров функции superConst либо от объекта superConst.
 * Если в параметре superConst была передана функция, она не будет вызываться для создания прототипа конструктора constructor.
 * Свойство constructor прототипа функции constructor будет иметь правильную ссылку.
 * @name utils.inherits
 * @function
 * @param {Function} constructor Функция-конструктор, экземпляры которой будут наследовать от superConst.prototype, либо от самого superConst.
 * @param {Function|Object} superConst Функция-конструктор или объект, от которого необходимо наследовать.
 * @param {Boolean} [copyStatic=false] Если передано true, собственные свойства функции superConst будут скопированы в функцию constructor.
 * @returns {Object} Прототип функции constructor.
 * @example
 * function Constructor() {
 *   this.a = 1;
 * }
 *
 * function SuperConstructor () {
 *   this.b = 2;
 * }
 *
 * SuperConstructor.prototype.c = 3;
 *
 * utils.inherits(Constructor, SuperConstructor);
 *
 * var instance = new Constructor();
 * instance.a; // 1
 * instance.b; // undefined
 * // SuperConstructor не вызывается для создания экземпляра, используемого в качестве прототипа функции Constructor.
 * instance.c; // 3
 * instance.constructor === Constructor; // true
 *
 * // Использование экземпляра конструктора SuperConstructor в качестве прототипа:
 * utils.inherit(Constructor, new SuperConstructor());
 * var instance = new Constructor();
 * instance.a; // 1
 * instance.b; // 2
 * instance.c; // 3
 * instance.constructor === Constructor; // true
 *
 */
function inherits(constructor, superConst, copyStatic) {
    var prototype = null;

    if (isFunction(constructor)) {
        if (isFunction(superConst)) {
            Constructor.prototype = superConst.prototype;
            prototype = new Constructor();
            Constructor.prototype = null;
        } else if (superConst != null) {
            prototype = superConst;
            superConst = prototype.constructor;
        }

        if (copyStatic === true) {
            for (var property in superConst) {
                if (superConst.hasOwnProperty(property)) {
                    constructor[property] = superConst[property];
                }
            }
        }

        prototype.constructor = constructor;
        constructor.prototype = prototype;
    }

    return prototype;
}

/**
 * Создает объект, наследующий от переданного прототипа.
 * @param {Function|Object} [prototype=Object.prototype] Прототип, от которого должен наследовать создаваемый объект. Если передана функция, в качестве прототипа объекта будет использован её простотип.
 * @name utils.create
 * @function
 * @returns {Object}
 * @example
 * var object = utils.create({
 *   foo: 'bar'
 * });
 *
 * object.foo; // bar
 * object.hasOwnProperty('foo'); // false
 *
 * function Constructor () {
 *   this.foo = 'baz';
 * }
 * Constructor.prototype.foo = 'bar';
 *
 * var object2 = utils.create(Constructor);
 *
 * object2.foo; // bar (not baz! use: utils.create(new Constructor()))
 * object2 instanceof Constructor; // true
 * object2.constructor === Constructor; // true
 */
function create(prototype) {
    var object;

    if (isFunction(prototype)) {
        prototype = prototype.prototype;
    }

    if (prototype == null) {
        object = {};
    } else {
        Constructor.prototype = prototype;
        object = new Constructor();
        Constructor.prototype = null;
    }

    return object;
}

function Constructor() {
}

/**
 * Exports: {@link utils}
 * @exports utils
 */

utils.is = is;
utils.isString = isString;
utils.isNumber = isNumber;
utils.isInteger = isInteger;
utils.isFloat = isFloat;
utils.isBoolean = isBoolean;
utils.isObject = isObject;
utils.isArray = isArray;
utils.isArguments = isArguments;
utils.isRegExp = isRegExp;
utils.isDate = isDate;
utils.isError = isError;
utils.isFunction = isFunction;
utils.isUndefined = isUndefined;
utils.isNull = isNull;
utils.isUndefinedOrNull = isUndefinedOrNull;
utils.toType = toType;
utils.toString = toString;
utils.toNumber = toNumber;
utils.toBoolean = toBoolean;
utils.toObject = toObject;
utils.toArray = toArray;
utils.toRegExp = toRegExp;
utils.toDate = toDate;
utils.toError = toError;
utils.toFunction = toFunction;
utils.toSomething = toSomething;
utils.getType = getType;
utils.inherits = inherits;
utils.create = create;

