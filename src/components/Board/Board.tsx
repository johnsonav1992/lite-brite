// Styles
import * as stylex from '@stylexjs/stylex';
import { backgroundColors } from '../../styles/globalStyles.stylex';

const styles = stylex.create( {
    background: {
        backgroundColor: backgroundColors.black
        , width: '700px'
        , height: '500px'
        , border: `10px solid ${ backgroundColors.white }`
        , borderRadius: '.25rem'
    }
} );

const Board = () => {
    return (
        <div { ...stylex.props( styles.background ) } />
    );
};

export default Board;
