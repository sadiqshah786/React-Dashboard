import React from 'react'
import Images from '../../constants/Images'
const Account = () => {
  return (
      <div className="profileName">
        <div className="profileSet">
          <span><img src={Images.Profile} alt="" /></span>
          <div className="user-info">
            <h6>Sadiq Shah</h6>
            <h5>Admin</h5>
          </div>
        </div>
      </div>
  )
}

export default Account