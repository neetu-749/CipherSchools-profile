import {styled}  from '@mui/material';

// const Link = styled('div')({
//     display: 'flex',
//     flexDirection: 'column',
//     margin: '5 0 5 0',
//     position: 'relative',
//     width: '100%',
//     // '&:last-child':{
//     //     margin: '0 5px 0 20px'
//     // }
// })


const OnTheWeb = () =>{
    return(
        // <form>
        //     {/* <div>
        //         <input style={{padding:10}} placeholder="LinkedIn"></input>
        //         <input style={{padding:10}} placeholder="GitHub"></input>
        //     </div>
        //     <div>
        //         <input style={{padding:10}} placeholder="Facebook"></input>
        //         <input style={{padding:10}} placeholder="Twitter"></input>
        //     </div>
        //     <div>
        //         <input style={{padding:10}} placeholder="Instagram"></input>
        //         <input style={{padding:10}} placeholder="WebSite"></input>
        //     </div> */}
        // </form>
        <div class="mp-links-box">
            <div class="mp-link">
                <div class="mp-title">LinkedIn</div>
                <div class="mp-input-link" >
                    <span class="mp-link-icon">
                        <img src="https://www.cipherschools.com/static/media/LinkedIn.297c3e0e0411d3b8a7946c85a72f2bc7.svg" alt="LinkedIn" />
                    </span>
                    <input class="mp-link-test" placeholder="LinkedIn" />
                    <span class="mp-pencin-icon">
                        <img src="https://www.cipherschools.com/static/media/Pencil.da4ca677ddf0145e7203662a76a85ad5.svg" alt='Pencil' />
                    </span>
                </div>
            </div>
            <div class="mp-link">
                <div class="mp-title">GitHub</div>
                <div class="mp-input-link" >
                    <span class="mp-link-icon">
                        <img src="https://www.cipherschools.com/static/media/Github.2d6b6c0c10a3b3aa7e3c7438770688f8.svg" alt="GitHub" />
                    </span>
                    <input class="mp-link-test" placeholder="GitHub" />
                    <span class="mp-pencin-icon">
                        <img src="https://www.cipherschools.com/static/media/Pencil.da4ca677ddf0145e7203662a76a85ad5.svg" alt='Pencil' />
                    </span>
                </div>
            </div>
            <div class="mp-link">
                <div class="mp-title">Facebook</div>
                <div class="mp-input-link" >
                    <span class="mp-link-icon">
                        <img src="https://www.cipherschools.com/static/media/Facebook.766939726b802e2c4354f9629feba07f.svg" alt="Facebook" />
                    </span>
                    <input class="mp-link-test" placeholder="Facebook" />
                    <span class="mp-pencin-icon">
                        <img src="https://www.cipherschools.com/static/media/Pencil.da4ca677ddf0145e7203662a76a85ad5.svg" alt='Pencil' />
                    </span>
                </div>
            </div>
            <div class="mp-link">
                <div class="mp-title">Twitter</div>
                <div class="mp-input-link" >
                    <span class="mp-link-icon">
                        <img src="https://www.cipherschools.com/static/media/Twitter.8dec5dacebf84c0be8bcaa33dee4a7a0.svg" alt="Twitter" />
                    </span>
                    <input class="mp-link-test" placeholder="Twitter" />
                    <span class="mp-pencin-icon">
                        <img src="https://www.cipherschools.com/static/media/Pencil.da4ca677ddf0145e7203662a76a85ad5.svg" alt='Pencil' />
                    </span>
                </div>
            </div>
            <div class="mp-link">
                <div class="mp-title">Instagram</div>
                <div class="mp-input-link" >
                    <span class="mp-link-icon">
                        <img src="https://www.cipherschools.com/static/media/Instagram.31ac5927c40b6d948dc3369a313cb7c9.svg" alt="Instagram" />
                    </span>
                    <input class="mp-link-test" placeholder="Instagram" />
                    <span class="mp-pencin-icon">
                        <img src="https://www.cipherschools.com/static/media/Pencil.da4ca677ddf0145e7203662a76a85ad5.svg" alt='Pencil' />
                    </span>
                </div>
            </div>
            <div class="mp-link">
                <div class="mp-title">Website</div>
                <div class="mp-input-link" >
                    <span class="mp-link-icon">
                        <img src="https://www.cipherschools.com/static/media/Website.cd72366beefca5afbc5259237cf87838.svg" alt="Portfolio" />
                    </span>
                    <input class="mp-link-test" placeholder="Your Website" />
                    <span class="mp-pencin-icon">
                        <img src="https://www.cipherschools.com/static/media/Pencil.da4ca677ddf0145e7203662a76a85ad5.svg" alt='Pencil' />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default OnTheWeb;