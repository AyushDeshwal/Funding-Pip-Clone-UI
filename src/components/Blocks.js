import { BLOCK_IMAGE1 } from "../utils/constants";

const Blocks =(data)=>{
    
    return(
        <div className="single-block">
            <img src={data.data.image_url}></img>
            <h1>{data.data.name}</h1>
            <p>{data.data.info}</p>
        </div>
        
    )
}

export default Blocks;