import { Input } from 'components/atoms/Input/Input';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
  padding: 20px 30px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  display: flex;
  justify-content: start;
  ${Input} {
    font-size: 18px;
    width: 100%;
    max-width: 350px;
    border: none;
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.grey};
  }
`;

export const StyledSearchWrapper = styled.div`
  position: relative;
`;

export const StatusInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;

export const SearchResults = styled.ul`
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transition: opacity .3s .3s, visibility:  .3s ;
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  z-index: 1000;
  max-height: 500px;
  overflow-y: scroll;
  padding: 10px;
  border-radius: 15px;
  list-style: none;
  width: 100%;
  position: absolute;
  left: 0;
  top: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const SearchResultsItem = styled.li`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  font-size: 16px;
  padding: 20px 5px;
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.lightPurple};
  }
  background-color: ${({ theme, highLighted }) =>
    highLighted ? theme.colors.lightPurple : theme.colors.white};

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
  }
`;
