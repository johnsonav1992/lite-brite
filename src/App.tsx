// Components
import Background from './components/Background/Background';
import Board from './components/Board/Board';
import Typography from './components/Typography/Typography';

import * as stylex from '@stylexjs/stylex';

const styles = stylex.create( {
    title: {
        fontFamily: 'Astoria Extra Bold'
        , background: 'linear-gradient(to right, #ef5350, #f48fb1, #7e57c2, #2196f3, #26c6da, #43a047, #eeff41, #f9a825, #ff5722)'
        , WebkitBackgroundClip: 'text'
        , WebkitTextFillColor: 'transparent'
        , fontSize: '5rem'
        , margin: 0
    }
} );

function App () {
    return (
        <Background>
            <Typography
                component='h1'
                { ...stylex.props( styles.title ) }
            >
                Lite•Brite
            </Typography>
            <Board />
        </Background>
    );
}

export default App;
