import React, { Component } from 'react';
import ReactDOME from 'react-dom'

class FindDomeNote extends Component {
        render() {
                return (
                        <div>
                                <button onClick={this.changeIMG}>Change Img</button>  <br></br>
                                <img src="https://www.google.com/search?q=online+image&sxsrf=AOaemvK74x_OZsSqz9XranOeanFbZ3YTSw:1633884804158&tbm=isch&source=iu&ictx=1&fir=3HQ6E17Ze_LCTM%252CU1uy3BhAS6GzZM%252C_%253BPscJbdUHNL7XEM%252CF7Yyky1bjneHCM%252C_%253BpaaGuLsHc7vqoM%252CU1uy3BhAS6GzZM%252C_%253BKzdZXoz_-jIFpM%252CmB816mbb1vQc2M%252C_%253Bjkja7Fh0GSEU8M%252Cyx1OIIrEPwEx-M%252C_%253BW7B4SxYq6PvcKM%252CbxagvGMEbxrCtM%252C_%253BlFbAG9ACGhifVM%252C-3KK1aNiCnrZvM%252C_%253B5KpcZT_amTAfJM%252CJ_SUX6tT43D6iM%252C_%253B4i0kJQvVunN2rM%252CMHgxTgbj063VeM%252C_%253Bx8L4W8LSlZJp2M%252C-2tVgcZD3qi3AM%252C_&vet=1&usg=AI4_-kQtExRFTl_JV_Rkf1vYkrq9Q-8UlQ&sa=X&ved=2ahUKEwiFv-uap8DzAhUkyzgGHeybD-sQ9QF6BAgqEAE&cshid=1633884946101691#imgrc=3HQ6E17Ze_LCTM"></img>
                        </div>
                );
        }
}

export default FindDomeNote;