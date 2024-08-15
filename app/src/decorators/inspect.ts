    export function inspect(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: any[]) {
            console.log(`---- Métodos ${propertyKey}`);
            console.log(`----- Parâmetros ${JSON.stringify(args)}`);
            const retorno = metodoOriginal.apply(this, Array);
            console.log(`------ retorno: ${JSON.stringify(retorno)}`);
            return retorno; 
        }
        return descriptor;
    }