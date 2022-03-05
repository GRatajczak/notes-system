import styled from 'styled-components';

export const StyledWrapper = styled.div`
  position: fixed;
  top: 50%;
  z-index: 30;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 600px;
  min-height: 700px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  box-shadow: 0px -5px 25px -10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
`;
