import React, {Component} from 'react'

import { md2html } from '../../util/md'

class Article extends Component {
    constructor() {
        super()
    }
    render() {
        let { currentArticle } = this.props
        let currentArticleDOM = md2html(currentArticle.md)

        return (
            <article className="markdown-body" dangerouslySetInnerHTML={{__html: currentArticleDOM}}>
            </article>
        )
    }
}

export default Article
