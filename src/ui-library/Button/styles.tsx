import styled from 'styled-components';

export const Btn = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  font: inherit;
  color: inherit;
  cursor: pointer;
  outline: none;
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.purple};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  gap: 16px;
  align-self: stretch;
  border-radius: 12px;
  box-shadow: 0px 16px 40px 0px rgba(143, 160, 193, 0.14);
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  line-height: 100%; /* 18px */
  width: 100%;
`;
