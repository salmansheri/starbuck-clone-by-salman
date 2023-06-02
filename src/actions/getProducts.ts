import prisma from "@/libs/prismaDB";
import getCurrentUser from "./getCurrentUser";

export async function getProducts() {
    const currentUser = await getCurrentUser(); 
    try {
        if(!currentUser) {
            return null; 
        }

        const products = await prisma.product.findMany(); 
        
        if(!products) {
            return null; 
        }

        return products; 
 
    } catch(error: any) {
        console.log(error); 
        return null; 
    }
}

export async function getProductsById(id: string) {
    try {
        const currentUser = await getCurrentUser(); 
        if(!currentUser) {
            return null; 
        }

        const product = await prisma.product.findUnique({
            where: {
                id,
            }
        }); 

        if(!product) {
            return null; 
        }

        return product; 
        

    } catch(error: any) {
        console.log(error); 
        return null; 
    }
}