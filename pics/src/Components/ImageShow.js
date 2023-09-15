import './ImageShow.css'

function ImageShow({image}){
    return <div >
        <img className='pic' src = {image.urls.small} alt={image.alt_description}></img>
        </div>;
}

export default ImageShow;