import React, { Component } from 'react';

class PortfolioAdmin extends Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return(
            <div>
                <h1>컨텐츠 등록</h1>
                <form action="/api/content" method="POST" encType="multipart/form-data">
                    <input type="text" name="title" />
                    <input type="text" name="preview" />
                    <input type="file" name="thumbnail" />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default PortfolioAdmin;