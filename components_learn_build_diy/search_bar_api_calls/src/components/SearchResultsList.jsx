import { SearchResult } from "./SearchResult";
import "./SearchResultsList.css";

export const SearchResultsList = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((each, index) => {
        return <SearchResult each={each} key={index} />;
      })}
    </div>
  );
};
