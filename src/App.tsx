import { useState } from "react";
import SearchInput from "./components/SearchInput";
import people from "./mock-data/people"
import widgets from "./mock-data/widgets"
import genericSearch from "./utils/genericSearch";
import genericSort from "./utils/genericSort";
import IProperty from "./interfaces/IProperty";
import IWidget from "./interfaces/IWidget";
import IPerson from "./interfaces/IPerson";
import Sorters from "./components/Sorters";

function App() {
  const [query, setQuery] = useState<string>("");
  const [widgetSortProperty, setWidgetSortProperty] = useState<IProperty<IWidget>>({ property: "title" });
  const [peopleSortProperty, setPeopleSortProperty] = useState<IProperty<IPerson>>({ property: "firstName" });

  return (
    <>
      <SearchInput setSearchQuery={(query) => {
        setQuery(query)
      }} />
      <h2>Widgest:</h2>
      <Sorters
        setProperty={(property) => setWidgetSortProperty({ property })}
        object={widgets[0]} />
      {widgets
        .filter(
          (widget) => genericSearch(widget, ["title", "description"], query, false))
        .sort((a, b) => genericSort(a, b, widgetSortProperty.property))
        .map(widget => {
          return (
            <h3>{widget.title}</h3>
          )
        })}

      <h2>People:</h2>
      <Sorters
        setProperty={(property) => setPeopleSortProperty({ property })}
        object={people[0]} />
      {people
        .filter((person) => genericSearch(person, ["firstName", "lastName", "eyeColor"], query, false))
        .sort((a, b) => genericSort(a, b, peopleSortProperty.property))
        .map(person => {
          return (
            <h3>{person.firstName} {person.lastName}</h3>
          )
        })}
    </>
  )
}

export default App
