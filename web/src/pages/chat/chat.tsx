import { Button, Flex, Input, InputGroup, InputRightElement, useToast } from "@chakra-ui/react";
import HistoryVoid from "../../components/historyVoid/historyVoid";
import Header from "../../components/header/header";
import api from "../../service/api";
import { useState } from "react";
import { IoSend } from "react-icons/io5";
import Message from "../../components/message/message";

interface MesssageHistory {
    geminiResponse: string
    prompt: string,
}

const Chat = () => {
    const [prompt , setPrompt] = useState<string>('')
    const [messsageHistory, setMessageHistory] = useState<MesssageHistory[]>([])
    const [loading, setLoading] = useState(false);
    const [loadingRegenarete, setLoadingRegenerate] = useState(false);

    const handleKeyPress = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            await sendPrompt();
        }
    };

    const handlePrompt = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPrompt(e.target.value);
    };

    const displayErrorMessage = () => {
        toast({
            title: "Ocorreu um erro inesperado.",
            status: 'error',
            duration: 4000,
            isClosable: true,
        });
    };

    const generateNewGeminiResponse = async (prompt: string, i: number) => {
        setLoadingRegenerate(true)
        try {
            const response = await api.post('/geminiChat', { prompt });
    
            setMessageHistory(prevHistory => {
                return prevHistory.map((item, index) => {
                    if (index === i) {
                        return { geminiResponse: response.data.geminiResponse, prompt: prompt };
                    }
                    return item;
                });
            });
        } catch (error) {
            console.error('Erro ao gerar nova resposta do Gemini:', error);
            toast({
                title: 'Ocorreu um erro durante a geração de um nova resposta.',
                status: 'error',
                duration: 4000,
                isClosable: true,
            });
            displayErrorMessage();
        } finally {
            setLoadingRegenerate(false)
        }
    };
    

    const toast = useToast()

    const sendPrompt = async () => {
        setLoading(true);
        setPrompt('');
        try {
            const response = await api.post('/geminiChat', { prompt });
            setMessageHistory(prevHistory => [
                ...prevHistory,
                { geminiResponse: response.data.geminiResponse, prompt: prompt }
            ]);
        } catch (error) {
            console.error(error);
            displayErrorMessage();
        } finally {
            setLoading(false);
        }
    };

    return ( 
        <>
            <Header />
            {messsageHistory.length > 0 
                ? 
                <Message
                    loading={loading}
                    loadingRegenarete={loadingRegenarete}
                    messsageHistory={messsageHistory} 
                    generateNewGeminiResponse={generateNewGeminiResponse}
                /> 
                : 
                <HistoryVoid /> 
            }
            <Flex justifyContent='center'>
                <Flex
                    position='fixed'
                    bottom='0'
                    width='50%'
                    p='15px'
                    zIndex='999'
                >
                <InputGroup flex='1'>
                    <Input
                        h='50px'
                        bg='#212121'
                        value={prompt}
                        onChange={handlePrompt}
                        onKeyPress={handleKeyPress}
                        placeholder="Digite uma dúvida sobre finanças"
                    />
                    <InputRightElement>
                        <Button
                            isDisabled={prompt.length > 0 ? false : true}
                            onClick={sendPrompt}
                            variant='unstyled'
                            mt='25%' 
                        >
                            <IoSend style={{ fontSize:'20px' }} />
                        </Button>
                    </InputRightElement>
                </InputGroup>
                </Flex>
            </Flex>
        </>
    );
}

export default Chat;