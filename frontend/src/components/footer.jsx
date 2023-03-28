import { Typography, Button } from '@mui/material';



const Footer = () =>{
    return(
        <div >
            <div style={{alignItems: "center",display: "flex",justifyContent: "space-between",width: "100%"}}>
            
            <div style={{display:'flex',justifyContent:'space-between'}}>
                <div>
                    <div >Highest Education</div>
                    <div ><input placeholder="Select your highest Education" />
                            <img src="https://www.cipherschools.com/static/media/BottomArrow.ecc4e39cf0b7dd9d466af346b29bcddd.svg" alt='edit' />
                    </div>
                    </div>
                <div>

                <div>
                    <div >What do you do currently?</div>
                    <div >
                        <input placeholder="select your current positon" /><img src="https://www.cipherschools.com/static/media/BottomArrow.ecc4e39cf0b7dd9d466af346b29bcddd.svg" alt='edit' />
                    </div>
                    </div>
                </div>   

                </div>

            </div>
        </div>
    )
}

export default Footer;