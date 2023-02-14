import React, { useContext, useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { LocationContext } from "../../../services/location/location.context";
const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  position: absolute;
  top: 20px;
  z-index: 10;
  width: 100%;
`;
export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  // when search keyword inside restaurant components changes it will also change into the map component

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);
  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search...."
        style={{ backgroundColor: "white" }}
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          if (!text.length) {
            return;
          }
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};
