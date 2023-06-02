

interface IParams {
    productId: string; 
}

export default function ProductPage({params}: {params: IParams}) {
    return (
        <div>
            {params.productId}
            
        </div>
    )
}