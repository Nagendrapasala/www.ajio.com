// import { Input } from "@chakra-ui/react";

// export default function Option() {

//     return (
//         <div>
//             <p>Enter OTP</p>
//             <Input placeholder="Enter OTP" />
//         </div>
//     )
// }


import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import React from "react"

function Otp() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)


    return (
        <>
            <Button onClick={onOpen}>Open Modal</Button>

            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Sign In with OTP</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Enter OTP</FormLabel>
                            <Input ref={initialRef} placeholder='Enter OTP' />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3}>
                            START SHOPPING
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Otp;

