export default function genericSearch<T>(
    object: T,
    properties: Array<keyof T>,
    query: string,
    shouldBeCaseSensitive: boolean
): boolean {
    if (query === "") {
        return true;
    }
    const expressions = properties.map(property => {
        const value = object[property];
        if (typeof value === "string" || typeof value === "number") {
            if (shouldBeCaseSensitive) {
                return value.toString().includes(query);
            } else {
                return value.toString().toLowerCase().includes(query.toLowerCase());
            }
        }
        return false;
    });

    return expressions.some(expression => expression);
}