import Center from "@/components/Center";
import styled from "styled-components";
import { useContext } from "react";
import { CartContext } from "@/components/CartContext";

const Bg = styled.div`
  background-color: #222;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  img{
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
  };
`;


export default function Featured({ product }) {
  const { addProduct } = useContext(CartContext);
  function addFeaturedToCart() {
    addProduct(product._id);
  }
  return (
    <Bg>
      <img src="https://hd-ecommerce.s3.amazonaws.com/1681714700328.jpg" alt="" />
    </Bg>
  );
}