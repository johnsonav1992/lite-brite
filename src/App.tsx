import * as stylex from '@stylexjs/stylex';
import { pegColors } from './styles/globalStyles.stylex';

const styles = stylex.create( {
    container: {
        width: '100%'
        , height: '100vh'
        , backgroundColor: pegColors.blue
    }
} );

function App () {

    return (
        <>
            <div { ...stylex.props( styles.container ) }>
                Hello
            </div>
        </>
    );
}

export default App;
