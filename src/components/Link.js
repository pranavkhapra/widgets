import React from 'react'

function Link({href,className,children}) {
    const onClick=(event)=>{
       if(event.metaKey || event.ctrlKey){
           return;
       }



        event.preventDefault();//stops for the prevent the full page reload
        window.history.pushState({},'',href)
        
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent)
    }
    return (
        <a onClick={onClick}className={className} href={href}>{children}</a>
    )
}

export default Link
