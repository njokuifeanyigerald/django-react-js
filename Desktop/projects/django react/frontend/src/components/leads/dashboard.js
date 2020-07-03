import React,{Fragment} from 'react'
import Form from './form';
import Leads from './leads';

export default function Dashboard() {
    return (
        <Fragment>
            <Form/>
            <Leads/>
        </Fragment>
    )
}
