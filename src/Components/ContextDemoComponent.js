import React, {useState, useContext} from 'react';

var userDetailsContext = React.createContext(null);                 // initially it is null
// above is the context memory

export default function ContextDemoComponent()
{
    var[userDetails] = useState({                       // this userDetails must be given to the userDetailsContext
        name: 'john',
        email: 'john@gmail.com'                     // this is the current component
    })


 // context memory will give data to the current componenet and to all the applcable child component


//  Now PROVIDER comes into the picture that will responsible for identifying the values and uses INJECTOR to inject any component
// meaning with the use of the provider userDetailsContext will take the value from the userDetails

return (
    <userDetailsContext.Provider value={userDetails}>
        <div className="container-fluid">
            <h2>Main Component</h2>
            <HomeComponent />
        </div>
    </userDetailsContext.Provider>
)


}


function HomeComponent(props)               // props is the property
{
    var contextData = useContext(userDetailsContext);              // it is the hook that uses the context memory i.e. userDetailsContext and it is access by all the child components like HomeComponent

    // so basiclly contextData now contains the value userDetailsContext and that value is the userDetails(line21) and userDetils contains name and email

    return (
        <div>
            <h3>Home Component - Hello ! {contextData.name}</h3>                    {/* contextData.name is (refer line 9) */}

            <InboxComponent/>

        </div>
    )
}


function InboxComponent(props)
{
    var contextData = useContext(userDetailsContext);
    return (
        <div>
            <h3>Inbox Component</h3>
            <dl>
                <dt>User Name</dt>
                <dd>{contextData.name}</dd>
              
                <dt>Email</dt>
                <dd>{contextData.email}</dd>
            </dl>
        </div>
    )
}