import { Box, InputBase, styled } from '@mui/material';

const Component = styled(Box)`
    background: #F6F6F6;
    & > div {
        margin: 10px;
    }
`;


const BreadCrumb = ({ setText, setCount}) => {
    
    return (
        <Component m={1}>
            <InputBase 
                onChange={(e) =>setText(e.target.value)}
                placeholder="Search images" 
            />
            <InputBase 
                onChange={(e) => setCount(e.target.value)}
                placeholder="Number of images" 
                type="number"
            />
        </Component>
    )
}

export default BreadCrumb;