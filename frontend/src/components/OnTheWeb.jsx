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
            <div style={{alignItems: "center",display: "flex",justifyContent: "space-between",width: "100%"}}>
                <div>
                    <div style={{marginRight:'475px', marginBottom:'10px'}}> LinkedIn</div>
                    <div >
                        <input style={{width:'540px', height:'40px', borderRadius:'5px', border:'white', marginBottom:'10px'}} placeholder="LinkedIn" />
                    </div>
                </div>
                <div >
                    <div style={{marginRight:'490px', marginBottom:'10px'}}>GitHub</div>
                    <div>
                        <input style={{width:'540px', height:'40px', borderRadius:'5px', border:'white',marginBottom:'10px'}} placeholder="GitHub" />
                    </div>
                </div>
            </div>
            <div style={{alignItems: "center",display: "flex",justifyContent: "space-between",width: "100%",}}>
            <div>
                    <div style={{marginRight:'470px', marginBottom:'10px'}}> Facebook</div>
                    <div >
                        <input style={{width:'540px', height:'40px', borderRadius:'5px', border:'white', marginBottom:'10px'}} placeholder="Facebook" />
                    </div>
                </div>

            <div >
                <div style={{marginRight:'490px', marginBottom:'10px'}}>Twitter</div>
                <div >
                    <input style={{width:'540px', height:'40px', borderRadius:'5px', border:'white', marginBottom:'10px'}} placeholder="Twitter" />
                </div>
            </div>
            </div>
            

            <div style={{alignItems: "center",display: "flex",justifyContent: "space-between",width: "100%",}}>
            <div>
                <div style={{marginRight:'470px', marginBottom:'10px'}}>Instagram</div>
                <div >
                    <input style={{width:'540px', height:'40px', borderRadius:'5px', border:'white', marginBottom:'10px'}} placeholder="Instagram" />
                </div>
            </div>

            <div >
                <div style={{marginRight:'482px', marginBottom:'10px'}}>Website</div>
                <div >
                    <input style={{width:'540px', height:'40px', borderRadius:'5px', border:'white',marginBottom:'10px'}} placeholder="Your Website" />
                </div>
            </div>
            </div>


        </div>
    )
}

export default OnTheWeb;