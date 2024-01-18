import { PropsWithChildren } from 'react';

// Styles
import * as stylex from '@stylexjs/stylex';
import { backgroundColors } from '../../styles/globalStyles.stylex';

const styles = stylex.create( {
    container: {
        width: '100%'
        , height: '100vh'
        , display: 'flex'
        , justifyContent: 'center'
        , alignItems: 'center'
        , backgroundColor: backgroundColors.gray
    }
} );

const Background = ( { children }: PropsWithChildren<unknown> ) => {
    return (
        <div { ...stylex.props( styles.container ) }>
            { children }
        </div>
    );
};

export default Background;
