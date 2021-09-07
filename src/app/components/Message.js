import React from 'react';


const Message = ({mode,children,title,className,style,...rest}) => {
    let color, icon

    switch (mode) {
        case "error":
            color = "#f44336"
            icon = "fa-time"        
            break;
        case "warning":
            color = "#ff9800"
            icon ="fa-exclamation"        
            break;
        case "success":
            color = "#4caf50"
            icon ="fa-check"        
            break;
        case "info":
            color = "#2196f3"
            icon ="fa-info"        
            break;
        default:
            color = "#2196f3"
            icon ="fa-info"  
            break;
    }

    return ( 
        <div
            className={`p-3 ${className}`} 
            style={{display:"flex", alignItems:"center", borderRadius: "12px", border:`1.5px solid ${color}`, ...style}}
        >
            <i style={{color:color}} className={`mr-2 fas ${icon}`}></i>
            <b className="mx-2">{title}</b>
            {children}
        </div>
     );
}
 
export default Message;