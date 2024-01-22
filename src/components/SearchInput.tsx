type TSearchInputProps = {
    setSearchQuery: (search: string) => void
}

export default function SearchInput({ setSearchQuery }: TSearchInputProps) {

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
                onChange={(event) => setSearchQuery(event.target.value)}
            />
        </>
    )
}