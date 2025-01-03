import styled from 'styled-components';
import * as color from '../../config/colors';

export const Form = styled.form`
        display: flex;
        flex-direction: column;
        margin-top: 20px;
    
        label{
            display: flex;
            flex-direction: column;
            margin-bottom: 20px;
        }
    
        input{
            margin-top: 5px;
            height: 40px;
            font-size: 18px;
            border: 1px solid #ddd;
            padding: 0 10px;
            border-radius: 4px;
            &:focus{
                border-color: ${color.primaryColor};
            }
        }
`;
