import React from "react";


export interface IFiltersProps<T> {
    object: T;
    properties: Array<keyof T>;
    onChangeFilter: (property: keyof T) => void;
}

export function Filters<T>(props: IFiltersProps<T>) {
    const { object, properties, onChangeFilter } = props;

    const objectI = typeof object === 'object' && object !== null ? object : {};
    return (
        <div className="p-1 my-2">
            <label
                className="mt-3"
                htmlFor="">
                Filters! Try us too!
            </label>
            {Object.keys(objectI).map((key) => {
                return (
                    <React.Fragment key={key}>
                        <input
                            type="checkbox"
                            id={key}
                            value={key}
                            onChange={() => onChangeFilter(key as any)}
                            checked={properties.some(property => property === key)}
                            className="m-1 ml-3"
                        />
                        <label htmlFor={key}>
                            '{key}' is truthy
                        </label>
                    </React.Fragment>
                );
            })}
        </div>
    )
}
