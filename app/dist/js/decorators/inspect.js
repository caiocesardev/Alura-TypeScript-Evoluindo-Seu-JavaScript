export function inspect() {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`---- Métodos ${propertyKey}`);
            console.log(`----- Parâmetros ${JSON.stringify(args)}`);
            const retorno = metodoOriginal.apply(this, Array);
            console.log(`------ retorno: ${JSON.stringify(retorno)}`);
            return retorno;
        };
        return descriptor;
    };
}
