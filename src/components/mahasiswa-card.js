import React from 'react'
import { Box, Card, Heading, Text } from 'rebass'

class MahasiswaCard extends React.Component {
    render() {
        return (
          <Box px={2} py={3} key={this.props.dataMahasiswa.nim}>
            <Card width='320px' bg='#086972' color='#fff' 
            textAlign='center' padding='20px 30px' 
            sx={{
              borderRadius: '20px',
              boxShadow: '5px 10px #888888'
            }}>
              <Heading>{this.props.dataMahasiswa.nama_panggilan}</Heading>
              <Text pb='10px'>{this.props.dataMahasiswa.nama_lengkap}</Text>
              <Text pb='5px'>{this.props.dataMahasiswa.nim}</Text>
              <Text pb='10px'>{this.props.dataMahasiswa.nomor_telepon}</Text>
              <Text pb='5px'>{this.props.dataMahasiswa.id_line}</Text>
              <Text pb='10px' sx={{overflow: 'hidden', textOverflow: 'ellipsis'}}>
                {this.props.dataMahasiswa.email}
              </Text>
              <Text pb='5px'>{this.props.dataMahasiswa.hobi}</Text>
              <Text pb='5px'>{this.props.dataMahasiswa.tanggal_lahir}</Text>
            </Card>
          </Box>
        )
    }
}

export default MahasiswaCard