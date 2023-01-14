import React from 'react'
import Account from '../Account/Account'
import Images from '../../constants/Images'
import { useState } from 'react'
const Header = () => {
  const [isAccount, toggledAccount] = useState(false)
  return (
    <section className="header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <div className="logo-wrappper">
              <img src={Images.Logo} alt="" />
            </div>
          </div>
          <div className="col-md-10">
            <div className="menu-wrapper">
              <ul>
                <li>
                  <div className="search">
                    <img src={Images.Search} alt="" />
                  </div>
                </li>
                <li>
                  <div className="Language">
                    <img src={Images.Flag} alt="" />
                  </div>
                </li>
                <li>
                  <div className="notification">
                    <img src={Images.Notification} alt="" />
                  </div>
                </li>
                <li >
                  <div className="profile">
                    <img onClick={() => toggledAccount(!isAccount)} src={Images.Profile} alt="" />
                  </div>
                </li>
                {isAccount ? <Account /> : null}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header