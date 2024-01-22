// type Props<T> = {
//     object: T
// }
interface ISortersProps<T> {
    object: T;
    setProperty: (property: Extract<keyof T, string | Date | number>) => void
}

export default function Sorters<T>({ object, setProperty }: ISortersProps<T>) {
    const objectI = typeof object === 'object' && object !== null ? object : {};
    return (
        <>
            <label
                htmlFor="sorters"
                className="mt-3"
            >
                Sorters! Try us tool!
            </label>
            <select
                id="sorters"
                className="custom-select"
                onChange={(event) => setProperty(event.target.value as any)}
            >
                {Object.keys(objectI).map(key => {
                    return (
                        <option
                            key={key} value={key}
                        >
                            Sort by {key}!
                        </option>)
                })}

            </select>
        </>
    )
}