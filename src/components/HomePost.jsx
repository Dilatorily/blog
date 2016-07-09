import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router';

import { RED, LIGHT_BLUE, DARK_GREY, LIGHT_GREY } from '../constants/style';
import { getContentFromFirstTag } from '../utils';

const styles = {
    post: {
        paddingBottom: 20,
        marginBottom: 20,
        borderBottom: `1px solid ${ LIGHT_GREY }`,
        ':hover': {}
    },
    link: {
        color: DARK_GREY,
        textDecoration: 'none'
    },
    article: {
        display: 'inline-block',
        verticalAlign: 'middle',
        width: 'calc(100% - 200px)'
    },
    title: {
        margin: '0 0 10px',
        fontSize: 32,
        fontWeight: 500,
        transition: '0.25s ease-in-out'
    },
    hovered: { color: LIGHT_BLUE },
    description: {
        margin: 0,
        fontSize: 18,
        fontWeight: 100,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    },
    date: {
        display: 'inline-block',
        verticalAlign: 'middle',
        width: 200,
        margin: 0,
        fontSize: 16,
        fontWeight: 'normal',
        fontStyle: 'italic',
        textAlign: 'right',
        color: RED,
        transition: '0.25s ease-in-out'
    }
};

class HomePost extends React.Component {
    render() {
        return (
            <li
                key="post"
                style={ styles.post }
            >
                <Link
                    style={ styles.link }
                    to={ `/posts/${ this.props.date.format('YYYY-MM-DD') }` }
                >
                    <div style={ styles.article }>
                        <h2
                            style={ [
                                styles.title,
                                Radium.getState(this.state, 'post', ':hover') ?
                                styles.hovered :
                                null
                            ] }
                        >
                            { getContentFromFirstTag(this.props.post, 'h1') }
                        </h2>
                        <p style={ styles.description }>
                            { getContentFromFirstTag(this.props.post, 'p') }
                        </p>
                    </div>
                    <h3
                        style={ [
                            styles.date,
                            Radium.getState(this.state, 'post', ':hover') ?
                            styles.hovered :
                            null
                        ] }
                    >
                        { this.props.date.format('MMMM Do, YYYY') }
                    </h3>
                </Link>
            </li>
        );
    }
}

HomePost.propTypes = {
    post: React.PropTypes.string.isRequired,
    date: React.PropTypes.object.isRequired
};

export default Radium(HomePost);
