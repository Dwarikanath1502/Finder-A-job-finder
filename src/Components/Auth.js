import React,{useEffect} from 'react'
import { ContextHolder } from '@frontegg/rest-api';
import { useAuth, useLoginWithRedirect } from "@frontegg/react";

function Auth() {

  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();

  // Uncomment this to redirect to login automatically
  useEffect(() => {
    if (!isAuthenticated) {
  loginWithRedirect();
    }
  }, [isAuthenticated, loginWithRedirect]);

  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  };

  return (
    <div className='App'>
      {isAuthenticated ? (
        <div className='card'>
          <div>
            <img src={user?.profilePictureUrl} alt={user?.name} />
          </div>
          <div className='detail'>
            <span className="heading">Name: {user?.name}</span>
            <span className="heading">Name: {user?.email}</span>
          </div>
          <div>
            <button className="button" onClick={()=> logout()}>Click to logout</button>
          </div>
        </div>
      ) : 
      (
        <div>
          <button className="button" onClick={() =>loginWithRedirect()}>
            Click me to login
          </button>
        </div>
      )}
    </div>
  )
}

export default Auth