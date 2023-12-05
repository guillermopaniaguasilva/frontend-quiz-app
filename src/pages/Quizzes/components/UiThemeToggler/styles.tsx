import styled from 'styled-components';

export const StyledSwitch = styled.div`
  &.form-switch .form-check-input,
  &.form-switch .form-check-input:checked {
    background-color: ${({ theme }) => theme.colors.purple};
    border-color: ${({ theme }) => theme.colors.purple};
    border: none;
    background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba(255,255,255,1.0)'/></svg>");
  }
  &.form-switch .form-check-input {
    height: 20px;
    width: 32px;
  }

  .form-check-input:focus {
    box-shadow: none;
  }
`;
