import { Button, Flex, Popover, PopoverArrow, 
    PopoverBody, PopoverCloseButton, 
    PopoverContent, PopoverTrigger, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";

const Header = () => {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    useEffect(() => {
        setIsPopoverOpen(true);
    }, []);

    return ( 
        <Flex 
            p='0.5% 1% 1% 1%'
            alignItems='center'
            justifyContent='space-between'>
            <Text fontWeight='semibold'>Simple Chat 1.0</Text>
            <Popover isOpen={isPopoverOpen} onClose={() => setIsPopoverOpen(false)}>
            <PopoverTrigger>
                <Button
                    onClick={() => window.open("https://github.com/gaiekdacosta/simple-chat")}>
                    <FaGithub />
                </Button>
            </PopoverTrigger>
            <PopoverContent color='black'>
                <PopoverArrow />
                <PopoverCloseButton mt='1.5%' />
                <PopoverBody>
                    <Text >Clique aqui para ver o código fonte</Text>
                </PopoverBody>
            </PopoverContent>
            </Popover>
        </Flex>
    );
}

export default Header;