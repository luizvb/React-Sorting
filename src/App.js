import React, {useState} from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({articles}) {

    const [articlesList, setArticlesList] = useState(articles.sort((a, b) => b.upvotes - a.upvotes));

    const sortedArticlesByDate = () => {
        const newarticles = [...articles]
        setArticlesList(newarticles.sort((a, b) =>  new Date(b.date) - new Date(a.date)))
    }

    const sortByVotes = () => {
        const newarticles = [...articles]
        setArticlesList(newarticles.sort((a, b) => b.upvotes - a.upvotes))
    }

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button data-testid="most-upvoted-link" onClick={sortByVotes} className="small">Most Upvoted</button>
                <button data-testid="most-recent-link" onClick={sortedArticlesByDate}className="small">Most Recent</button>
            </div>
            <Articles articles={articlesList}/>
        </div>
    );

}

export default App;
