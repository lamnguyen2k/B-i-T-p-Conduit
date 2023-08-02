import classNames from 'classnames/bind';
import styles from './TableUsers.module.scss';
import ReactPaginate from 'react-paginate';

import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { callApiArticles, callApiListTags } from '../../../service/UseService';

const cx = classNames.bind(styles);

function TableUsers() {
    const [listArticles, setListArticles] = useState([]);
    const [listTags, setListTags] = useState([]);
    const [totalPages, setTotalPages] = useState(0);

    const limit = 10;

    useEffect(() => {
        getArticles();
        getTags();
    }, []);

    const getArticles = async () => {
        let res = await callApiArticles(limit, 0);

        if (res && res.articles) {
            setTotalPages(Math.ceil(res.articlesCount / limit));
            setListArticles(res.articles);
        }
    };

    const getTags = async () => {
        let res = await callApiListTags();

        if (res && res.tags) {
            setListTags(res.tags);
        }
    };

    const handlePageClick = async ({ selected }) => {
        const offset = selected * limit;

        let res = await callApiArticles(limit, offset);

        if (res && res.articles) {
            setListArticles(res.articles);
        }

        // tinh dc offset
        // goi api vowis tham so la offset vua tinh
        // lay dc respon
        // setListArticles(res.articles)
    };

    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <h1 className={cx('title')}>conduit</h1>
                    <br />
                    <p className={cx('content')}>
                        A place to share your knowledge.
                    </p>
                </div>
            </div>
            <Container>
                <div className={cx('body')}>
                    <div className={cx('list-articles')}>
                        <button className={cx('btn-more')}>Global Feed</button>
                        <div className={cx('articles')}>
                            {listArticles.map((item, index) => {
                                return (
                                    <div className={cx('list')} key={index}>
                                        <div className={cx('header')}>
                                            <p>
                                                <img
                                                    className={cx('avatar')}
                                                    src={item.author.image}
                                                    alt=""
                                                />
                                                <span
                                                    className={cx('user-name')}
                                                >
                                                    {item.author.username}
                                                </span>
                                            </p>
                                            <button className={cx('btn-like')}>
                                                <i
                                                    className={cx(
                                                        'fa-solid fa-heart',
                                                    )}
                                                ></i>
                                                <span className={cx('like')}>
                                                    {item.favoritesCount}
                                                </span>
                                            </button>
                                            {/* <span className={cx('time')}>
                                                    December 9, 2022
                                                </span> */}
                                        </div>
                                        <span className={cx('title-articles')}>
                                            {item.title}
                                        </span>
                                        <p className={cx('content-articles')}>
                                            {item.description}
                                        </p>
                                        <div className={cx('bottom')}>
                                            <button className={cx('btn-read')}>
                                                Read more...
                                            </button>
                                            <div className={cx('list-tags')}>
                                                {item.tagList.map(
                                                    (item, index) => {
                                                        return (
                                                            <div
                                                                className={cx(
                                                                    'tags',
                                                                )}
                                                            >
                                                                <div
                                                                    className={cx(
                                                                        'tag',
                                                                    )}
                                                                    key={index}
                                                                >
                                                                    {item}
                                                                </div>
                                                            </div>
                                                        );
                                                    },
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className={cx('list-tags-popular')}>
                        <span className={cx('title-tags')}>Popular Tags</span>
                        <div>
                            {listTags.map((item, index) => {
                                return (
                                    <div className={cx('tags-popular')}>
                                        <a
                                            href="/"
                                            className={cx('tag-popular')}
                                            key={index}
                                        >
                                            {item}
                                        </a>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className={cx('paginate')}>
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel=">"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={totalPages}
                        previousLabel="<"
                        pageClassName={cx('page-item')}
                        pageLinkClassName={cx('page-link')}
                        previousClassName={cx('page-item')}
                        previousLinkClassName={cx('page-link')}
                        nextClassName={cx('page-item')}
                        nextLinkClassName={cx('page-link')}
                        breakClassName={cx('page-item')}
                        breakLinkClassName={cx('page-link')}
                        containerClassName="pagination"
                        activeClassName="active"
                    />
                </div>
            </Container>
        </>
    );
}

export default TableUsers;
