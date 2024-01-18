import { stylex } from '@stylexjs/stylex';

const styles = stylex.create( {
    container: {
        width: '100%'
        , height: '100vh'
        , backgroundColor: 'blue'
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
