import React, { useEffect, useState } from "react";
import AddProduct from "./AddProduct";
import Pagination from "./Pagination";
import Product from "./Product";
import axios from "axios";
import { Flex, Spacer } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;
  const [pdata,setpdata]=useState([])
  const [page,setpage]=useState(1)
  const [limit,setlimit]=useState(3)
  useEffect(()=>{
    axios.get(`http://localhost:8080/products?_page=${page}&_limit=${limit}`).then((r)=>{
      
      setpdata(r.data)
    })
  },[page,limit])
  // console.log(pdata)

  return (
    <Flex flexDirection="row">
      <AddProduct/>
      <Grid  h='200px'
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(3, 1fr)'
  gap={4}><Product pdata={pdata}/></Grid>
      <Pagination setpage={setpage} page={page} setlimit={setlimit} limit={limit}/>
    </Flex>
  );
};

export default Products;
