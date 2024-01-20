import * as stylex from '@stylexjs/stylex';
import { backgroundColors } from '../../styles/globalStyles.stylex';

const styles = stylex.create( {
    pegHole: {
        borderRadius: '50%'
        , borderColor: backgroundColors.gray
        , borderStyle: 'solid'
        , borderWidth: '1px'
        , width: '1vw'
        , height: '1vw'
    }
} );

const PegHole = () => {
    return (
        <div { ...stylex.props( styles.pegHole ) } />
    );
};

export default PegHole;
