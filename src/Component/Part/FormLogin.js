import React from 'react'
class FormLogin extends React.Component{
    render(){
        return(
            <div className="container" style={{ width: 500, height: 300,padding: 20,backgroundColor:"white",borderRadius: 10}}>
                <div className="row justify-content-center">
                        <div className="col-md-6">
                        <h2 className="row justify-content-center">Login</h2>
                            <form onSubmit={this.props.handleSubmit}>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Username </label>
                                     <input type="text" className="form-control" placeholder="Username" name="username"  value={this.props.username} onChange={this.props.InputChangeHandler} required/>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" placeholder="Password" name="password"  value={this.props.password} onChange={this.props.InputChangeHandler}/>
                                </div>
                                    <button type="submit" class="btn btn-primary btn-lg btn-block">Login</button>   
                            </form>
                        </div>
                </div>
            </div>  
        )
        
    }
}

export default FormLogin