import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { cartContext } from '../store/cartContext';


function ProductList() {
    const {cart, setCart} = useContext(cartContext);
    const [products, setProducts]= useState([]);
 
    let navigate = useNavigate();

    useEffect(()=>{
        axios.get('https://northwind.vercel.app/api/categories#')
        .then((res)=>{
            setProducts(res.data)
    })
    }, [])

    const goToDetail = (id)=>{
        navigate(`/urunler/${id}`);
    }
    const addToCart = (item)=>{
        // yoksa sepete yeni ürün olarak ekler
        let cartProduct = cart.find(q=>q.id===item.id);
        if(cartProduct){
            cartProduct.quantity = cartProduct.quantity+1;
            setCart([...cart]);
         }
         else{
            let newCartProduct = {
                id: item.id,
                name:item.name,
               quantity:1
            }
            setCart([...cart, newCartProduct])
         }
        }
        //Eğer sepette ürün yoksa bu fonksiyon çalışmamalı 
        const decreasetoCart=(item)=>{
            let cartProduct = cart.find(q=>q.id===item.id);
        if(cartProduct){
            cartProduct.quantity = cartProduct.quantity-  1;
            //Eğer ürün adedi sıfır olduysa onu sepettende çıkartmak gerek
            if(cartProduct.quantity===0){
                let newCart = cart.filter(q=>q.id!==cartProduct.id);
                setCart([newCart]);
            }
            else{
            
                setCart([...cart])
             }
           
         }
         
        }
  return (<>
    <table>
        <thead>
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Unit Price</td>
                <td>Detail</td>
            </tr>
        </thead>
        <tbody>
            {
                products && products.map((item,key)=>{
                    return <tr key={key}>
                        <td>{item.id}</td>
                        <td><Link to={'/urunler/'+ item.id}>{item.name}</Link></td>
                        <td>{item.unitPrice}</td>
                        <td><button onClick={()=> goToDetail(item.id) }>Go To Detail</button></td>
                        <td><button onClick={()=> decreasetoCart(item) }>-</button></td>
                        <td><button onClick={()=> addToCart(item) }>+</button></td>

                    </tr>
                })
            }
        </tbody>
        
    </table>

    </>)
}

export default ProductList