import React, {useState, useContext, createContext} from 'react';


var userDetailContext = createContext(null);


export default function ContextDemoComponent(){
    var [userDetails] = useState({
        name: 'john',
        email: 'john@gmail.com',
    })

    // Now we need to provide this userDetails to the createContext, in doing so we can pass this object values easily to the child Components

    return(
        <userDetailContext.Provider value={userDetails}>           {/* by passing the provider it will locate the vallue and it will get all the values and also it will give value to the components that are rendered inside it  */}
            <div className="container-fluid">                       
                <h2>Main Component</h2>             {/* we can put and access all the components here` */}           

               < HomeComponent/>
            </div>
        </userDetailContext.Provider>
    )
}

function HomeComponent(props)
{
    var contextData = useContext(userDetailContext) ;      // because it will use the context memory

    return(
        <div>
            <h3>Hello this is john - {contextData.name}</h3>

            <InboxComponent/>
        </div>
    )

   

}


function InboxComponent(props)
{
    var contextData = useContext(userDetailsContext);
    return(
        <div>
            <dl>
                <dt>User Name</dt>
                <dd>{contextData.name}</dd>
                <dt>Email</dt>
                <dd>{contextData.email}</dd>

            </dl>
        </div>
    )
}