// Import Styled Component
import styled from "styled-components";
import { css } from "styled-components";

const Button = styled.button`
    padding: 1rem;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
    border: none;

    background-color: ${({theme, variant}) => theme.colors[variant] || theme.colors.primary};

    // Props full
    // jika ada props full, set width 100% dan display block
    ${({full}) => full && css`
        display: block;
        width: 100%
    `}
`;

export default Button;