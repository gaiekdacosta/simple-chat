import { Flex, Text } from "@chakra-ui/react";
import { FaRobot } from "react-icons/fa";

interface MoneyChatLoadingProps {
    
}

const MoneyChatLoading:React.FC<MoneyChatLoadingProps> = ({ }) => {
    return ( 
        <>
        <Flex flexDirection='column'>
            <Flex alignItems='center'>
                <FaRobot style={{ fontSize:'20px' }} />
                <Text fontWeight='bold'>Money Chat</Text>
            </Flex>
            <Text>
                Carregando Respostas...
            </Text>
        </Flex>
        </>
    );
}

export default MoneyChatLoading;