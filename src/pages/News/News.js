import React from "react"
import {Fragment} from "react"
// import uniqId from "uniqid";

export class NewsPage extends React.Component {
    state = {
        author: undefined,
        title: undefined,
        description: undefined,
        url: undefined,
        urltoing: undefined,
        publushedAt: undefined,
    };


    componentDidMount = async () => {
        const APIkey= '25c898e56ebc4b448c04caeff8765efe';
        const apiURL = await fetch(`http://newsapi.org/v2/everything?q=bitcoin&from=2020-02-19&sortBy=publishedAt&apiKey=${APIkey}`);
        const info = await apiURL.json();
        const articless = info.articles[1];

        this.setState({
            author: articless.author,
            title: articless.title,
            description: articless.description,
            url: articless.url,
            urltoing: articless.urlToImage,
            publushedAt: articless.publishedAt,
        })
    };

    render() {
        return (
            <Fragment>
                <div>
                    <p>autor is: {this.state.author}</p>
                    <br/>
                    <p>title is: {this.state.title}</p>
                    <br/>
                    <p><img src={this.state.urltoing} alt=""/></p>
                    <br/>
                    <p>description is: {this.state.description}</p>
                    <br/>
                    <p>     url is: {this.state.url}</p>
                    <br/>
                    <p> Published at: {this.state.publushedAt}</p>
                </div>
            </Fragment>
        );
    }
}