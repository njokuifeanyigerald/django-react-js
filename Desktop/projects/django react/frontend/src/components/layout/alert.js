import React, { Component, Fragment } from 'react';
import { withAlert }  from 'react-alert';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import message from '../../reducers/message';


export class Alert extends Component {
    static propTypes = {
        error:  PropTypes.object.isRequired,
        message:  PropTypes.object.isRequired
    }
    componentDidUpdate(prevProps){
        const {error, alert, message} = this.props;
        if(error !== prevProps.error){
            if (error.msg.name){
                alert.error(`Name: ${error.msg.name.join()}`)
            }
            if (error.msg.email){
                alert.error(`Email: ${error.msg.email.join()}`)
            }   
            if (error.msg.message){
                alert.error(`Message: ${error.msg.message.join()}`)
            }  
            if (error.msg.non_field_errors){
                alert.error(`Message: ${error.msg.non_field_errors.join()}`)
            }
            if (error.msg.password){
                alert.error(`Message: ${error.msg.password.join()}`)
            }
            if (error.msg.username){
                alert.error(`Message: ${error.msg.username.join()}`)
            }
        }
        if (message !== prevProps.message){
            if (message.deleteLead){
                alert.success(message.deleteLead);
            }
            if (message.welcome){
                alert.success(message.welcome);
            }
            if (message.addLead){
                alert.success(message.addLead);
            }
            if (message.passwordNotMatch){
                alert.error(message.passwordNotMatch);
            }
            if (message.Required){
                alert.error(message.Required);
            }
        }
        
    }
    render() {
        return <Fragment />;
        
    }
}

const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages
})
export default connect(mapStateToProps) (withAlert()(Alert));
