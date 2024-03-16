import "./SearchResult.css";

export const SearchResult = ({ each }) => {
  return <div className="search-result">{each.name}</div>;
};
