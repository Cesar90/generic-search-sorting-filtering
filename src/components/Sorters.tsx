// type Props<T> = {
//     object: T

import React, { ReactNode, useState } from "react";
import ISorter from "../interfaces/ISorter";
import genericSort from "../utils/genericSort";

type PropsWithChildrenFunction<P, T> = P & {
    children?(item: T): ReactNode
}
// }
interface ISortersProps<T> {
    dataSource: Array<T>;
    initialSortProperty: keyof T;
    // setProperty: (propertyType: ISorter<T>) => void
}

export default function Sorters<T>(props: PropsWithChildrenFunction<ISortersProps<T>, T>) {
    const { dataSource, initialSortProperty, children } = props;

    const [sortProperty, setSortProperty] = useState<ISorter<T>>({ property: initialSortProperty, isDescending: true });

    const object = dataSource.length > 0 ? dataSource[0] : {};
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
                        setSortProperty({
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
            {
                children && dataSource.sort((a, b) => genericSort(a, b, sortProperty)).map(widget => children(widget))
            }
        </>
    )
}