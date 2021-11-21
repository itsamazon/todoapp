import React from 'react'
import { connect } from 'react-redux';
import Header from './header';
import Todo from './todo';
import Footer from './footer'; 
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Dashboard = (props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate() 
    const signOut = () =>{
        navigate('/')
    } 
    return (
        <div className="min-h-full space-y-3">
            <Header 
                name = {props.userDetails.username}
                signOut ={signOut}
            />
            <div className="container mx-auto space-y-4">
                <Todo  name = {props.userDetails.username} />
                <Footer />
            </div>
        </div>
    );
};

const mapStateToProps = (state)=>{
    // console.log('state',state);
    // console.log(state.userDetails)
    return{
        userDetails:state.login.userDetails,
    }
}

export default connect(mapStateToProps,null)(Dashboard);