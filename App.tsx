import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {AuthNavigaton} from './src/navigation';
import {store} from './src/app';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';


function App(): JSX.Element {
    // const [boolFirstPage, setBoolFirstPage] = useState(false);
    // useEffect(() => {
    //     setTimeout(() => {
    //         setBoolFirstPage(true);
    //     }, 2000);
    // }, [boolFirstPage]);

    return (
        <Provider store={store}>
            <SafeAreaProvider>

                <StatusBar
                    translucent
                    backgroundColor="transparent"
                    barStyle={'dark-content'}
                />
               <AuthNavigaton />
            </SafeAreaProvider>
        </Provider>
    );
}

export default App;
