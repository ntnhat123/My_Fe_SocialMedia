
import { all, AllEffect, call, ForkEffect, spawn } from 'redux-saga/effects';
import postSaga from './post/saga';
function* rootSaga(): Generator<AllEffect<ForkEffect<void>>> {
    const sagas = [postSaga];
    yield all(
        sagas.map(saga =>
            spawn(function* () {
                while (true) {
                try {
                    yield call(saga);
                    break;
                } catch (e) {
                    console.error(e);
                }
                }
            }),
        ),
    );
}

export default rootSaga;
