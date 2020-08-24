import { persistCombineReducers, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import UserReducer from './UserReducer';

const config = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['user'],
    blacklist: [],
};

export default persistCombineReducers(config, {
    user: UserReducer,
});
