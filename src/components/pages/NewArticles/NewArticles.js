import classNames from 'classnames/bind';
import styles from './NewArticles.module.scss';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Container } from 'react-bootstrap';
import { useState } from 'react';

const cx = classNames.bind(styles);

const schema = yup
    .object({
        title: yup.string().required(),
        description: yup.string().required(),
        body: yup.string().required(),
    })
    .required();

function NewArticles() {
    const [tagValue, setTagValue] = useState('');
    const [tagArticle, setTagArticle] = useState([]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        setTagArticle((prev) => [...prev, data.tag]);
    };

    const handleDeleteTag = (index) => {
        setTagArticle((prev) => {
            const newTag = [...prev];
            newTag.splice(index, 1);
            return newTag;
        });
    };

    return (
        <Container>
            <form className={cx('wrapper')} onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register('title')}
                    className={cx('article-title')}
                    placeholder="Article Title"
                />
                <p className={cx('errors-message')}>{errors.title?.message}</p>
                <input
                    {...register('description')}
                    className={cx('description-articles')}
                    placeholder="What's this article about?"
                />
                <p className={cx('errors-message')}>
                    {errors.description?.message}
                </p>

                <textarea
                    {...register('body')}
                    className={cx('body-article')}
                    placeholder="Write your article (in markdown)"
                />
                <p className={cx('errors-message')}>{errors.body?.message}</p>

                <input
                    {...register('tag')}
                    className={cx('tags')}
                    placeholder="Enter tags"
                    onChange={(e) => e.target.value}
                />

                <button className={cx('btn-create-article')}>
                    Publish Article
                </button>
            </form>
            <div className={cx('list-tags')}>
                <ul className={cx('wrapper-tags')}>
                    {tagArticle.map((tag, index) => (
                        <li key={index} className={cx('submit-tag')}>
                            <button
                                className={cx('btn-close-tag')}
                                onClick={() => handleDeleteTag(index)}
                            >
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                            {tag}
                        </li>
                    ))}
                </ul>
            </div>
        </Container>
    );
}

export default NewArticles;
