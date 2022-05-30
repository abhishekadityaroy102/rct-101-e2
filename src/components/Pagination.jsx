import React, { useState } from "react";
import { Select } from '@chakra-ui/react'
import { Button,ButtonGroup} from '@chakra-ui/react'
// import { Select } from '@chakra-ui/react'
const Pagination = ({page,setpage,setlimit,limit}) => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const ButtonGroup = () => <div />;
  // const Select = () => <div />;
  // const [page,setpage]=useState(1)
  return (
    <ButtonGroup>
      <Button data-cy="pagination-first-button" onClick={setpage(1)}>First</Button>
      <Button data-cy="pagination-previous-button" onClick={()=>setpage(page-1)}>Previos</Button>
      <Select data-cy="pagination-limit-select">
        <option data-cy="pagination-limit-3" onClick={()=>setlimit(3)}></option>
        <option data-cy="pagination-limit-6"onClick={()=>setlimit(6)}></option>
        <option data-cy="pagination-limit-9"onClick={()=>setlimit(6)}></option>
      </Select>
      <Button data-cy="pagination-next-button" onClick={()=>setpage(page+1)}>Next</Button>
      <Button data-cy="pagination-last-button">Last</Button>
    </ButtonGroup>
  );
};

export default Pagination;
