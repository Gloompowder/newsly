import React from 'react'

function ArticleItem(props){
  return (
    <div className="item {this.props.theme}">
      <strong>{props.title}</strong>
    </div>
  )
}

export default ArticleItem