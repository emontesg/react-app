import React,{Component} from 'react';
import _ from "lodash";
import Header from '../components/Header';
import JobList from '../components/job_list';
import JobDetail from '../components/job_detail'
import RegisterForm from '../components/register_form';
import api from "../services/api";

const AIR_TABLE_API_KEY = 'keyW6xcq7GgfeIoAA';
class Registrar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            jobs : [],
            selectedJob : null,
            error : false,
            isLogin : false
        };
        this.handleLogin = this.handleLogin.bind(this);
    }
    
    componentDidMount() {
        this.jobSearch();
    }
    handleLogin(login){
        console.log(login);
        this.setState({ isLogin: login });
    }
    async jobSearch(term){
        try {
          const jobs = await api.getJobs(term);
          this.setState({ isLoading: false, jobs, selectedJob: jobs[0] });
        } catch (err) {
          this.setState({ isLoading: false, error: err.message });
        }
    }

    render(){
        const jobSearch = _.debounce((term) => {this.jobSearch(term), 300});
        return (
            <div>
                <Header onSearchTermChange={ jobSearch}/>
                {this.state.isLogin?(
                    <div className="row section-job">
                        <JobList jobs = {this.state.jobs}
                            onJobSelect = {selectedJob => this.setState({selectedJob})}
                        />
                        <JobDetail job ={this.state.selectedJob}/>
                    </div>
                ):(
                <div className="content-form">
                    <RegisterForm onLogin={this.handleLogin}/>
                </div>
                )}
            </div> 
        );
    }
}
export default Registrar;