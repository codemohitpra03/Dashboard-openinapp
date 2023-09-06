import * as React from 'react'

import AppleLogin from 'react-apple-login'



const Apple = () => {
  return (
    <div className='mb-[2px]'>
        <AppleLogin clientId="com.react.apple.login" redirectURI="https://redirectUrl.com" />
    </div>
  )
}

export default Apple