import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

const Nav = styled.nav`
    background-color: ${primaryColor};
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;

    a {
        color: #fff;
        font-weight: bold;
    }
`;
export { Nav };
