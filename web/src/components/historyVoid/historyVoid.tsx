import { Flex, Text } from "@chakra-ui/react";
import { IoChatbubblesSharp } from "react-icons/io5";

const HistoryVoid = () => {
    return ( 
        <Flex 
            mt='20%'
            flexDirection='column' 
            alignItems='center'>
            <IoChatbubblesSharp style={{ fontSize:'45px' }} />
            <Text fontSize='22px' fontWeight='semibold'>
                Qual pergunta a IA pode responder hoje?
            </Text>
            <Text>
                Este projeto foi desenvolvido utilizando a
            </Text>
            <a href="https://ai.google.dev" style={{ textDecoration:'underline' }}>API Gemini</a>
        </Flex>
    );
}

export default HistoryVoid;