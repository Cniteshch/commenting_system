import { all } from 'redux-saga/effects';
import {  postComment, getComments } from './comment.saga';

export default function* rootSaga() {
    yield all([
        postComment(),
        getComments()
    ])
}