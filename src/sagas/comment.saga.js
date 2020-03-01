import {
    put,
    takeLatest
} from 'redux-saga/effects';
import {
    POST_COMMENT,
    POST_COMMENT_ASYNC,
    GET_COMMENT,
    GET_COMMENT_ASYNC
} from '../sharedFunctions/types';
import Firebase from "firebase";
import config from '../sharedFunctions/config'

const firebase = Firebase.initializeApp(config);
const db = firebase.firestore();


function* postCommentAsync({comment, selected}) {
    db.collection('comment').add({
        body: comment,
        selected: selected ? selected : 'selected'
    });
    yield put({
        type: POST_COMMENT_ASYNC,
        comment,
        selected
    });
}


function* postComment() {
    yield takeLatest(POST_COMMENT, postCommentAsync);
}

function* getCommentAsync() {
 let result = [];
    yield db.collection("comment").get().then((querySnapshot) => {
 querySnapshot.forEach((doc) => {
            result.push(doc.data());
                });
    })
    yield put({
        type: GET_COMMENT_ASYNC,
        result
    });
}


function* getComments() {
    yield takeLatest(GET_COMMENT, getCommentAsync);
}


export {
    postComment, 
    getComments
};