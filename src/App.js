import React from 'react';
import logo from './logo.svg';
import './App.css';
import articles from './articles'
import ArticleCard from './ArticleCard'
import ArticleItem from './ArticleItem'


class App extends React.Component {

  state = {
    articles: articles,
    view: 'cards',
    theme: 'light'
  }


  handleLightDarkClick = () =>{
    switch(
      this.state.theme
    ){
      case 'light':
        this.setState(
          {theme: 'dark'}
        )
        break
      case 'dark':
        this.setState(
          {theme: 'light'}
        )
        break
        default: this.setState({theme: 'light'})
    }
  }

  handleCardListClick = () =>{
    switch(
      this.state.view
    ){
      case 'cards':
        this.setState(
          {view: 'list'}
        )
        break
      case 'list':
        this.setState(
          {view: 'cards'}
        )
        break
        default: this.setState({view: 'cards'})
    }
  }

  renderArticles = () => {
    return this.state.articles.map(article => {
              if(this.state.view === 'list'){
                return <ArticleItem 
                key = {article.id}
                title = {article.title}
                theme = {this.state.theme}/>
              }else if(this.state.view === 'cards'){
                return <ArticleCard 
                key={article.id} 
                title={article.title}
                url={article.url}
                urlToImage={article.urlToImage}
                description={article.description}
                theme = {this.state.theme}
                />
              }
    })
  }

  render(){
    return (
      <div className={this.state.theme}>
        <button onClick={this.handleLightDarkClick}>Switch to {this.state.theme.charAt(0).toUpperCase() + this.state.theme.slice(1) } Mode</button>
        <button onClick={this.handleCardListClick}>Switch to {this.state.view.charAt(0).toUpperCase() + this.state.view.slice(1) } View</button>
        <div className={this.state.view}>
          {this.renderArticles()}
        </div>
      </div>
    );
  }
}

export default App;
