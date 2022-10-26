import React from 'react'
import { Box, Flex, Button } from 'rebass'
import { Input } from '@rebass/forms'

class SearchForm extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            inputValue: '',
        }
    }

    inputHandler = (event) => {
        this.setState({inputValue: event.target.value})
    }

    render() {
        const clickHandler = () => {
            this.props.onSubmit(this.state.inputValue)
        }

        return (
            <Flex mx={-2} alignItems='center'>
                <Box width={2 / 3} px={2}>
                    <Input
                        type='text' onChange={this.inputHandler}
                        placeholder='Masukkan Nama Mahasiswa'
                    />
                </Box>
                <Box width={1 / 3} px={2}>
                    <Button variant='primary' bg='blue' ml={2}
                        onClick={clickHandler}>
                        Submit
                    </Button>
                </Box>
            </Flex>
        )
    }
}

export default SearchForm