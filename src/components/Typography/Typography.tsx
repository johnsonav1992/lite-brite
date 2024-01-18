import React, { ComponentProps } from 'react';

type ComponentOptions = 'p' | 'div' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type Props<T extends ComponentOptions> = ComponentProps<T> & {
    component: T;
};

const Typography = <T extends ComponentOptions>( {
    component
    , children
    , style
    , ...props
}: Props<T> ) => {
    return React.createElement( component, props, children );
};

export default Typography;
