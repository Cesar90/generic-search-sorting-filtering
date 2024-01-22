interface IFooBar {
    foo: string;
    bar: string;
}

const fooBars: Array<IFooBar> = [
    {
        foo: "foo1",
        bar: "bar1"
    },
    {
        foo: "I am foo two",
        bar: "I am bar two"
    },
    {
        foo: "foo three",
        bar: "bar three"
    },
]

function sortByKey<T>(data: Array<T>, key: keyof T) {
    data.sort((a, b) => {
        if (a[key] > b[key]) {
            return 1;
        }
        if (a[key] < b[key]) {
            return -1;
        }
        return 0;
    })
}