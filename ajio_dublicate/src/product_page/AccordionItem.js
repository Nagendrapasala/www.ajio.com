import React from 'react'
import {
    MinusIcon,
    AddIcon,
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
    Flex,
  } from '@chakra-ui/react'
  let product_filter = {
    Gender : ["Male","FeMale"],
    Category : ["Tshirts","Track Pants","Sneakers & Sports Shoes","Shorts & 3/4ths","Sweatshirt & Hoodies","Jackets & Coats","Flip Flop & Slippers","Bags,Belts & Wallets"],
    Price:["Below 500","500-1000","1001-1500","1501-2000","2001-2500","Above 2500"],
    Brand:['PUMA','LEVIS','ADIDAS'],
    Discount:['21-30%','31-40%','41-50','51-80%','Free'],
    Size:['S','M','L','XL','XXL','XXXL']
  }
export const AccordionItem1 = ({name,array}) => {
  return (
    <AccordionPanel pb={4}>
    <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem >
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left' fontWeight = 'bold'>
          {name}
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    {product_filter.Price.map(e=>(<AccordionPanel pb={4}>
        <input type="checkbox"></input>&nbsp;
        <label>{e}</label></AccordionPanel>
    ))}
  </AccordionItem>


</Accordion>
    </AccordionPanel>
  )
}
