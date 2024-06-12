import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Signup from '../Pages/signup';

const middleheader = () => {
  const [showModal,setShowModal] = useState(false);

  return (
    <div className='flex space-x-4 justify-end px-9 text-xs pt-2 bg-white'>
        <div>help</div>
        <div>orders and returns</div>
        <button onClick={()=>setShowModal(true)}>sign up</button>
        {showModal && <Signup onClose={()=>setShowModal(false)}/>}
        <Link to='/signin'><button>log in</button></Link>
    </div>
  )
}

export default middleheader;