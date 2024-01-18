// Components
import Background from './components/Background/Background';
import Board from './components/Board/Board';
import Typography from './components/Typography/Typography';

function App () {
    return (
        <Background>
            <Typography
                component='h1'
                style={ { fontFamily: 'Astoria Extra Bold' } }
            >
                Lite Brite
            </Typography>
            <Board />
        </Background>
    );
}

export default App;
