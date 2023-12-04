import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 16px;
  padding: 4px;
  gap: 8px;
  border-radius: 999px;
`;

export const Bar = styled.div<{
  percentage: number;
}>`
  background-color: ${({ theme }) => theme.colors.purple};
  width: ${({ percentage }) => percentage}%;
  max-width: 100%;
  height: 8px;
  border-radius: 104px;
`;
