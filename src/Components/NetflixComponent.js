    import './NetflixComponent.css';
    const HeaderComponent = () => 
    {
        return (
            <div className = 'btn-toolbar justify-content-between'>
                <div className = 'btn-group'>
                <button>
                    <img src = './images/netflix.jpg' width = '300px' height = '100px' alt = 'logo'/>
                </button>
                </div>
                <div className = 'btn-group'>
                    <select className = 'form-select w-100'>
                        <option>English</option>
                        <option>Hindi</option>
                    </select>
                    <button className = 'btn btn-danger mr-2 w-100'>Sign in</button>
                </div>
            </div>
        )
    } 


    const RegisterComponent = () => 
    {
        return(
            <div className = 'input-group input-group-lg'>
                <input type= "email" className = 'form-control'/>
                <button className= 'btn btn-danger '>Get Started</button>
            </div>
        )
    }


    export default function NetflixComponent()

    {
        return(
            <div className = 'container-fluid backEffect'>
                <header>
                <HeaderComponent/>
                </header>
                <section style = {{height:'1000px'}} className ='d-flex justify-content-center align-items-center'>
                    <div className = 'w-50'> 
                    <h1 className = 'text-white'> Unlimites movies, TV Shows and more</h1>
                <RegisterComponent />
                </div>

                </section>
            </div>
        )
    }