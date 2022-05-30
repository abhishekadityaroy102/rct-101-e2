import React from "react";
import { Button, ButtonGroup } from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Radio,RadioGroup } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import { useDisclosure } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
const AddProduct = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const Modal = () => <div />;
  // const ModalBody = () => <div />;
  // const Input = () => <div />;
  // const Select = () => <div />;
  // const RadioGroup = () => <div />;
  // const Radio = () => <div />;
  const { isOpen, onOpen, onClose } = useDisclosure()
  const handleInputChange=()=>{

  }

  return (
    <>
    {/* <p>My name is Abhishe kumar</p> */}
      <Button onClick={onOpen}my={4} data-cy="add-product-button">ADD DATA</Button>
      <Modal isOpen={isOpen} onClose={onClose} color='tomato'>
        <ModalBody pb={6}>
          <FormControl>
          <Input data-cy="add-product-title" size="sm" placeholder="Add product title" name="productname" value={FormControl.productname} onChange={handleInputChange}/>
          <Select data-cy="add-product-category" name="productsopt" value={FormControl.productsopt} onChange={handleInputChange} >
            <option data-cy="add-product-category-shirt" value="shirt">Shirt</option>
            <option data-cy="add-product-category-pant" value="pant">Pant</option>
            <option data-cy="add-product-category-jeans" value="jeans">Jeans</option>
          </Select>
          <RadioGroup data-cy="add-product-gender" onChange={handleInputChange}>
            <Radio data-cy="add-product-gender-male" name="gender" value="Male">MALE</Radio>
            <Radio data-cy="add-product-gender-female" name="gender" value="Female">FEMALE</Radio>
            <Radio data-cy="add-product-gender-unisex" name="gender" value="unisex">UNISEX</Radio>
          </RadioGroup>
          <Input data-cy="add-product-price" name="price" value={FormControl.price} onChange={handleInputChange}/>
          <Button data-cy="add-product-submit-button" onClick={onClose} type="submit">
              Submit</Button>
              </FormControl>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddProduct;
// function BasicUsage() {
//   const { isOpen, onOpen, onClose } = useDisclosure()
//   return (
//     <>
//       <Button onClick={onOpen}>Open Modal</Button>

//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Modal Title</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <Lorem count={2} />
//           </ModalBody>

//           <ModalFooter>
//             <Button colorScheme='blue' mr={3} onClick={onClose}>
//               Close
//             </Button>
//             <Button variant='ghost'>Secondary Action</Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </>
//   )
// }