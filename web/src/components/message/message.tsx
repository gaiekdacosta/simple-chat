import { Box, Button, Flex, Text, useToast } from "@chakra-ui/react";
import { FaCopy, FaRobot, FaUser } from "react-icons/fa";
import { IoReload } from "react-icons/io5";
import MoneyChatLoading from "../moneyChatLoading/moneyChatLoading";

interface MesssageHistory {
    geminiResponse: string
    prompt: string,
}

interface MessageProps {
    messsageHistory: MesssageHistory[];
    loading: boolean;
    loadingRegenarete: boolean
    generateNewGeminiResponse: (prompt: string, i: number) => Promise<void>;
}

const Message:React.FC<MessageProps> = ({ messsageHistory, loading, loadingRegenarete, generateNewGeminiResponse }) => {
    const toast = useToast()

    const copyGeminiResponse = (response: string) => {
        navigator.clipboard.writeText(response);
        toast({
            title: 'resposta copiada',
            status: 'success',
            duration: 4000,
            isClosable: true,
        })
    };

    return ( 
        <Box
            p='1%'
            m='1% 25% 5% 25%'
            textAlign='left'>
            {messsageHistory.map((item: MesssageHistory, i: number) => 
                <Flex flexDirection='column' key={i}>
                    <Flex flexDirection='column'>
                        <Flex alignItems='center'>
                            <FaUser style={{ fontSize:'18px' }} />
                            <Text fontWeight='bold'>Você</Text>
                        </Flex>
                        <Text>
                            {item.prompt}
                        </Text>
                    </Flex>
                    <Flex flexDirection='column'>
                        <Flex alignItems='center'>
                            <FaRobot style={{ fontSize:'20px' }} />
                            <Text fontWeight='bold'>Money Chat</Text>
                        </Flex>
                        <Text>
                            {item.geminiResponse}
                        </Text>
                    </Flex>
                    <Flex mt='-1%'>
                        <Button
                            mr='-3'
                            onClick={() => copyGeminiResponse(item.geminiResponse)}
                            variant='unstyled'>
                            <FaCopy />
                        </Button>
                        <Button
                            onClick={() => generateNewGeminiResponse(item.prompt, i)}
                            variant='unstyled'>
                            <IoReload 
                                style={{ 
                                    fontSize:'18px', 
                                    ...(loadingRegenarete && { animation: 'spin 2s linear infinite' })
                                }} />
                        </Button>
                    </Flex>
                </Flex>
            )}
            {loading && <MoneyChatLoading />}
        </Box>
    );
}

export default Message;