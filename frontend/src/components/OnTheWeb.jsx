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
        <div >
            <div>
                <div class="title">LinkedIn</div>
                <div >
                    <span class="icon-link">
                        <img src="https://www.cipherschools.com/static/media/LinkedIn.297c3e0e0411d3b8a7946c85a72f2bc7.svg" alt="LinkedIn" />
                    </span>
                    <input placeholder="LinkedIn" />
                    <span class="pencil-icon">
                        <img src="https://www.cipherschools.com/static/media/Pencil.da4ca677ddf0145e7203662a76a85ad5.svg" alt='Pencil' />
                    </span>
                </div>
            </div>
            <div >
                <div class="title">GitHub</div>
                <div>
                    <span class="icon-link">
                        <img src="https://www.cipherschools.com/static/media/Github.2d6b6c0c10a3b3aa7e3c7438770688f8.svg" alt="GitHub" />
                    </span>
                    <input placeholder="GitHub" />
                    <span class="pencil-icon">
                        <img src="https://www.cipherschools.com/static/media/Pencil.da4ca677ddf0145e7203662a76a85ad5.svg" alt='Pencil' />
                    </span>
                </div>
            </div>
            <div>
                <div class="title">Facebook</div>
                <div>
                    <span class="icon-link">
                        <img src="https://www.cipherschools.com/static/media/Facebook.766939726b802e2c4354f9629feba07f.svg" alt="Facebook" />
                    </span>
                    <input placeholder="Facebook" />
                    <span class="pencil-icon">
                        <img src="https://www.cipherschools.com/static/media/Pencil.da4ca677ddf0145e7203662a76a85ad5.svg" alt='Pencil' />
                    </span>
                </div>
            </div>
            <div >
                <div class="title">Twitter</div>
                <div >
                    <span class="icon-link">
                        <img src="https://www.cipherschools.com/static/media/Twitter.8dec5dacebf84c0be8bcaa33dee4a7a0.svg" alt="Twitter" />
                    </span>
                    <input placeholder="Twitter" />
                    <span class="pencil-icon">
                        <img src="https://www.cipherschools.com/static/media/Pencil.da4ca677ddf0145e7203662a76a85ad5.svg" alt='Pencil' />
                    </span>
                </div>
            </div>
            <div>
                <div class="title">Instagram</div>
                <div >
                    <span class="icon-link">
                        <img src="https://www.cipherschools.com/static/media/Instagram.31ac5927c40b6d948dc3369a313cb7c9.svg" alt="Instagram" />
                    </span>
                    <input placeholder="Instagram" />
                    <span class="pencil-icon">
                        <img src="https://www.cipherschools.com/static/media/Pencil.da4ca677ddf0145e7203662a76a85ad5.svg" alt='Pencil' />
                    </span>
                </div>
            </div>
            <div >
                <div class="title">Website</div>
                <div >
                    <span class="icon-link">
                        <img src="https://www.cipherschools.com/static/media/Website.cd72366beefca5afbc5259237cf87838.svg" alt="Portfolio" />
                    </span>
                    <input placeholder="Your Website" />
                    <span class="pencil-icon">
                        <img src="https://www.cipherschools.com/static/media/Pencil.da4ca677ddf0145e7203662a76a85ad5.svg" alt='Pencil' />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default OnTheWeb;