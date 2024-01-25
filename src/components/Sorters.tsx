// type Props<T> = {
//     object: T

import React from "react";
import IProperty from "../interfaces/IProperty";

// }
interface ISortersProps<T> {
    object: T;
    setProperty: (propertyType: IProperty<T>) => void
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
                onChange={(event) => {
                    const values = event.target.value.split("-");
                    if (values.length === 2) {
                        setProperty({
                            property: values[0] as any,
                            isDescending: values[1] === "true"
                        })
                    }
                }}
            >
                {Object.keys(objectI).map((key) => {
                    return (
                        <React.Fragment key={key}>
                            <option key={`${key}-true`} value={`${key}-true`}>
                                Sort by '{key}' descending!
                            </option>
                            <option key={`${key}-false`} value={`${key}-false`}>
                                Sort by '{key}' ascending!
                            </option>
                        </React.Fragment>
                    );
                })}

            </select>
        </>
    )
}