import React from 'react';
import photo from './Photo.png';
function Picture(){
	return(
		<div style={{width:"345px"}} className='bg-light-green dib br3 pa3 fl grow h5'>
			<div className='grow tc'>
				<img alt="Personal_Pic" src={photo} width="207" height="225"/>
			</div>
		</div>
		)
}
export default Picture;