import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";

type TSearchInputProps = {
    setSearchQuery: (search: string) => void
}

export default function SearchInput({ setSearchQuery }: TSearchInputProps) {
    const [query, setQuery] = useState<string>("");
    const debounceQuery = useDebounce(query, 250);

    useEffect(() => {
        setSearchQuery(debounceQuery);
    }, [debounceQuery, setSearchQuery])

    return (
        <>
            <label
                htmlFor="Search"
                className="mt-3"
            >Search! Try me!</label>
            <input
                id="search"
                className="form-control full-width"
                type="search"
                placeholder="Search..."
                aria-label="Search"
                onChange={(event) => setQuery(event.target.value)}
            />
        </>
    )
}