import React,{Component} from 'react'
import {bindActionCreators} from 'redux'
import getForeCasts from '../actions/index'
import {connect} from 'react-redux'


class SearchBar extends Component{
    constructor(props){
        super(props)

        this.state = {term : ''}
        

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);

    }
    render(){
        return (
         <div>
             <form onSubmit = {this.onFormSubmit}>
                 <input type='text' 
                 value = {this.state.term}  
                 onChange = {this.onInputChange}/>
                 <input type='submit' value='submit' />
             </form>
         </div>
        );
    }

    onInputChange(event){
        this.setState({term:event.target.value});
    }

    onFormSubmit(event){
        event.preventDefault();
        this.props.getForeCasts(this.state.term);
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({'getForeCasts' : getForeCasts }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)