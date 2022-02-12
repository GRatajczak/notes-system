import React, { useState } from 'react';
import { Input } from 'components/atoms/Input/Input';
import { useCombobox } from 'downshift';
import {
  StyledWrapper,
  StatusInfo,
  SearchResults,
  StyledSearchWrapper,
  SearchResultsItem,
} from './Search.styles';
import { useUsers } from 'hooks/useUsers';
import debounce from 'lodash.debounce';

const Search = (props) => {
  const [matchingStudents, setMatchingStudents] = useState([]);
  const { findStudents } = useUsers();

  const getMatchingStudents = debounce(async (e) => {
    console.log(e.inputValue);
    const { students } = await findStudents(e.inputValue);
    setMatchingStudents(students);
  }, 500);

  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: matchingStudents,
    onInputValueChange: getMatchingStudents,
  });

  return (
    <StyledWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <strong>Teacher</strong>
      </StatusInfo>
      <StyledSearchWrapper {...getComboboxProps()}>
        <Input {...getInputProps()} search placeholder="Find what you want" />
        <SearchResults isOpen={isOpen} {...getMenuProps()}>
          {isOpen &&
            matchingStudents.map((item, index) => (
              <SearchResultsItem
                highLighted={highlightedIndex === index}
                {...getItemProps({ item, index })}
                key={item.id}
              >
                {item.name}
              </SearchResultsItem>
            ))}
        </SearchResults>
      </StyledSearchWrapper>
    </StyledWrapper>
  );
};

export default Search;
