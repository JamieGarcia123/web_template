import Image from "next/image"


function PageCard( image: any){
return(
        <div className="page-card">
            <Image src={image} width={250} height={250} alt="product" className="" />
        </div>

    )
}

export default PageCard;