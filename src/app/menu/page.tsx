import { JsxEmit } from "typescript";
import Header from "./components/Header"; 
import { getProducts } from "@/actions/getProducts";
import Product from "./components/Product";


export default async function MenuPage(){
    const products = await getProducts(); 
    return(
        <div className="flex-grow flex flex-row flex-wrap justify-evenly gap-10 my-10 h-auto">
            {products?.map((product) => (
                <Product
                    key={product?.id} 
                    data={product}
                />
            ))}

           
     
            
        </div>
    )
}