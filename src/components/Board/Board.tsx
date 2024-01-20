// Styles
import * as stylex from '@stylexjs/stylex';
import { backgroundColors } from '../../styles/globalStyles.stylex';
import PegHole from '../PegHole/PegHole';

const styles = stylex.create( {
    background: {
        backgroundColor: backgroundColors.black
        , width: '50vw'
        , aspectRatio: '1.5/1'
        , border: `10px solid ${ backgroundColors.white }`
        , borderRadius: '.25rem'
        , display: 'flex'
        , flexWrap: 'wrap'
        , justifyContent: 'center'
        , alignItems: 'center'
        , gap: '.25rem'
        , padding: '2px'
    }
} );

const pegs = Array( 200 ).fill( null );

const Board = () => {
    return (
        <div { ...stylex.props( styles.background ) }>
            {
                pegs.map( peg => {
                    return <PegHole key={ peg } />;
                } )
            }
        </div>
    );
};

export default Board;
