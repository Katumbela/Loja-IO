import React from 'react'
const Favoritos = (favoritos, setFavoritos) =>{
    return(
        <>
       <div className='container'>
        <div clasName='Conteudo'>
            {
                favoritos.map((curElm) =>
                {
                return(
                    <div className='itensfav'>
                    <div className='img_box'>
                        <img src={curElm.Img}></img>
                    </div>
                    </div>
                )
            })
        }
        </div>
       </div>
        </>
    )
}
export default Favoritos