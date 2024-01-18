import * as styleX from '@stylexjs/stylex'

const styles = styleX.create({
    test: {
        width: '20px'
        , height: '20px'
        , backgroundColor: 'red'
    }
})

function App () {

    return (
        <>
            <div {...styleX.props(styles.test)} >
                Hello
            </div>
        </>
    );
}

export default App;
