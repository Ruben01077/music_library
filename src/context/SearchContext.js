import { createContext } from "react";

  const SearchContext = createContext({
    term: "",
    handleSearch: () =>{}
})

export default  SearchContext