import { Typography, Button } from '@mui/material';



const Interest = () =>{
    return(
        <div class="mp-links-box">
            <div class="mp-link">
                <div class="mp-title">Highest Education</div>
                <div class="mp-input-link" >
                    <input class="mp-link-test" placeholder="Select your highest Education" />
                    <span class="mp-dropdown-icon">
                        <img src="https://www.cipherschools.com/static/media/BottomArrow.ecc4e39cf0b7dd9d466af346b29bcddd.svg" alt='Pencil' />
                    </span>
                </div>
            </div>
            <div class="mp-link">
                <div class="mp-title">What do you do currently?</div>
                <div class="mp-input-link" >
                    <input class="mp-link-test" placeholder="select your current positon" />
                    <span class="mp-pencin-icon">
                        <img src="https://www.cipherschools.com/static/media/BottomArrow.ecc4e39cf0b7dd9d466af346b29bcddd.svg" alt='Pencil' />
                    </span>
                </div>
            </div>     
        </div>
    )
}

export default Interest;