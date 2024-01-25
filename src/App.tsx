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
import WidgetRenderer from "./components/renderers/WidgetRenderer";
import PeopleRenderer from "./components/renderers/PeopleRenderer";

function App() {
  const [query, setQuery] = useState<string>("");
  const [showPeople, setShowPeople] = useState<boolean>(false);
  const [widgetSortProperty, setWidgetSortProperty] = useState<IProperty<IWidget>>({ property: "title", isDescending: true });
  const [peopleSortProperty, setPeopleSortProperty] = useState<IProperty<IPerson>>({ property: "firstName", isDescending: true });
  const buttonText = showPeople ? "Show widgets" : "Show people";

  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => setShowPeople(preState => !preState)}>
        {buttonText}
      </button>
      <SearchInput setSearchQuery={(query) => {
        setQuery(query)
      }} />
      {!showPeople && (<>
        <h2>Widgest:</h2>
        <Sorters
          setProperty={(propertyType) => setWidgetSortProperty(propertyType)}
          object={widgets[0]} />
        {widgets
          .filter(
            (widget) => genericSearch(widget, ["title", "description"], query, false))
          .sort((a, b) => genericSort(a, b, widgetSortProperty))
          .map(widget => {
            return (
              <WidgetRenderer {...widget} />
            )
          })}
      </>)}

      {showPeople && <>
        <h2>People:</h2>
        <Sorters
          setProperty={(propertyType) => setPeopleSortProperty(propertyType)}
          object={people[0]} />
        {people
          .filter((person) => genericSearch(person, ["firstName", "lastName", "eyeColor"], query, false))
          .sort((a, b) => genericSort(a, b, peopleSortProperty))
          .map(person => {
            return (
              <PeopleRenderer {...person} />
            )
          })}
      </>}
    </>
  )
}

export default App
