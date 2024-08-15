import { Button } from '@chakra-ui/react';


interface ISQLinkTodoButton {
    onClick: () => void;
    text: string;
}

function SQLinkTodoButton(props: ISQLinkTodoButton) {
    return (
        <Button colorScheme='teal' size='sm' onClick={props.onClick}>
            {props.text}
        </Button>
    )
};
export default SQLinkTodoButton;