import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
  float: right;
  background-color: ${({ theme }) => theme.colors.basic};
  margin-top:10px;
  margin-right:10px;
`;

export const DropdownContent = styled.div`
  opacity: 0;
  position: absolute;
  left: 0;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.basic};
  transition: opacity 0.3s ease-in-out;

  ${DropdownContainer}:hover & {
    opacity: 1;
  }
`;

export const Option = styled.div`
  cursor: pointer;
`;

export const OptionImage = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 10px;
    padding: 5px;
`;