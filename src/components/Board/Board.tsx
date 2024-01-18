// Styles
import * as stylex from '@stylexjs/stylex';
import { backgroundColors } from '../../styles/globalStyles.stylex';

const styles = stylex.create( {
    background: {
        backgroundColor: backgroundColors.black
        , width: '800px'
        , height: '500px'
    }
} );

const Board = () => {
    return (
        <div { ...stylex.props( styles.background ) } />
    );
};

export default Board;
